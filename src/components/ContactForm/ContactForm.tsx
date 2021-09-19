import { Button, makeStyles, MenuItem } from "@material-ui/core"
import CustomDialog from "../../components/CustomDialog/CustomDialog"
import { useFormik } from "formik"
import React, { FunctionComponent, useState } from "react"
import Recaptcha from "../../components/fields/Recaptcha"
import { TypeOfContact } from "../../types/typeOfContact"
import { encode } from "../../utils/encode"
import CustomSelectField from "../fields/CustomSelectField"
import CustomTextField from "../fields/CustomTextField"
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
  defaultValues?: {
    email?: string
    phone?: string
    subject?: string
    message?: string
  }
}

const ContactForm: FunctionComponent<ContactFormProps> = ({
  className,
  defaultValues,
}) => {
  const classes = useStyles()
  const [success, setSuccess] = useState(false)
  const [errorSend, setErrorSend] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const formik = useFormik({
    initialValues: {
      email: defaultValues?.email || "",
      phone: defaultValues?.phone || "",
      subject: defaultValues?.subject || "",
      message: defaultValues?.message || "",
      "g-recaptcha-response": "",
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
          if (res.ok) {
            actions.resetForm()
            return setSuccess(true)
          }
          setErrorMessage(res.statusText)
          return setErrorSend(true)
        })
        .catch(err => {
          setErrorMessage(err.statusText)
          return setErrorSend(true)
        })
        .finally(() => actions.setSubmitting(false))
    },
  })
  const verifyRecaptcha = (value: any) => {
    formik.values["g-recaptcha-response"] = value
  }
  const handleCloseSuccess = () => setSuccess(false)
  const handleCloseError = () => {
    setErrorSend(false)
    setErrorMessage("")
  }
  return (
    <>
      {success && (
        <CustomDialog
          open={success}
          handleClose={handleCloseSuccess}
          title="Dziękuję za wysłanie wiadomości"
          text="Odpowiem najszybciej jak to możliwe."
          actions={<Button onClick={handleCloseSuccess}>OK</Button>}
        />
      )}
      {errorSend && (
        <CustomDialog
          open={errorSend}
          handleClose={handleCloseError}
          title={
            "Przykro mi, ale z jakiegoś powodu nie udało się wysłać do mknie wiadomości. Spróbuj trochę później, albo daj mi znać o tym problemie na facebook"
          }
          text={errorMessage}
          actions={<Button onClick={handleCloseError}>OK</Button>}
        />
      )}
      <form
        id="contact"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
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
        <Recaptcha
          onChange={verifyRecaptcha}
          error={
            formik.touched.message &&
            Boolean(formik.errors["g-recaptcha-response"])
          }
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
    </>
  )
}

export default ContactForm
