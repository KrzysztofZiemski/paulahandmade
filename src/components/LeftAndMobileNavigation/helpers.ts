import { NavItem } from "../../types/NavItem"
import { Params } from "../../types/params"

export const getCategoryParam = (params: URLSearchParams) =>
  params.get(Params.category) || ""

export const subMenuIsOpen = ({
  item,
  param,
}: {
  item: NavItem
  param: string
}) => {
  if (!item.subCategories) return false
  const index = item.subCategories.findIndex(el => {
    return el === param
  })
  return index !== -1
}
