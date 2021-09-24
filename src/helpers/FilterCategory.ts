import { List } from "@material-ui/core"
import slugify from "slugify"
import { CategoryType } from "../types/CategoryType"
import {
  NameOfCategory,
  SubCategoryBraceles,
  SubCategoryEarrings,
  SubCategoryMascots,
  SubCategoryOther,
  SubCategoryScarves,
} from "../types/datoCmsCategoryProduct"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import { getSlugify } from "./getSlugify"

export class FilterCategory {
  private list
  private routes
  private name = ""
  constructor({
    list,
    locationHash,
  }: {
    locationHash: string
    list: DatoCmsProduct[]
  }) {
    this.list = list
    this.routes = locationHash.split("/").filter(el => el !== "" && el !== "#")
    this.setName()
  }
  getName() {
    return this.name
  }
  get() {
    return this.list
  }
  filter() {
    if (this.routes.length === 0) return this.list
    this.filterByType()
    this.filterByCategory()
    this.filterBySubcategory()
  }

  private filterByCategory() {
    if (!this.routes[1]) return
    this.list = this.list.filter(el => {
      const slugifyCategory = getSlugify(el.categoryProduct[0].model.apiKey)
      return slugifyCategory === this.routes[1]
    })
  }
  private filterBySubcategory() {
    if (!this.routes[2]) return
    this.list = this.list.filter(el => {
      const subcategory = el.categoryProduct[0].subcategory
      if (!subcategory) return false
      return this.routes[2] === getSlugify(subcategory)
    })
  }
  private filterByType() {
    if (!this.routes[0]) return

    this.list = this.list.filter(el => {
      const nameCategory = el.categoryProduct[0].model.apiKey

      switch (this.routes[0]) {
        case getSlugify(CategoryType.crochet_hook):
          return (
            nameCategory === NameOfCategory.mascots_category ||
            nameCategory === NameOfCategory.other ||
            nameCategory === NameOfCategory.scarves_category
          )
        case getSlugify(CategoryType.jewelry):
          return (
            nameCategory === NameOfCategory.bracelets_category ||
            nameCategory === NameOfCategory.earrings_category ||
            nameCategory === NameOfCategory.necklaces_category
          )
        default:
          return true
      }
    })
  }
  private setName() {
    if (!this.routes[0]) return (this.name = "Oferta")
    if (this.routes[2]) {
      const list = [
        ...Object.values(SubCategoryBraceles),
        ...Object.values(SubCategoryScarves),
        ...Object.values(SubCategoryOther),
        ...Object.values(SubCategoryEarrings),
        ...Object.values(SubCategoryMascots),
      ]
      list.forEach(name => {
        this.checkSetName(this.routes[2], name)
      })
    } else if (this.routes[1]) {
      Object.values(NameOfCategory).forEach(name => {
        this.checkSetName(this.routes[1], name)
      })
    } else {
      Object.values(CategoryType).forEach(name => {
        this.checkSetName(this.routes[0], name)
      })
    }
  }
  private checkSetName(route: string, name: string) {
    if (slugify(name) === route) this.name = name
  }
}
