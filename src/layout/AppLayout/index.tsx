import React from "react"
import { Box, Button, Typography } from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import CloseIcon from "@material-ui/icons/Close"

import ProgressBar from "../../components/ProgressBar"
import useStyle from "./style"
import ButtonComponent from "../../components/Button"

type AppLayoutProps = {
  children: React.ReactChild
}
const AppLayout = ({ children }: AppLayoutProps) => {
  const classes = useStyle()

  return (
    <Box className={classes.layoutWrapper}>
      <Box className={classes.formWrapper}>
        <Box className={classes.header}>
          <ArrowBackIosIcon />
          <CloseIcon />
        </Box>
        <ProgressBar value={10} />
        <Typography>Helllo</Typography>
        <ButtonComponent title="Submit" />
      </Box>
    </Box>
  )
}

export default AppLayout
