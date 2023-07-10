import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Image,
  Text,
} from '@/chakra/components'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { WalletIcon } from 'lucide-react'

type ConnectWalletProps = {}

export default function ConnectWallet(props: ConnectWalletProps) {
  const {} = props

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <Box
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    w='100%'
                    leftIcon={<Icon color='primary.300' as={WalletIcon} />}
                    onClick={openConnectModal}
                    type='button'
                  >
                    Connect Wallet
                  </Button>
                )
              }

              if (chain.unsupported) {
                return (
                  <Button
                    w='100%'
                    colorScheme={'red'}
                    onClick={openChainModal}
                    type='button'
                  >
                    Wrong network
                  </Button>
                )
              }

              return (
                <ButtonGroup minW={'100%'} isAttached alignItems={'center'}>
                  <Button
                    w='100%'
                    leftIcon={
                      <Icon boxSize={3} viewBox='0 0 200 200' color='green.500'>
                        <path
                          fill='currentColor'
                          d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                      </Icon>
                    }
                    justifyContent={'flex-start'}
                    onClick={openAccountModal}
                    type='button'
                  >
                    {account.displayName}

                    {/* {account.displayBalance && (
                      <Text fontSize={'sm'}>({account.displayBalance})</Text>
                    )} */}
                  </Button>
                  <Button pr={2} pl={2} onClick={openChainModal} type='button'>
                    {chain.hasIcon && (
                      <>
                        {chain.iconUrl && (
                          <Image
                            alt='Network icon'
                            src={chain.iconUrl}
                            boxSize={5}
                          />
                        )}
                      </>
                    )}
                  </Button>
                </ButtonGroup>
              )
            })()}
          </Box>
        )
      }}
    </ConnectButton.Custom>
  )
}
