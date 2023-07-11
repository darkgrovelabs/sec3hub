'use client'

import { SimpleGrid } from '@/chakra/components'
import WidgetCard from '@/components/WidgetCard'
import { ListOrdered, ShieldCheck } from 'lucide-react'
import { TCompany } from '../types'
import WidgetCompany from './WidgetCompany'

type WidgetsProps = {
  totalCompanies: number
  totalAudits: number
  lastCompany: TCompany
}

export default function Widgets(props: WidgetsProps) {
  const { totalCompanies, totalAudits, lastCompany } = props

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      <WidgetCard label='companies' value={totalCompanies} icon={ListOrdered} />
      <WidgetCard label='audits' icon={ShieldCheck} value={totalAudits} />
      <WidgetCompany company={lastCompany} />
    </SimpleGrid>
  )
}
