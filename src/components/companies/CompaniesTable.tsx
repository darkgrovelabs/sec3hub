'use client'

import {
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Table,
  Thead,
  Tr,
  Heading,
} from '@/chakra/components'
import Card from '../ui/Card'

type CompaniesTableProps = {
  data?: []
}

export default function CompaniesTable(props: CompaniesTableProps) {
  const { data } = props

  return (
    <Card>
      <TableContainer>
        <Table variant='unstyled' size={'lg'}>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th fontWeight={800}>Name</Th>
              <Th fontWeight={800}>Type</Th>
              <Th fontWeight={800}>Services</Th>
              <Th fontWeight={800}>Audits</Th>
              <Th fontWeight={800} isNumeric>
                Price per hour
              </Th>

              <Th fontWeight={800}>Sample Reports</Th>
              <Th fontWeight={800} isNumeric>
                Year Founded
              </Th>
              <Th fontWeight={800}>Links</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
            </Tr>
            <Tr>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
            </Tr>
            <Tr>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
            </Tr>
            <Tr>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
              <Td>TBD</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  )
}
