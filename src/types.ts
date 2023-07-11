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

export type TPaginationRequestParams = {
  limit?: number
  page?: number
  order?: string
  sort?: string
  keyword?: string
}

export type TUpVoteMutationParams = {
  walletAddress: `0x${string}`
  signature: string
  id: number
}
