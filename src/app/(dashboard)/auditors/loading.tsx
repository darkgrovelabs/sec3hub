import { Box, SimpleGrid, Skeleton } from '@/chakra/components'

export default function Loading() {
  return (
    <>
      <Box mb={4}>
        <SimpleGrid mb={4} columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
          <Skeleton h={'5em'}></Skeleton>
          <Skeleton h={'5em'}></Skeleton>
          <Skeleton h={'5em'}></Skeleton>
        </SimpleGrid>
      </Box>
      <Skeleton h={'20em'}></Skeleton>
    </>
  )
}
