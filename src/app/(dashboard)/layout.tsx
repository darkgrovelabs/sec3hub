// layout page
// dashboard navigation with sidebar

import { Box, Flex } from '@/chakra/components'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Flex as='main' minH={'100vh'}>
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <Box flex={1} overflowX={'clip'}>
          <Navbar />
          <Box flex={1} as='section' px={4} py={6}>
            <Box mb={4}>{children}</Box>
            <Footer />
          </Box>
        </Box>
      </Flex>
    </>
  )
}

//rgb(20,20,20)
