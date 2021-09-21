import { Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core"
import { graphql, navigate } from "gatsby"
import React from "react"
import ImagesGallery from "../components/ImagesGallery/ImagesGallery"
import Layout from "../components/layout"
import MainButton from "../components/MainButton/MainButton"
import PageName from "../components/PageName.tsx/PageName"
import Seo from "../components/seo"
import { getSlugify } from "../helpers/getSlugify"
import { DatoCmsContentModular } from "../types/datoCmsContentModular"
import { DatoCmsProduct } from "../types/datoCmsProduct"
import { Params } from "../types/params"
import { routes } from "../utils/routes"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  galery: {
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },
  price: {
    margin: `${theme.spacing(1)}px 0`,
  },
  description: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: theme.spacing(1),
    "& p": {},
    "& h2": {
      fontWeight: 700,
      textAlign: "center",
      margin: "1rem 0",
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      paddingBottom: 90,
      overflow: "auto",
      padding: theme.spacing(2),
    },
  },
  smDownHidden: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    marginTop: "auto",
    width: "100%",
  },
}))

interface ProductPage {
  data: {
    datoCmsProduct: DatoCmsProduct
  }
}
const ProductPage = ({ data }: ProductPage) => {
  const classes = useStyles()
  const { name, photos, description, shortDescription, price } =
    data.datoCmsProduct

  const handleAskAboutProduct = () => {
    navigate(`${routes.contact}#?${Params.subject}=${getSlugify(name)}`)
  }

  return (
    <Layout hideLeftNav={true}>
      <Seo
        title={`${name} - Paula Handmade Rękodzieło`}
        description={shortDescription}
        lang="pl"
      />
      <Grid className={classes.root}>
        <Hidden smUp implementation="css">
          <PageName>{name}</PageName>
        </Hidden>
        <ImagesGallery images={photos} className={classes.galery} />
        <Grid className={classes.description}>
          <Hidden xsDown implementation="css">
            <PageName>{name}</PageName>
          </Hidden>
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
          <Typography className={classes.price}>
            {`${price} zł + koszt przesyłki`}
          </Typography>
          <MainButton
            onClick={handleAskAboutProduct}
            className={classes.button}
          >
            Zapytaj o produkt
          </MainButton>
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
      productColors {
        colorsBase
      }
      tags {
        id
        tag
      }
      photos {
        alt
        fluid(maxWidth: 1280) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      categoryProduct {
        ... on DatoCmsKolczyki {
          id
          model {
            apiKey
          }
          subcategory
        }
        ... on DatoCmsInne {
          id
          model {
            apiKey
          }
          subcategory
        }
        ... on DatoCmsBransoletki {
          id
          model {
            apiKey
          }
          subcategory
        }
        ... on DatoCmsChusty {
          id
          model {
            apiKey
          }
          subcategory
        }
        ... on DatoCmsNaszyjniki {
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsTorebki {
          id
          model {
            apiKey
          }
        }
        ... on DatoCmsMaskotki {
          id
          model {
            apiKey
          }
          subcategory
        }
      }
    }
  }
`

export default ProductPage
