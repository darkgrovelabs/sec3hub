'use client'

import { Button, Icon } from '@/chakra/components'
import { upVoteCompany } from '@/features/companies/api'
import { TUpVoteCompanyMutationParams } from '@/features/companies/types'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useMutation } from '@tanstack/react-query'
import { signMessage } from '@wagmi/core'
import canvasConfetti from 'canvas-confetti'
import { ArrowUpCircle } from 'lucide-react'
import { useRef, useState } from 'react'
import { useAccount } from 'wagmi'

type UpVoteCompanyButtonProps = {
  votes: number
  companyId: number
}

var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
}

function shoot() {
  canvasConfetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star'],
  })

  canvasConfetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle'],
  })
}

export default function UpVoteCompanyButton(props: UpVoteCompanyButtonProps) {
  const { address } = useAccount()
  const { openConnectModal } = useConnectModal()
  const confettiRef = useRef()
  const { votes, companyId } = props

  // TODO: Update cache when mutation happens
  // for now, companies are refetch on every table change
  const [optimisticVotes, setOptimisticVotes] = useState<number>(votes)

  const upVote = useMutation({
    mutationFn: (params: TUpVoteCompanyMutationParams) => upVoteCompany(params),
    onSuccess: () => {
      setOptimisticVotes((prev) => prev + 1)
      shoot()
    },
    //TODO: handle error
    onError: () => {},
  })

  const handleClick = async () => {
    if (!address) {
      if (!openConnectModal) return
      return openConnectModal()
    }

    const signature = await signMessage({
      message:
        'Please sign the transaction to upvote this company. It wont cost you any gas. Thanks!',
    })

    await upVote.mutateAsync({ walletAddress: address, signature, companyId })
  }

  return (
    <>
      <Button
        size={{ base: 'sm', xl: 'md' }}
        variant='solid'
        leftIcon={<Icon as={ArrowUpCircle} />}
        lineHeight={0}
        onClick={handleClick}
      >
        {optimisticVotes}
      </Button>
    </>
  )
}
