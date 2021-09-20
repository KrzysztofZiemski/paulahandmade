import { NameOfCategory, SubCategoryBraceles, SubCategoryEarrings, SubCategoryMascots, SubCategoryScarves } from "./datoCmsCategoryProduct"

type NavItemScarves ={
  label:'Chusty',
  filter: NameOfCategory.scarves_category,
  subCategories: keyof  SubCategoryScarves
}

type NavItemMascots ={
  label:'Maskotki',
  filter: NameOfCategory.mascots_category,
  subCategories: keyof  SubCategoryMascots
}
type NavItemEarrings ={
  label:'Kolczyki',
  filter: NameOfCategory.earrings_category,
  subCategories: keyof  SubCategoryEarrings
}

type NavItemBracelets ={
  label:'Bransoletki',
  filter: NameOfCategory.bracelets_category,
  subCategories: keyof  SubCategoryBraceles
}
type NavItemHandbags = {
  label:'Torebki',
  filter:NameOfCategory.handbags_category
}
type NavItemNecklaces= {
  label:'Torebki',
  filter:NameOfCategory.necklaces_category
}

export interface NavItem{
  label:string,
  filter:NameOfCategory,
  subCategories?:SubCategoryMascots[]| SubCategoryBraceles[]|SubCategoryScarves[]|SubCategoryEarrings[]
}

