'use client'

import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  useColorMode,
} from '@/chakra/components'
import useRecentlyAdded from '@/hooks/useRecentlyAdded'
import dayjs from 'dayjs'

type WidgetCardLast<T> = {
  entry: T & { created_at: string; logo_url: string; name: string }
  label?: string
}

export default function WidgetCardLast<T>(props: WidgetCardLast<T>) {
  const { entry, label = 'Recently Added' } = props
  const { colorMode } = useColorMode()
  const { setRecentlyAdded } = useRecentlyAdded()

  const labelColor = colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'
  const iconBgColor = colorMode === 'light' ? 'blue.400' : 'blue.100'

  const daysDiff = dayjs(dayjs()).diff(entry.created_at, 'days')
  const addedWhen =
    daysDiff === 0
      ? `${dayjs(dayjs()).diff(entry.created_at, 'hours')} hours ago`
      : `${dayjs(dayjs()).diff(entry.created_at, 'days')} days ago`

  return (
    <Card
      _hover={{
        cursor: 'pointer',
      }}
      onClick={() => setRecentlyAdded(entry.name)}
    >
      <CardBody display={'flex'} alignContent={'center'}>
        <Flex align={'start'} gap={4}>
          <Flex
            borderRadius={'3xl'}
            justifyContent={'center'}
            alignItems={'start'}
          >
            <Avatar
              name={entry.name}
              src={entry.logo_url}
              h={14}
              w={14}
              bgColor={iconBgColor}
            />
          </Flex>

          <Box>
            <Text
              // lineHeight={'shorter'}
              fontSize={'sm'}
              textTransform={'uppercase'}
              color={labelColor}
            >
              {label}
            </Text>
            {/* <Flex align={'center'} gap={2}> */}
            <Text lineHeight={1} fontSize={'xl'} fontWeight={800}>
              {entry.name}
            </Text>
            <Text fontSize={'xs'} color={labelColor}>
              added {addedWhen}
            </Text>
            {/* </Flex> */}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}
