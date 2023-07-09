import { Td, useColorModeValue } from '@/chakra/components'
import { Table } from '@tanstack/react-table'
import { ReactNode } from 'react'

type DataTableStickyColumnProps = {
  children: ReactNode
  isNumeric?: boolean
}

export default function DataTableStickyColumn(
  props: DataTableStickyColumnProps
) {
  const { children, isNumeric = false } = props
  const bgColor = useColorModeValue('#fff', '#0E0E0E')

  return (
    <Td position={'sticky'} bg={bgColor} left={0} isNumeric={isNumeric}>
      {children}
    </Td>
  )
}
