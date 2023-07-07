import CompaniesTable from '@/components/companies/CompaniesTable'
import Widgets from '@/components/companies/Widgets'
import { getCompanies } from '@/lib/companies'

// TODO:
export const metadata = {
  title: 'Audit Companies',
}

export default async function Companies() {
  // initial request
  const { data, pageCount } = await getCompanies()

  return (
    <>
      <Widgets />
      <CompaniesTable initialData={data} initialPageCount={pageCount} />
    </>
  )
}
