import { Box, Button, makeStyles, MenuItem, TextField } from "@material-ui/core"
import { useFormik } from "formik"
import { FunctionComponent } from "react"
import * as yup from "yup"
import React from "react"
import CustomTextField from "../fields/CustomTextField"
import CustomSelectField from "../fields/CustomSelectField"

import { validationSchema } from "./schema"
import { TypeOfContact } from "../../types/typeOfContact"
import { encode } from "../../utils/encode"

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
    onSubmit: (values, actions) => {
      return fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...values,
        }).toString(),
      })
        .then(res => {
          console.log(res)
          actions.resetForm()
        })
        .catch(err => console.log(err))
        .finally(() => actions.setSubmitting(false))
    },
  })

  return (
    <form
      id="contact"
      name="contact"
      method="POST"
      data-netlify="true"
      // data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
      onSubmit={formik.handleSubmit}
      className={`${classes.root} ${className}`}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="" />
      <input type="hidden" name="typeOfContact" value="" />
      <input type="hidden" name="phone" value="" />
      <input type="hidden" name="email" value="" />
      <input type="hidden" name="message" value="" />
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
        multiline
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
        Wyślij
      </Button>
    </form>
    // <form
    //   action="/thank-you"
    //   className={`${classes.root} ${className}`}
    //   onSubmit={formik.handleSubmit}
    //   data-netlify-recaptcha="true"
    //   data-netlify="true"
    //   name="contact"
    //   method="POST"
    // >
  )
}

export default ContactForm
