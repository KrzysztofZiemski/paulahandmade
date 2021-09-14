import { DanoCmsContentModular } from "./danoCmsContentModular"
import { DatoCmsPhoto } from "./datoCmsPhoto"
import { Tag } from "./Tag"

export type Content = {
  model: {
    apiKey: DanoCmsContentModular
  }
  text: string
}

export interface DatoCmsProduct {
  id: string
  category: string
  name: string
  price: number
  photos: DatoCmsPhoto[]
  description: Content[]
  tags: Tag[]
}
