import Layout from "../components/layout"
import Seo from "../components/seo"
import React, { useState } from "react"
import { graphql } from "gatsby"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import PageName from "../components/PageName.tsx/PageName"

import {
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import ImagesGallery from "../components/ImagesGallery/ImagesGallery"
import { DatoCmsContentModular } from "../types/datoCmsContentModular"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  galery: {
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  price: {
    fontWeight: 700,
    textAlign: "center",
    margin: "1rem",
  },
  description: {
    width: "50%",
    padding: theme.spacing(1),
    "& p": {},
    "& h2": {
      fontWeight: 700,
      textAlign: "center",
      margin: "1rem 0",
    },
  },
  smDownHidden: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

interface ProductPage {
  data: {
    datoCmsProduct: DatoCmsProduct
  }
}
const ProductPage = ({ data }: ProductPage) => {
  const classes = useStyles()
  const { name, photos, description, price } = data.datoCmsProduct

  return (
    <Layout>
      <Seo title={name} />
      <Grid className={classes.root}>
        <Hidden smUp implementation="css">
          <PageName>{name}</PageName>
        </Hidden>
        <ImagesGallery images={photos} className={classes.galery} />
        <Grid className={classes.description}>
          <Hidden xsDown implementation="css">
            <PageName>{name}</PageName>
          </Hidden>
          <Typography className={classes.price}>
            {" "}
            {`${price} zł + koszt przesyłki`}{" "}
          </Typography>
          {description &&
            description.map((element, index) => {
              switch (element.model.apiKey) {
                case DatoCmsContentModular.text_paragraph:
                  return <Typography key={index}>{element.text}</Typography>
                case DatoCmsContentModular.text_subheader:
                  return (
                    <Typography key={index} component="h2">
                      {element.text}
                    </Typography>
                  )
                default:
                  return null
              }
            })}
        </Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query querySingleProduct($id: String!) {
    datoCmsProduct(id: { eq: $id }) {
      id
      price
      name
      shortDescription
      category
      description {
        ... on DatoCmsTextParagraph {
          model {
            apiKey
          }
          text
        }
        ... on DatoCmsTextSubheader {
          model {
            apiKey
          }
          text
        }
      }
      tags {
        id
        tag
      }
      photos {
        alt
        fluid(maxWidth: 400) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default ProductPage
