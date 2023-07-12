import { Box, Flex, Text, Link } from '@/chakra/components'

export default function Footer() {
  return (
    <Flex align={'center'}>
      <Text fontSize={'sm'} variant='muted'>
        Made with ❤️ and proudly Open Source by{' '}
        <Link href='https://github.com/darkgrovelabs' isExternal>
          DarkGrove Labs
        </Link>
        .{' '}
        <Link
          href='https://github.com/darkgrovelabs/sec3hub/issues/new'
          isExternal
        >
          Report issue or data inaccuracies.
        </Link>
      </Text>
    </Flex>
  )
}
