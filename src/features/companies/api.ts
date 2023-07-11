import {
  TGetCompanyProps,
  TResultGetCompany,
  TUpVoteCompanyMutationParams,
  TCompany,
} from './types'

export const VOTE_SIGN_MESSAGE =
  'Please sign the transaction to upvote this company. It wont cost you any gas. Thanks!'

export interface ResponseError extends Error {
  statusCode?: number
}

export class ResponseError extends Error {
  constructor(message: string, statusCode: number) {
    super(message)

    this.name = 'ResponseError'
    this.statusCode = statusCode
  }
}

async function getCompanies(
  props?: TGetCompanyProps
): Promise<TResultGetCompany> {
  //backend start at 1
  const page = props?.page ? props.page + 1 : 1
  const limit = props?.limit || 10
  const order = props?.order || 'desc'
  const sort = props?.sort || 'up_votes'

  let url = `https://backbonez.fly.dev/companies?page=${page}&limit=${limit}&order=${order}&sort=${sort}`

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

async function getCompaniesStats() {
  const response = await fetch('https://backbonez.fly.dev/companies/stats', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new ResponseError(response.statusText, response.status)
  }

  const data = await response.json()

  const totalCompanies = data?.totalCompanies[0]?.count
  const totalAudits = data?.totalAudits[0]?.sum
  const lastRecord = data?.lastRecord[0] as TCompany

  return { totalCompanies, totalAudits, lastRecord }
}

async function upVoteCompany({
  walletAddress,
  signature,
  companyId,
}: TUpVoteCompanyMutationParams) {
  const response = await fetch('https://backbonez.fly.dev/vote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      msg: VOTE_SIGN_MESSAGE,
      pub: walletAddress,
      sig: signature,
      id: companyId,
      type: 'company',
    }),
  })

  if (!response.ok) {
    throw new ResponseError(response.statusText, response.status)
  }

  return await response.json()
}

export { getCompanies, upVoteCompany, getCompaniesStats }
