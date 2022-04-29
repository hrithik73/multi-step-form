import React, { useState } from "react"
import { Box } from "@mui/system"
import { useForm } from "react-hook-form"

import DetailsModal from "components/Modal"
import { updateComponyDetails } from "redux/action"
import { useAppDispatch, useAppSelector } from "redux/store"
import ButtonComponent from "components/Button"
import Text from "components/Text"
import Input from "components/FormComponents/Input"
import styles from "./style"

const ThankYou = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { componyDetails } = useAppSelector((state) => state.formReducer)
  const dispatch = useAppDispatch()

  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      componyName: componyDetails.componyName,
      jobTitle: componyDetails.jobTitle,
    },
  })
  const submitHandler = (data: any) => {
    // dispatch(incrementCurrentFormNumber())
    setIsModalVisible(true)
    dispatch(
      updateComponyDetails({
        componyName: data.componyName,
        jobTitle: data.jobTitle,
      })
    )
  }
  return (
    <Box sx={styles.thankYouWrapper}>
      <Text>Thanks!😊 Just a few more details and we are done!</Text>
      <Input
        name="componyName"
        control={control}
        type="text"
        label="Compony Name"
        rules={{
          required: {
            value: true,
            message: "Compony name is required",
          },
        }}
      />
      <Input
        name="jobTitle"
        control={control}
        type="text"
        label="Job Title"
        rules={{
          required: {
            value: true,
            message: "Job Title is is required",
          },
        }}
      />
      <ButtonComponent
        title="Request Demo"
        onClick={handleSubmit(submitHandler)}
      />
      {isModalVisible && <DetailsModal />}
    </Box>
  )
}

export default ThankYou
