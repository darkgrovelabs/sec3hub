'use client'

import { SimpleGrid } from '@/chakra/components'
import WidgetCard from '@/components/WidgetCard'
import { BoxIcon, DollarSignIcon, HeartIcon } from 'lucide-react'
import { TRekt } from '../type'
import formatCurrency from '@/utils/formatCurrency'
import WidgetRekt from './WidgetRekt'

type WidgetsProps = {
  totalRekts: number
  totalDamage: number
  lastRekt: TRekt
}

export default function Widgets(props: WidgetsProps) {
  const { totalRekts, totalDamage, lastRekt } = props

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      <WidgetCard label='Rekts' value={totalRekts} icon={BoxIcon} />
      <WidgetCard
        label='Total Damage'
        icon={DollarSignIcon}
        value={formatCurrency(totalDamage)}
      />
      <WidgetRekt rekt={lastRekt} />
    </SimpleGrid>
  )
}
