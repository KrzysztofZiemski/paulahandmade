import { List } from "@material-ui/core"
import { categoryType } from "../types/category"
import { NameOfCategory } from "../types/datoCmsCategoryProduct"
import { DatoCmsProduct } from "../types/datoCmsProduct"

export class FilterCategory {
  private list
  private filter
  constructor({ list, filter }: { filter: any; list: DatoCmsProduct[] }) {
    this.list = list
    this.filter = filter
  }
  private filterByCategory() {
    this.list =
      this.filter.category === null
        ? this.list
        : this.list.filter(el => {
            const nameCategory = el.categoryProduct[0].model.apiKey
            return this.filter.category === nameCategory
          })
  }
  private filterBySubcategory() {
    this.list =
      this.filter.subcategory === null
        ? this.list
        : this.list.filter(el => {
            const nameSubcategory = el.categoryProduct[0].subcategory
            return this.filter.subcategory === nameSubcategory
          })
  }
  private filterByType() {
    this.list = this.list.filter(el => {
      const nameCategory = el.categoryProduct[0].model.apiKey
      switch (this.filter.type) {
        case categoryType.jewelry:
          return (
            nameCategory === NameOfCategory.bracelets_category ||
            nameCategory === NameOfCategory.earrings_category ||
            nameCategory === NameOfCategory.necklaces_category
          )
        case categoryType.crochet_hook:
          return (
            nameCategory === NameOfCategory.mascots_category ||
            nameCategory === NameOfCategory.other ||
            nameCategory === NameOfCategory.scarves_category
          )
        default:
          return true
      }
    })
  }
  get() {
    this.filterByType()
    this.filterByCategory()
    this.filterBySubcategory()
    return this.list
  }
}
