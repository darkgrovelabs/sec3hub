import {
  ResponseError,
  TPaginationRequestParams,
  TPaginationRequestResult,
} from '@/types'
import { TResource, TResultGeTResourceStats } from './types'

export const VOTE_SIGN_MESSAGE =
  'Please sign the transaction to upvote this resource. It wont cost you any gas. Thanks!'

async function getResources(
  props?: TPaginationRequestParams
): Promise<TPaginationRequestResult<TResource>> {
  //backend start at 1
  const page = props?.page ? props.page + 1 : 1
  const limit = props?.limit || 10
  const order = props?.order || 'desc'
  const sort = props?.sort || 'up_votes'

  let url = `https://backbonez.fly.dev/resources?page=${page}&limit=${limit}&order=${order}&sort=${sort}`

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

async function getResourcesStats(): Promise<TResultGeTResourceStats> {
  const response = await fetch('https://backbonez.fly.dev/resources/stats', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new ResponseError(response.statusText, response.status)
  }

  const data = await response.json()

  const totalResources = data?.totalResources[0]?.count
  const totalCategories = data?.totalCategories[0]?.count
  const lastRecord = data?.lastRecord[0] as TResource

  return { totalResources, totalCategories, lastRecord }
}

export { getResources, getResourcesStats }
