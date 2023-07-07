import CompaniesTable from '@/components/companies/CompaniesTable'
import Widgets from '@/components/companies/Widgets'

// TODO:
export const metadata = {
  title: 'Audit Companies',
}

async function getCompanies() {
  const res = await fetch(
    'https://backbonez.fly.dev/companies?page=1&limit=10',
    // revalidate every hour
    { next: { revalidate: 3600 } }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Companies() {
  const data = await getCompanies()

  // console.log(data)

  return (
    <>
      <Widgets />
      <CompaniesTable />
    </>
  )
}
