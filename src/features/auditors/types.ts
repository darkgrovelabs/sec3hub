export type TAuditor = {
  id: number
  name: string
  logo_url: string
  type: 'company' | 'solo' | 'crowdsource'
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

export type TResultGetAuditorStats = {
  totalAuditors: number
  totalAudits: number
  lastRecord: TAuditor
}
