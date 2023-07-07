import { Box } from '@/chakra/components'
import CompaniesTable from '@/components/companies/CompaniesTable'
import Widgets from '@/components/companies/Widgets'
import { getCompanies } from '@/lib/companies'

// TODO:
export const metadata = {
  title: 'Audit Companies',
}

export default async function Companies() {
  // initial request
  const { data, pageCount, rowCount } = await getCompanies()

  return (
    <>
      <Box mb={4}>
        <Widgets companies={rowCount} />
      </Box>
      <CompaniesTable initialData={data} initialPageCount={pageCount} />
    </>
  )
}
