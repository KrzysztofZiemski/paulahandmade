import { NameOfCategory, SubCategoryBraceles, SubCategoryEarrings, SubCategoryMascots, SubCategoryOther, SubCategoryScarves } from "../../types/datoCmsCategoryProduct";
import { NavItem } from "../../types/NavItem";


export const navigationList:{
  jewelry:NavItem[],
  crochetHook:NavItem[]
  all:NavItem
} = {
  all:{
    label:'Wszystko',
    filter:NameOfCategory.all
  },
  jewelry:[
    {
      label:"Bransoletki",
      filter:NameOfCategory.bracelets_category,
      subCategories:Object.values(SubCategoryBraceles)
    },{
      label:"Kolczyki",
      filter:NameOfCategory.earrings_category,
      subCategories:Object.values(SubCategoryEarrings)
    },{
      label:"Naszyjniki",
      filter:NameOfCategory.necklaces_category,
    }
  ],
  crochetHook:[ {
    label:"Maskotki",
    filter:NameOfCategory.mascots_category,
    subCategories: Object.values(SubCategoryMascots)
  },{
    label:"Chusty",
    filter:NameOfCategory.scarves_category,
    subCategories:Object.values(SubCategoryScarves)
  },
  {
    label:"Inne",
    filter:NameOfCategory.other,
    subCategories:Object.values(SubCategoryOther)
  }]
}

// export const navigationList:NavItem[] = [
//   {
//     label:"Wszystko",
//     filter:NameOfCategory.all
//   },
//  {
//    label:"Maskotki",
//    filter:NameOfCategory.mascots_category,
//    subCategories: Object.values(SubCategoryMascots)
//  },
//  {
//    label:"Bransoletki",
//    filter:NameOfCategory.bracelets_category,
//    subCategories:Object.values(SubCategoryBraceles)
//  },
//  {
//   label:"Chusty",
//   filter:NameOfCategory.scarves_category,
//   subCategories:Object.values(SubCategoryScarves)
// },
// {
//   label:"Kolczyki",
//   filter:NameOfCategory.earrings_category,
//   subCategories:Object.values(SubCategoryEarrings)
// },
// {
//   label:"Naszyjniki",
//   filter:NameOfCategory.necklaces_category,
// }
// ]
