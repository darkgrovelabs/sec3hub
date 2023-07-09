'use client'

import { SimpleGrid } from '@/chakra/components'
import WidgetCard from '@/components/ui/WidgetCard'
import { ListOrdered, ShieldCheck } from 'lucide-react'

type WidgetsProps = {
  companies: number
}

export default function Widgets(props: WidgetsProps) {
  const { companies } = props
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
        <WidgetCard label='companies' value={companies} icon={ListOrdered} />
        <WidgetCard label='audits' icon={ShieldCheck} value='TODO' />
        {/* <WidgetCard
          icon={DollarSign}
          label='average price per hour (usd)'
          value='TODO'
        /> */}
      </SimpleGrid>
    </>
  )
}
