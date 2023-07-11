'use client'

import { SimpleGrid } from '@/chakra/components'
import WidgetCard from '@/components/WidgetCard'
import { ListOrdered, ShieldCheck } from 'lucide-react'
import { TAuditor } from '../types'
import WidgetAuditor from './WidgetAuditor'

type WidgetsProps = {
  totalCompanies: number
  totalAudits: number
  lastAuditor: TAuditor
}

export default function Widgets(props: WidgetsProps) {
  const { totalCompanies, totalAudits, lastAuditor } = props

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      <WidgetCard label='auditors' value={totalCompanies} icon={ListOrdered} />
      <WidgetCard label='audits' icon={ShieldCheck} value={totalAudits} />
      <WidgetAuditor company={lastAuditor} />
    </SimpleGrid>
  )
}
