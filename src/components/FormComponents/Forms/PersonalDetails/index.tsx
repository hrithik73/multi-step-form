import React from "react"
import { Box } from "@mui/system"
import { useForm } from "react-hook-form"

import ButtonComponent from "components/Button"
import Input from "components/FormComponents/Input"
import { incrementCurrentFormNumber, updatePersonalDetails } from "redux/action"
import { useAppDispatch, useAppSelector } from "redux/store"
import Text from "components/Text"
import styles from "./style"

const PersonalDetails = () => {
  const dispatch = useAppDispatch()
  const { personalDetails } = useAppSelector((store) => store.formReducer)
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: personalDetails.firstName,
      lastName: personalDetails.lastName,
    },
  })

  const submitHandler = (data: any) => {
    dispatch(incrementCurrentFormNumber())
    dispatch(
      updatePersonalDetails({
        firstName: data.firstName,
        lastName: data.lastName,
      })
    )
  }

  return (
    <Box sx={styles.personalDetailsWrapper}>
      <Text>Could you tell us a bit more about yourself?</Text>
      <Input
        name="firstName"
        type="text"
        label="First Name"
        control={control}
        rules={{
          required: {
            value: true,
            message: "First Name is required",
          },
          pattern: {
            value: /^[a-zA-Z]*$/,
            message: "First Name must be alphabets only",
          },
        }}
      />
      <Input
        name="lastName"
        type="text"
        label="Last Name"
        control={control}
        rules={{
          required: {
            value: true,
            message: "First Name is required",
          },
          pattern: {
            value: /^[a-zA-Z]*$/,
            message: "First Name must be alphabets only",
          },
        }}
      />
      <ButtonComponent title="Next" onClick={handleSubmit(submitHandler)} />
    </Box>
  )
}
export default PersonalDetails
