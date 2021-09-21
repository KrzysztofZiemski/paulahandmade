import { NameOfCategory, SubCategoryBraceles, SubCategoryEarrings, SubCategoryMascots, SubCategoryOther, SubCategoryScarves } from "./datoCmsCategoryProduct"

export interface NavItem{
  label:string,
  filter:NameOfCategory,
  subCategories?:SubCategoryMascots[]| SubCategoryBraceles[]|SubCategoryScarves[]|SubCategoryEarrings[]|SubCategoryOther[]
}

