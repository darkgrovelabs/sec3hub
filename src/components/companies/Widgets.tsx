'use client'

import { SimpleGrid } from '@/chakra/components'
import WidgetCard from '@/components/ui/WidgetCard'
import { DollarSign, ListOrdered, ShieldCheck } from 'lucide-react'

export default function Widgets() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} mb={4}>
        <WidgetCard label='audits' value={4560} icon={ShieldCheck} />
        <WidgetCard label='companies' value={50} icon={ListOrdered} />
        <WidgetCard
          icon={DollarSign}
          label='average price per hour (usd)'
          value='200-300$'
        />
      </SimpleGrid>
    </>
  )
}
