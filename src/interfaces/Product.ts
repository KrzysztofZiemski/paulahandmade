import { Category } from "./Category"
import { Photo } from "./Photo"

export interface Product {
  id: string
  description: string
  category: Category
  name: string
  price: number
  tags: string
  photos: Photo[]
}
