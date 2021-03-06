import { Card, makeStyles, Theme } from "@material-ui/core"
import * as React from "react"
import ContactForm from "../components/ContactForm/ContactForm"
import Layout from "../components/layout"
import PageName from "../components/PageName.tsx/PageName"
import Seo from "../components/seo"
import { Params } from "../types/params"
import useParams from "../hooks/useParams"

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
  const params = useParams()
  const classes = useStyles()

  const defaultValues = {
    subject: params.get(Params.subject) || "",
  }

  return (
    <Layout>
      <Card variant="outlined" className={classes.root}>
        <PageName>Kontakt</PageName>
        <Seo
          lang="pl"
          title="Kontakt Paula Handmade Rękodzieło."
          description="Rękodzieło z pasją. Napisz do mnie tutaj na stronie lub facebooku. 
          I nie zapomnij zajrzeć w poszukiwaniu nowości"
        />
        <ContactForm className={classes.form} defaultValues={defaultValues} />
      </Card>
    </Layout>
  )
}

export default IndexPage
