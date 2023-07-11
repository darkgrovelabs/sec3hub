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
import { TAuditor } from '../types'
import dayjs from 'dayjs'

type WidgetAuditorProps = {
  auditor: TAuditor
}

export default function WidgetAuditor(props: WidgetAuditorProps) {
  const { auditor } = props
  const { colorMode } = useColorMode()

  const labelColor = colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'
  const iconBgColor = colorMode === 'light' ? 'blue.400' : 'blue.100'

  const date = dayjs(dayjs()).diff(auditor.created_at, 'days')

  return (
    <>
      <Card>
        <CardBody display={'flex'} alignContent={'center'}>
          <Flex align={'center'} gap={4}>
            <Flex
              borderRadius={'3xl'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Avatar
                name={auditor.name}
                src={auditor.logo_url}
                h={14}
                w={14}
                bgColor={iconBgColor}
              />
            </Flex>

            <Box>
              <Text
                lineHeight={'shorter'}
                fontSize={'sm'}
                textTransform={'uppercase'}
                color={labelColor}
              >
                Recently added
              </Text>
              <Flex align={'center'} gap={2}>
                <Text fontSize={'xl'} fontWeight={800}>
                  {auditor.name}
                </Text>
                <Text as='span' fontSize={'xs'} color={labelColor}>
                  added {date} days ago
                </Text>
              </Flex>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  )
}