import { NameOfCategory, SubCategoryBraceles, SubCategoryEarrings, SubCategoryMascots, SubCategoryScarves } from "../../types/datoCmsCategoryProduct";
import { NavItem } from "../../types/NavItem";

export const navigationList:NavItem[] = [
 {
   label:"Maskotki",
   filter:NameOfCategory.mascots_category,
   subCategories: Object.values(SubCategoryMascots)
 },
 {
   label:"Bransoletki",
   filter:NameOfCategory.bracelets_category,
   subCategories:Object.values(SubCategoryBraceles)
 },
 {
  label:"Chusty",
  filter:NameOfCategory.scarves_category,
  subCategories:Object.values(SubCategoryScarves)
},
{
  label:"Kolczyki",
  filter:NameOfCategory.earrings_category,
  subCategories:Object.values(SubCategoryEarrings)
},
{
  label:"Torebki",
  filter:NameOfCategory.handbags_category,
},
{
  label:"Naszyjniki",
  filter:NameOfCategory.necklaces_category,
}
]
