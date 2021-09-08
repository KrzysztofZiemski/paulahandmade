type NavigationSingleListItem = {
  label: string
  filter: string
  hasSubList: false
}
type NavigationMultiListItem = {
  hasSubList: true
  label: string
  list: NavigationSingleListItem[]
}

export type NavigationItemType =
  | NavigationSingleListItem
  | NavigationMultiListItem
