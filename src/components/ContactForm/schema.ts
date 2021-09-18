import * as yup from "yup"
import { TypeOfContact } from '../../types/typeOfContact'

const phoneRegExp = /^\d{9}$/

export const validationSchema = yup.object({
    email: yup
      .string()
      .email("Niepoprawny E-mail")
      .when("typeOfContact", {
        is: TypeOfContact.mail,
        then: yup.string().required("Podaj E-mail do kontaktu"),
      }),
    phone: yup
      .string()
      .when("typeOfContact", {
        is: TypeOfContact.phone,
        then: yup.string().required("sdsd"),
      })
      .matches(phoneRegExp, "Niepoprawny telefon"),
    subject: yup.string().required("Wpisz tytuł wiadomości"),
    message: yup.string().required("Wpisz wiadomość"),
  })