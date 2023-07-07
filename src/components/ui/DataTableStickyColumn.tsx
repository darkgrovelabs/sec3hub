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
  const bgColor = useColorModeValue('#F6F6F7', '#252529')

  return (
    <Td
      position={'sticky'}
      bg={bgColor}
      zIndex={1}
      left={0}
      isNumeric={isNumeric}
    >
      {children}
    </Td>
  )
}
