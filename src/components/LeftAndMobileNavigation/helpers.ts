import { NavigationItemType } from "types/navigationItemType"

export const getCategoryParam = (params: string) =>
  new URLSearchParams(params).get("category") || ""

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
