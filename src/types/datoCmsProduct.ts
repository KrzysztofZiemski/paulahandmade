import { DatoCmsContentModular } from "./datoCmsContentModular"
import { DatoCmsPhoto } from "./datoCmsPhoto"
import { Tag } from "./tag"

export type Content = {
  model: {
    apiKey: DatoCmsContentModular
  }
  text: string
}
export type ProductColor = {
    colorsBase:string
}

export interface DatoCmsProduct {
  id: string
  category: string
  name: string
  price: number
  photos: DatoCmsPhoto[]
  description?: Content[]
  tags: Tag[]
  shortDescription: string
  productColors: ProductColor[]
}
