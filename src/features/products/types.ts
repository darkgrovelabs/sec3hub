export type TProduct = {
  id: number
  name: string
  is_commercial: boolean
  is_opensource: boolean
  categories: string[]
  website: string
  logo_url: string
  up_votes: number
  start_year: number
  description: string
  created_at: string
  links: {
    twitter?: string
    telegram?: string
    github?: string
    website?: string
  }
}

export type TResultGetProducts = {
  data: TProduct[]
  pageCount: number
  rowCount: number
}

export type TResultGetProductStats = {
  totalProducts: number
  totalOpenSource: number
  lastRecord: TProduct
}
