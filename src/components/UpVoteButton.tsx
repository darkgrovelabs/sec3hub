'use client'

import { Button, Icon, useToast } from '@/chakra/components'
import { upVote } from '@/features/auditors/api'

import { ResponseError, TUpVoteMutationParams } from '@/types'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useMutation } from '@tanstack/react-query'
import { signMessage } from '@wagmi/core'
import canvasConfetti from 'canvas-confetti'
import { ArrowUpCircle } from 'lucide-react'
import { useState } from 'react'
import { useAccount } from 'wagmi'

type UpVoteButtonProps = {
  votes: number
  id: number
  message: string
  type: TUpVoteMutationParams['type']
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

export default function UpVoteButton(props: UpVoteButtonProps) {
  const { address } = useAccount()
  const { openConnectModal } = useConnectModal()
  const toast = useToast()
  const { votes, id, message, type } = props

  // TODO: Update cache when mutation happens
  // for now, companies are refetch on every table change
  const [optimisticVotes, setOptimisticVotes] = useState<number>(votes)

  const upVoteMutation = useMutation({
    mutationFn: (params: TUpVoteMutationParams) => upVote(params),
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

    const signature = await signMessage({ message })

    upVoteMutation.mutate({
      walletAddress: address,
      signature,
      id,
      type,
      message,
    })
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
        isLoading={upVoteMutation.isLoading}
        onClick={handleClick}
        fontWeight={optimisticVotes > 0 ? 800 : 400}
        color={'inherit'}
      >
        {optimisticVotes}
      </Button>
    </>
  )
}
