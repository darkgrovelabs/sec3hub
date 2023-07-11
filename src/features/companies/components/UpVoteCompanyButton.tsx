'use client'

import { Button, Icon, useToast } from '@/chakra/components'
import { ResponseError, upVoteCompany } from '@/features/companies/api'
import { TUpVoteCompanyMutationParams } from '@/features/companies/types'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useMutation } from '@tanstack/react-query'
import { signMessage } from '@wagmi/core'
import canvasConfetti from 'canvas-confetti'
import { ArrowUpCircle } from 'lucide-react'
import { useState } from 'react'
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
  const toast = useToast()
  const { votes, companyId } = props

  // TODO: Update cache when mutation happens
  // for now, companies are refetch on every table change
  const [optimisticVotes, setOptimisticVotes] = useState<number>(votes)

  const upVote = useMutation({
    mutationFn: (params: TUpVoteCompanyMutationParams) => upVoteCompany(params),
    onSuccess: () => {
      setOptimisticVotes((prev) => prev + 1)
      shoot()
      toast({
        title: 'Thank you!',
        description: `We got your vote`,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
    },
    onError: (error: ResponseError) => {
      // just show success if user already voted, its fine
      if (error.statusCode === 409) {
        return toast({
          title: 'Thank you!',
          description: `We got your vote`,
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top',
        })
      }
    },
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

    upVote.mutate({ walletAddress: address, signature, companyId })
  }

  return (
    <>
      <Button
        size={{ base: 'sm', xl: 'md' }}
        variant='ghost'
        leftIcon={
          <Icon fontSize={20} color={'primary.300'} as={ArrowUpCircle} />
        }
        lineHeight={0}
        isLoading={upVote.isLoading}
        onClick={handleClick}
        fontWeight={optimisticVotes > 0 ? 800 : 400}
        color={'inherit'}
      >
        {optimisticVotes}
      </Button>
    </>
  )
}
