import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"
import GatsbyImage, { FluidObject } from "gatsby-image"
import Img from "gatsby-image"
import React, { useContext } from "react"
import { Content } from "../../../types/datoCmsProduct"
import { Tag } from "../../../types/tag"
import { DatoCmsContentModular } from "../../../types/datoCmsContentModular"
import { SearchContext } from "../../../context/SearchContext"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 460,
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    overflow: "auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "47%",
      height: 530,
    },
    [theme.breakpoints.up("md")]: {
      width: "31%",
      height: 500,
    },
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
    textDecoration: "none",
    color: theme.palette.common.black,
    fontWeight: 700,
    textTransform: "capitalize",
    fontSize: 20,
    marginBottom: 4,
  },
  subHeader: {
    color: theme.palette.primary.main,
    fontSize: 16,
    marginTop: 7,
  },
  cardContent: {},
  tag: {
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "inherit",
    border: "none",
    color: theme.palette.primary.main,
    cursor: "pointer",
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
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: 270,
      maxWidth: "100%",
    },
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
  const { searchValue, setSearchValue } = useContext(SearchContext)

  const subheader = tags.map(tag => (
    <button
      className={classes.tag}
      key={tag.id}
      onClick={() => setSearchValue(tag.tag)}
    >
      {tag.tag}
    </button>
  ))

  return (
    <Card className={classes.root}>
      <Link component={GatsbyLink} to={link}>
        <Img
          fluid={fluidImage}
          className={classes.img}
          alt={imageAlt}
          imgStyle={{ objectFit: "contain" }}
        />
      </Link>
      <Grid className={classes.header}>
        <Grid>
          <Grid component={GatsbyLink} className={classes.title} to={link}>
            {title}
          </Grid>

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
              case DatoCmsContentModular.text_paragraph:
                return (
                  <Typography key={index} component="p">
                    {el.text}
                  </Typography>
                )
              case DatoCmsContentModular.text_subheader:
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
