// layout page
// dashboard navigation with sidebar

import { Box, Button } from '@/chakra/components'

export default function Home() {
  return (
    <>
      <Box as='main' display={'flex'} gap={4} minH={'100vh'}>
        {/* sidebar */}
        <Box width={'250px'} bg={'red.500'}></Box>

        <Box flex={1} bg={'blue.500'}></Box>
      </Box>
    </>
  )
}
