import { ResponseError, TPaginationRequestParams } from '@/types'
import { TRekt, TResultGetRektStats, TResultGetRekts } from './type'

async function getRekts(
  props?: TPaginationRequestParams
): Promise<TResultGetRekts> {
  //backend start at 1
  const page = props?.page ? props.page + 1 : 1
  const limit = props?.limit || 10
  const order = props?.order || 'desc'
  const sort = props?.sort || 'damage'

  let url = `https://backbonez.fly.dev/rekts?page=${page}&limit=${limit}&order=${order}&sort=${sort}`

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

async function getRektsStats(): Promise<TResultGetRektStats> {
  const response = await fetch('https://backbonez.fly.dev/rekts/stats', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new ResponseError(response.statusText, response.status)
  }

  const data = await response.json()

  const totalRekts = data?.totalRekts[0]?.count
  const totalDamage = data?.totalDamage[0]?.sum
  const lastRecord = data?.lastRecord[0] as TRekt

  return { totalRekts, totalDamage, lastRecord }
}

export { getRekts, getRektsStats }
