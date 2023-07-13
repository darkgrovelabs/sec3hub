import { Box, Flex, Link, Text } from '@/chakra/components'
import { FlagIcon } from 'lucide-react'

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
          color='red.200'
        >
          <Flex as='span' gap={1} align='center'>
            <FlagIcon size={12} strokeWidth={'2px'} />
            <Text fontSize='sm'>Report issue or data inaccuracies.</Text>
          </Flex>
        </Link>
      </Box>
      <Flex gap={8} align={'center'}>
        <Link
          href='https://github.com/darkgrovelabs/sec3hub/blob/main/terms-of-service.md'
          isExternal
          variant='muted'
          fontSize={'sm'}
        >
          Terms of service
        </Link>
        <Link
          href='https://github.com/darkgrovelabs/sec3hub/blob/main/privacy-policy.md'
          isExternal
          variant='muted'
          fontSize={'sm'}
        >
          Privacy policy
        </Link>
      </Flex>
    </Flex>
  )
}
