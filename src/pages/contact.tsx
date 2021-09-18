import {
  Card,
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
import PageName from "../components/PageName.tsx/PageName"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderWidth: 0,
    [theme.breakpoints.up("sm")]: {
      borderWidth: 1,
      width: "50%",
      minWidth: 400,
      margin: "auto",
      marginTop: theme.spacing(2),
      padding: theme.spacing(10),
      paddingTop: theme.spacing(2),
      borderRadius: 5,
    },
  },
  form: {
    [theme.breakpoints.up("sm")]: {},
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Card variant="outlined" className={classes.root}>
        <PageName>Kontakt</PageName>
        <Seo title="Kontakt" />
        <ContactForm className={classes.form} />
      </Card>
    </Layout>
  )
}

export default IndexPage
