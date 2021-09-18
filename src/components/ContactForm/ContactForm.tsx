import { Box, Button, makeStyles, MenuItem, TextField } from "@material-ui/core"
import { useFormik } from "formik"
import { FunctionComponent } from "react"
import * as yup from "yup"
import React from "react"
import CustomTextField from "../fields/CustomTextField"
import CustomSelectField from "../fields/CustomSelectField"
import { TypeOfContact } from "../../types/TypeOfContact"
import { validationSchema } from "./schema"

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexDirection: "column",
  },
}))

interface ContactFormProps {
  className: string
}

const ContactForm: FunctionComponent<ContactFormProps> = ({ className }) => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      subject: "",
      message: "",
      typeOfContact: TypeOfContact.mail,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <form
      className={`${classes.root} ${className}`}
      onSubmit={formik.handleSubmit}
    >
      <CustomTextField
        variant="outlined"
        id="subject"
        name="subject"
        label="Tytuł"
        type="text"
        value={formik.values.subject}
        onChange={formik.handleChange}
        error={formik.touched.subject && Boolean(formik.errors.subject)}
        helperText={formik.touched.subject && formik.errors.subject}
      />
      <CustomSelectField
        name="typeOfContact"
        id="typeOfContact"
        value={formik.values.typeOfContact}
        onChange={formik.handleChange}
        label="Forma kontaktu"
      >
        <MenuItem value={TypeOfContact.mail}>E-mail</MenuItem>
        <MenuItem value={TypeOfContact.phone}>Telefon</MenuItem>
      </CustomSelectField>
      {formik.values.typeOfContact === TypeOfContact.phone ? (
        <CustomTextField
          variant="outlined"
          id="phone"
          name="phone"
          label="Telefon"
          type="number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
      ) : (
        <CustomTextField
          variant="outlined"
          id="email"
          name="email"
          label="E-mail"
          type="e-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      )}

      <CustomTextField
        variant="outlined"
        id="message"
        name="message"
        label="Wiadomość"
        type="text"
        rows={6}
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />

      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        className={classes.button}
      >
        Submit
      </Button>
    </form>
  )
}

export default ContactForm
