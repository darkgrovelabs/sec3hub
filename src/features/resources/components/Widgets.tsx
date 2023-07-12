'use client'

import { SimpleGrid } from '@/chakra/components'
import WidgetCard from '@/components/WidgetCard'
import WidgetCardLast from '@/components/WidgetCardLast'
import { FolderHeartIcon, ListOrderedIcon } from 'lucide-react'
import { TResource } from '../types'

type WidgetsProps = {
  totalResources: number
  totalCategories: number
  last: TResource
}

export default function Widgets(props: WidgetsProps) {
  const { totalResources, totalCategories, last } = props

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      <WidgetCard
        label='Resources'
        value={totalResources}
        icon={ListOrderedIcon}
      />
      <WidgetCard
        label='Categories'
        icon={FolderHeartIcon}
        value={totalCategories}
      />
      <WidgetCardLast entry={last} />
    </SimpleGrid>
  )
}
