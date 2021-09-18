import {
  FormControl,
  FormGroup,
  Grid,
  makeStyles,
  MenuItem,
  Theme,
} from "@material-ui/core"
import CustomSelectField from "../components/fields/CustomSelectField"
import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { routes } from "../utils/routes"
import CustomTextField from "../components/fields/CustomTextField"
import MainButton from "../components/MainButton/MainButton"
import ContactForm from "../components/ContactForm/ContactForm"

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
}))

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Kontakt" />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
