import {
  NameOfCategory,
  SubCategoryBraceles,
  SubCategoryEarrings,
  SubCategoryMascots,
  SubCategoryOther,
  SubCategoryScarves,
} from "../types/datoCmsCategoryProduct"
import { CategoryType } from "../types/CategoryType"

export const categoriesList = [
  {
    type: CategoryType.jewelry,
    categories: [
      {
        name: NameOfCategory.bracelets_category,
        subcategories: Object.values(SubCategoryBraceles),
      },
      {
        name: NameOfCategory.earrings_category,
        subcategories: Object.values(SubCategoryEarrings),
      },
      {
        name: NameOfCategory.necklaces_category,
        subcategories: [],
      },
    ],
  },
  {
    type: CategoryType.crochet_hook,
    categories: [
      {
        name: NameOfCategory.mascots_category,
        subcategories: Object.values(SubCategoryMascots),
      },
      {
        name: NameOfCategory.other,
        subcategories: Object.values(SubCategoryOther),
      },
      {
        name: NameOfCategory.scarves_category,
        subcategories: Object.values(SubCategoryScarves),
      },
    ],
  },
]
