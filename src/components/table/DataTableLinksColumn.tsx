import { IconButton, Link, Stack, Td, Tooltip } from '@/chakra/components'
import { TAuditor } from '@/features/auditors/types'
import { GithubIcon, LinkIcon, SendIcon, TwitterIcon } from 'lucide-react'

interface DataTableLinksColumnProps extends Pick<TAuditor, 'links'> {}

export default function DataTableLinksColumn(props: DataTableLinksColumnProps) {
  const { links } = props

  const github = links?.github
  const twitter = links?.twitter
  const telegram = links?.telegram
  const website = links?.website

  return (
    <Td>
      <Stack direction={'row'} gap={0}>
        {github && (
          <Link href={github} isExternal>
            <Tooltip hasArrow borderRadius={'lg'} label={'Github'}>
              <IconButton
                size={'sm'}
                variant={'ghost'}
                aria-label='Github'
                icon={<GithubIcon />}
              />
            </Tooltip>
          </Link>
        )}
        {twitter && (
          <Link href={twitter} isExternal>
            <Tooltip hasArrow borderRadius={'lg'} label={'Twitter'}>
              <IconButton
                size={'sm'}
                variant={'ghost'}
                aria-label='Twitter'
                icon={<TwitterIcon />}
              />
            </Tooltip>
          </Link>
        )}
        {website && (
          <Link href={website} isExternal>
            <Tooltip hasArrow borderRadius={'lg'} label={'Website'}>
              <IconButton
                size={'sm'}
                variant={'ghost'}
                aria-label='Website'
                icon={<LinkIcon />}
              />
            </Tooltip>
          </Link>
        )}
        {telegram && (
          <Link href={telegram} isExternal>
            <Tooltip hasArrow borderRadius={'lg'} label={'Telegram'}>
              <IconButton
                size={'sm'}
                variant={'ghost'}
                aria-label='Telegram'
                icon={<SendIcon />}
              />
            </Tooltip>
          </Link>
        )}
      </Stack>
    </Td>
  )
}
