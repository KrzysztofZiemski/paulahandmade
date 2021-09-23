import { useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import { FilterCategory } from "../helpers/FilterCategory"

export const useProductsByCategory = (allProducts: DatoCmsProduct[]) => {
  const [list, setList] = useState<DatoCmsProduct[]>([])
  const location = useLocation()

  useEffect(() => {
    const filterCategory = new FilterCategory({
      list: allProducts,
      locationHash: location.hash,
    })
    filterCategory.filter()
    setList(filterCategory.get())
  }, [location.hash])

  return list
}
