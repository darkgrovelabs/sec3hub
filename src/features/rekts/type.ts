export type TRekt = {
  id: number
  name: string
  sources: string[]
  txs: string[]
  damage: number
  date: string
  website: string
  logo_url: string
  category: string
  audited_by: string[]
  chain: string
  created_at: string
}

export type TResultGetRektStats = {
  totalRekts: number
  totalDamage: number
  lastRecord: TRekt
}
