import { Button, ButtonTypeMap, ExtendButtonBase } from "@material-ui/core"
import React, { FunctionComponent } from "react"
//extends ExtendButtonBase<ButtonTypeMap>
interface MainButtonProps {
  children: React.ReactNode
  onClick: () => void
  className: string
}

const MainButton: FunctionComponent<MainButtonProps> = ({
  children,
  ...other
}) => {
  return (
    <Button {...other} variant="contained" color="primary">
      {children}
    </Button>
  )
}

export default MainButton
