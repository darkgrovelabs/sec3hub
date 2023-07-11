import {
  ResponseError,
  TPaginationRequestParams,
  TUpVoteMutationParams,
} from '@/types'
import { TResultGetAuditors, TAuditor, TResultGetAuditorStats } from './types'

export const VOTE_SIGN_MESSAGE =
  'Please sign the transaction to upvote this auditor. It wont cost you any gas. Thanks!'

async function getAuditors(
  props?: TPaginationRequestParams
): Promise<TResultGetAuditors> {
  //backend start at 1
  const page = props?.page ? props.page + 1 : 1
  const limit = props?.limit || 10
  const order = props?.order || 'desc'
  const sort = props?.sort || 'up_votes'

  let url = `https://backbonez.fly.dev/auditors?page=${page}&limit=${limit}&order=${order}&sort=${sort}`

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

async function getAuditorsStats(): Promise<TResultGetAuditorStats> {
  const response = await fetch('https://backbonez.fly.dev/auditors/stats', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new ResponseError(response.statusText, response.status)
  }

  const data = await response.json()

  const totalAuditors = data?.totalAuditors[0]?.count
  const totalAudits = data?.totalAudits[0]?.sum
  const lastRecord = data?.lastRecord[0] as TAuditor

  return { totalAuditors, totalAudits, lastRecord }
}

async function upVote({ walletAddress, signature, id }: TUpVoteMutationParams) {
  const response = await fetch('https://backbonez.fly.dev/vote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      msg: VOTE_SIGN_MESSAGE,
      pub: walletAddress,
      sig: signature,
      id,
      type: 'auditor',
    }),
  })

  if (!response.ok) {
    throw new ResponseError(response.statusText, response.status)
  }

  return await response.json()
}

export { getAuditors, upVote, getAuditorsStats }
