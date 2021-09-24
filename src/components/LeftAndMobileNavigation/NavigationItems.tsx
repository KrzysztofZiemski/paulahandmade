import React, { FunctionComponent } from "react"
import { getSlugify } from "../../helpers/getSlugify"
import { categoriesList } from "../../utils/cateroriesList"
import { routes } from "../../utils/routes"
import NavigationItem from "./NavigationItem"
import NavigationItemType from "./NavigationItemType"

interface NavigationItemsProps {
  onClose?: () => void
}

const NavigationItems: FunctionComponent<NavigationItemsProps> = ({
  onClose,
}) => {
  return (
    <>
      <NavigationItemType exactly text={"Pokaż wszystko"} to={"/"} />
      {categoriesList.map(({ type, categories }) => {
        const baseUrl = `${routes.products}/${getSlugify(type)}`
        return (
          <div key={type}>
            <NavigationItemType text={type} to={baseUrl} />
            {categories.map(category => {
              return (
                <NavigationItem
                  onClose={onClose}
                  key={category.name}
                  category={category}
                  baseUrl={baseUrl}
                />
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default NavigationItems
