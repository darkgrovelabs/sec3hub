export type TResource = {
  id: number
  name: string
  categories: string[]
  logo_url: string
  link: string
  up_votes: number
  description: string
  created_at: string
}

export type TResultGeTResourceStats = {
  totalResources: number
  totalCategories: number
  lastRecord: TResource
}
