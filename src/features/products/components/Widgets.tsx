'use client'

import { SimpleGrid } from '@/chakra/components'
import WidgetCard from '@/components/WidgetCard'
import WidgetCardLast from '@/components/WidgetCardLast'
import { BoxIcon, HeartIcon } from 'lucide-react'
import { TProduct } from '../types'

type WidgetsProps = {
  totalProducts: number
  totalOpenSource: number
  lastProduct: TProduct
}

export default function Widgets(props: WidgetsProps) {
  const { totalProducts, totalOpenSource, lastProduct } = props

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      <WidgetCard label='products' value={totalProducts} icon={BoxIcon} />
      <WidgetCard
        label='Open Source (like us)'
        icon={HeartIcon}
        value={totalOpenSource}
      />
      <WidgetCardLast entry={lastProduct} />
    </SimpleGrid>
  )
}
