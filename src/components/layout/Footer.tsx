import { Box, Flex, Text, Link, Icon } from '@/chakra/components'
import { FlagIcon } from 'lucide-react'
// import { FlagIcon } from 'lucide-react'

export default function Footer() {
  return (
    <Flex
      mx={2}
      gap={2}
      align={'flex-start'}
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
    >
      <Box>
        <Text variant='muted' fontSize={{ base: 'sm', md: 'md' }}>
          Made with ❤️️ and proudly Open Source by{' '}
          <Link href='https://github.com/darkgrovelabs' isExternal>
            DarkGrove Labs.
          </Link>
        </Text>
        <Link
          href='https://github.com/darkgrovelabs/sec3hub/issues/new'
          isExternal
        >
          <Text variant='muted' fontSize={{ base: 'sm', md: 'md' }}>
            Report issue or data inaccuracies.
          </Text>
        </Link>
      </Box>
      <Flex gap={8} align={'center'}>
        {/* <Icon as={FlagIcon} color='red.400' /> */}
        <Text variant='muted' fontSize={{ base: 'sm', md: 'md' }}>
          Terms of service
        </Text>
        <Text variant='muted' fontSize={{ base: 'sm', md: 'md' }}>
          Privacy policy
        </Text>
      </Flex>
    </Flex>
  )
}
