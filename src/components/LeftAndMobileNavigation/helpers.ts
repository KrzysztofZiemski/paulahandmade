import { NavigationItemType } from "types/navigationItemType"
import { Params } from "../../types/params"

export const getCategoryParam = (params: URLSearchParams) =>
  params.get(Params.category) || ""

export const subMenuIsOpen = ({
  item,
  param,
}: {
  item: NavigationItemType
  param: string
}) => {
  if (!item.hasSubList) return false
  const index = item.list.findIndex(el => {
    return el.filter === param
  })
  return index !== -1
}
