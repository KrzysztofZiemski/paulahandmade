import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"
import GatsbyImage, { FluidObject } from "gatsby-image"
import Img from "gatsby-image"
import React from "react"
import { Content } from "../../types/datoCmsProduct"
import { Tag } from "../../types/tag"
import { DanoCmsContentModular } from "../../types/danoCmsContentModular"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
  actions: {
    justifyContent: "flex-end",
    marginTop: "auto",
    "& a": {
      color: theme.palette.primary.main,
      "&::active": {
        color: theme.palette.primary.main,
      },
      "&:link": {
        textDecoration: "none",
      },
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
    textTransform: "capitalize",
    fontSize: 20,
    marginBottom: 4,
  },
  subHeader: {
    color: theme.palette.primary.main,
    fontSize: 16,
    marginTop: 5,
  },
  cardContent: {},
  tag: {
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10,
    "&:first-child": {
      paddingLeft: 0,
    },
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      height: "100%",
      width: 1,
      top: 0,
      right: 0,
      backgroundColor: theme.palette.primary.main,
    },
    "&:last-child": {
      "&::after": {
        display: "none",
      },
    },
  },
  img: {
    maxWidth: "100%",
    maxHeight: 200,
  },
  content: {},
}))

interface ProductItemProps {
  title: string
  fluidImage: FluidObject
  imageAlt: string
  link: string
  tags: Tag[]
  description: Content[] | string
  price: number
}

const ProductItem = ({
  title,
  fluidImage,
  imageAlt,
  link,
  description,
  tags,
  price,
}: ProductItemProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const subheader = tags.map(tag => (
    <span className={classes.tag} key={tag.id}>
      {tag.tag}
    </span>
  ))

  return (
    <Card className={classes.root}>
      <Link component={GatsbyLink} to={link}>
        <Img fluid={fluidImage} className={classes.img} alt={imageAlt} />
      </Link>
      <Grid className={classes.header}>
        <Grid>
          <Grid className={classes.title}>{title}</Grid>
          <Grid className={classes.subHeader}>{subheader}</Grid>
        </Grid>
        <Grid>{`${price} zł`}</Grid>
      </Grid>
      <CardContent className={classes.content}>
        {typeof description === "string" ? (
          <Typography component="p">{description}</Typography>
        ) : (
          description.map((el, index) => {
            switch (el.model.apiKey) {
              case DanoCmsContentModular.text_paragraph:
                return (
                  <Typography key={index} component="p">
                    {el.text}
                  </Typography>
                )
              case DanoCmsContentModular.text_subheader:
                return (
                  <Typography key={index} component="h2">
                    {el.text}
                  </Typography>
                )
              default:
                null
            }
          })
        )}
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        <Link component={GatsbyLink} to={link}>
          Zobacz
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductItem
