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
enum TypeOfContact {
  mail,
  phone,
}

const IndexPage = () => {
  const classes = useStyles()

  const [subject, setSubject] = React.useState("")
  const [typeOfContact, setTypeOfContact] = React.useState<TypeOfContact>(
    TypeOfContact.mail
  )
  const [mailContact, setMailContact] = React.useState("")
  const [phoneContact, setPhoneContact] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleSend = (e: any) => {
    console.log("weszło")
  }
  return (
    <Layout>
      <Seo title="Kontakt" />
      <form onSubmit={handleSend}>
        <Grid className={classes.field}>
          <CustomSelectField
            name="subject"
            value=""
            setValue={() => {}}
            label="Temat"
          >
            <MenuItem value="">Empty Value for First Option</MenuItem>
            <MenuItem value="Hey">Hey</MenuItem>
          </CustomSelectField>
        </Grid>
        <Grid className={classes.field}>
          <CustomSelectField
            name="typeOfContact"
            value={typeOfContact}
            setValue={(s: any) => setTypeOfContact(s)}
            label="Forma kontaktu"
          >
            <MenuItem value={TypeOfContact.mail}>E-mail</MenuItem>
            <MenuItem value={TypeOfContact.phone}>Telefon</MenuItem>
          </CustomSelectField>
        </Grid>
        <Grid className={classes.field}>
          {typeOfContact === TypeOfContact.phone ? (
            <CustomTextField
              name="phoneContact"
              label="Kontakt telefoniczny"
              value={phoneContact}
              type="number"
              setValue={(s: any) => {
                setPhoneContact(s)
              }}
            />
          ) : (
            <CustomTextField
              name="mailContact"
              label="Kontakt E-mail"
              value={mailContact}
              setValue={(s: any) => {
                setMailContact(s)
              }}
            />
          )}
        </Grid>
        <Grid className={classes.field}>
          <CustomTextField
            multiline
            name="message"
            label="Wiadomość"
            value={message}
            rows={6}
            setValue={(s: any) => {
              setMessage(s)
            }}
          />
        </Grid>
        <MainButton>Wyślij</MainButton>
      </form>
    </Layout>
  )
}

export default IndexPage
