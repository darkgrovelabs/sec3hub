export type TAuditor = {
  id: number
  name: string
  logo_url: string
  type: string
  total_audits: number
  up_votes: number
  price_per_hour?: { min: number; max: number }
  services: string[]
  links: {
    twitter?: string
    telegram?: string
    github?: string
    website?: string
  }
  sample_report: string
  start_year: number
  created_at: string
}

export type TResultGetAuditors = {
  data: TAuditor[]
  pageCount: number
  rowCount: number
}

export type TResultGetAuditorStats = {
  totalAuditors: number
  totalAudits: number
  lastRecord: TAuditor
}

export type TGetAuditorsParams = {
  limit?: number
  page?: number
  order?: string
  sort?: string
  keyword?: string
}

export type TUpVoteAuditorMutationParams = {
  walletAddress: `0x${string}`
  signature: string
  companyId: number
}
