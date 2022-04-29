import { Box } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"

import Button from "components/Button"
import Input from "components/FormComponents/Input"
import Text from "components/Text"
import { useAppDispatch, useAppSelector } from "redux/store"
import { incrementCurrentFormNumber, updateContactDetails } from "redux/action"
import styles from "./styles"

const ContactDetails = () => {
  const dispatch = useAppDispatch()
  const { contactDetails } = useAppSelector((state) => state.formReducer)
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: contactDetails.email,
      phone: contactDetails.phone,
    },
  })

  const submitHandler = (data: any) => {
    dispatch(incrementCurrentFormNumber())
    dispatch(
      updateContactDetails({
        email: data.email,
        phone: data.phone,
      })
    )
    // console.log(data)
  }

  return (
    <Box sx={styles.contactDetailsWrapper}>
      <Text>
        What is the email and phone number that we can reach you the best?
      </Text>
      <Input
        name="email"
        type="email"
        label="Email Address"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <Input
        name="phone"
        type="text"
        label="Phone "
        control={control}
        rules={{
          required: {
            value: true,
            message: "Phone is required",
          },
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Invalid phone number",
          },
        }}
      />
      <Button title="Next" onClick={handleSubmit(submitHandler)} />
    </Box>
  )
}

export default ContactDetails
