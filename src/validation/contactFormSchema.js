import * as Yup from 'yup'

const contactFormSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    name: Yup
      .string()
      .required("Name is required"),
    message: Yup
      .string()
      .max(250, "Message cannot be longer than 250 characters")
      .required("Message cannot be empty"),
})

export default contactFormSchema