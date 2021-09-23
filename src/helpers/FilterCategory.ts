import { List } from "@material-ui/core"
import { CategoryType } from "../types/CategoryType"
import { NameOfCategory } from "../types/datoCmsCategoryProduct"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import { getSlugify } from "./getSlugify"

export class FilterCategory {
  private list
  private routes
  constructor({
    list,
    locationHash,
  }: {
    locationHash: string
    list: DatoCmsProduct[]
  }) {
    this.list = list
    this.routes = locationHash.split("/").filter(el => el !== "" && el !== "#")
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
      console.log("subcategory", subcategory)
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
  get() {
    return this.list
  }
  filter() {
    if (this.routes.length === 0) return this.list
    this.filterByType()
    this.filterByCategory()
    this.filterBySubcategory()
  }
}
