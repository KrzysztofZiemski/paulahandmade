import { makeStyles, Paper, Theme } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme: Theme) => ({}))

interface ProductItemProps {}

const ProductItem = ({}: ProductItemProps) => {
  const classes = useStyles()

  return <Paper elevation={3}>test</Paper>
}

export default ProductItem
