export type TCompany = {
  name: string
  logo_url: string
  type: string
  total_audits: number
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
}

export type TResultGetCompany = {
  data: TCompany[]
  pageCount: number
}
