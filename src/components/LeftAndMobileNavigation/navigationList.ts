import { NavigationItemType } from "types/navigationItemType"
import { filterQueries } from "../../utils/filterQueries"

export const navigationList: NavigationItemType[] = [
  {
    hasSubList: false,
    label: "Wszystko",
    filter: filterQueries.all,
  },
  {
    hasSubList: true,
    label: "Maskotki",
    list: [
      {
        hasSubList: false,
        label: "Misie",
        filter: filterQueries.misie,
      },
      {
        hasSubList: false,
        label: "Meduzy",
        filter: filterQueries.meduzy,
      },
      {
        hasSubList: false,
        label: "Przedziwne",
        filter: filterQueries.przedziwne,
      },
      {
        hasSubList: false,
        label: "Placki",
        filter: filterQueries.placki,
      },
    ],
  },
  {
    hasSubList: false,
    label: "Chusty",
    filter: filterQueries.chusty,
  },
  {
    hasSubList: false,
    label: "Bransoletki",
    filter: filterQueries.bransoletki,
  },
  {
    hasSubList: false,
    label: "Kolczyki",
    filter: filterQueries.kolczyki,
  },
]
