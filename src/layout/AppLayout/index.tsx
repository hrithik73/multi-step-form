import React from "react"
import { Box } from "@mui/material"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import CloseIcon from "@mui/icons-material/Close"

import ProgressBar from "components/ProgressBar"
import { useAppDispatch, useAppSelector } from "redux/store"
import { decrementCurrentFormNumber } from "redux/action"
import styles from "./style"

type AppLayoutProps = {
  children: React.ReactChild
}
const AppLayout = ({ children }: AppLayoutProps) => {
  const { currentFormNumber, _persist } = useAppSelector(
    (state) => state.formReducer
  )
  const dispatch = useAppDispatch()

  const goBack = () => {
    dispatch(decrementCurrentFormNumber())
  }

  return (
    <Box sx={styles.layoutWrapper}>
      <Box sx={styles.formWrapper}>
        <Box
          sx={currentFormNumber === 0 ? styles.firstPageHeader : styles.header}
        >
          <Box
            sx={
              currentFormNumber === 0
                ? { display: "none" }
                : { display: "flex" }
            }
            onClick={goBack}
          >
            <KeyboardDoubleArrowLeftIcon />
          </Box>
          <CloseIcon />
        </Box>
        <ProgressBar value={currentFormNumber * 20} />
        {children}
      </Box>
    </Box>
  )
}

export default AppLayout
