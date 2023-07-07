import { TResultGetCompany } from './types'

type TGetCompanyProps = {
  limit?: number
  page?: number
  order?: string
  sort?: string
  keyword?: string
}

async function getCompanies(
  props?: TGetCompanyProps
): Promise<TResultGetCompany> {
  //backend start at 1
  const page = props?.page ? props.page + 1 : 1
  const limit = props?.limit || 5
  const order = props?.order || 'asc'
  const sort = props?.sort || 'id'

  let url = `https://backbonez.fly.dev/companies?page=${page}&limit=${limit}&order=${order}&sort=${sort}`

  if (props?.keyword) {
    url += `&keyword=${props.keyword}`
  }

  const res = await fetch(
    url,
    // revalidate every hour
    // { next: { revalidate: 3600 } }
    { cache: 'no-store' }
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const rowCount = props?.keyword
    ? res.headers.get('x-keyword-count')
    : res.headers.get('x-row-count')

  return {
    data,
    pageCount: Math.ceil(Number(rowCount) / limit),
  }
}

export { getCompanies }
