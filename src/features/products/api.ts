import {
  ResponseError,
  TPaginationRequestParams,
  TPaginationRequestResult,
} from '@/types'
import { TProduct, TResultGetProductStats } from './types'

export const VOTE_SIGN_MESSAGE =
  'Please sign the transaction to upvote this product. It wont cost you any gas. Thanks!'

async function getProducts(
  props?: TPaginationRequestParams
): Promise<TPaginationRequestResult<TProduct>> {
  //backend start at 1
  const page = props?.page ? props.page + 1 : 1
  const limit = props?.limit || 10
  const order = props?.order || 'desc'
  const sort = props?.sort || 'up_votes'

  let url = `https://backbonez.fly.dev/products?page=${page}&limit=${limit}&order=${order}&sort=${sort}`

  if (props?.keyword) {
    url += `&keyword=${props.keyword}`
  }

  const response = await fetch(
    url,
    // revalidate every hour
    // { next: { revalidate: 3600 } }
    { cache: 'no-store' }
  )

  // Recommendation: handle errors
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new ResponseError(response.statusText, response.status)
  }

  const data = await response.json()
  const rowCount = props?.keyword
    ? response.headers.get('x-keyword-count')
    : response.headers.get('x-row-count')

  return {
    data,
    pageCount: Math.ceil(Number(rowCount) / limit),
    rowCount: Number(rowCount),
  }
}

async function getProductsStats(): Promise<TResultGetProductStats> {
  const response = await fetch('https://backbonez.fly.dev/products/stats', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new ResponseError(response.statusText, response.status)
  }

  const data = await response.json()

  const totalProducts = data?.totalProducts[0]?.count
  const totalOpenSource = data?.totalOpenSource[0]?.count
  const lastRecord = data?.lastRecord[0] as TProduct

  return { totalProducts, totalOpenSource, lastRecord }
}

export { getProducts, getProductsStats }
