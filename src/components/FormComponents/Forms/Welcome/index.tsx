import { Box } from "@mui/system"
import React from "react"

import { incrementCurrentFormNumber, updateWelcomePageData } from "redux/action"
import { useAppDispatch } from "redux/store"
import Button from "components/Button"
import Text from "components/Text"
import styles from "./style"

const optionData = [
  {
    title: "Lead Generation Bot",
    value: 1,
  },
  {
    title: "Multi Step Form",
    value: 2,
  },
  {
    title: "Integrations",
    value: 3,
  },
]

const Welcome = () => {
  const dispatch = useAppDispatch()

  const onClickHandler = (option: string) => {
    dispatch(incrementCurrentFormNumber())
    dispatch(updateWelcomePageData(option))
  }

  return (
    <Box sx={styles.welcomeWrapper}>
      <Text>Welcome! 😊 What are you looking for ?</Text>
      <Button
        onClick={() => onClickHandler(optionData[0].title)}
        title={optionData[0].title}
      />
      <Button
        onClick={() => onClickHandler(optionData[1].title)}
        title={optionData[1].title}
      />
      <Button
        onClick={() => onClickHandler(optionData[2].title)}
        title={optionData[2].title}
      />
    </Box>
  )
}

export default Welcome
