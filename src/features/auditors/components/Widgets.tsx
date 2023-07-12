'use client'

import { SimpleGrid } from '@/chakra/components'
import WidgetCard from '@/components/WidgetCard'
import WidgetCardLast from '@/components/WidgetCardLast'
import { ListOrdered, ShieldCheck } from 'lucide-react'
import { TAuditor } from '../types'

type WidgetsProps = {
  totalAuditors: number
  totalAudits: number
  lastAuditor: TAuditor
}

export default function Widgets(props: WidgetsProps) {
  const { totalAuditors, totalAudits, lastAuditor } = props

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      <WidgetCard label='auditors' value={totalAuditors} icon={ListOrdered} />
      <WidgetCard label='audits' icon={ShieldCheck} value={totalAudits} />

      <WidgetCardLast entry={lastAuditor} />
    </SimpleGrid>
  )
}
