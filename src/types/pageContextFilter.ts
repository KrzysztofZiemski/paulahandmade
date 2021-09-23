import { categoryType } from "./category"
import {
  NameOfCategory,
  SubCategoryBraceles,
  SubCategoryEarrings,
  SubCategoryMascots,
  SubCategoryScarves,
} from "./datoCmsCategoryProduct"

export interface PageContextFilter {
  type: categoryType
  category: NameOfCategory | null
  subcategory:
    | SubCategoryBraceles
    | SubCategoryScarves
    | SubCategoryEarrings
    | SubCategoryMascots
    | NameOfCategory
    | null
}
