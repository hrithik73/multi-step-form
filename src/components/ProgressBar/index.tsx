import * as React from "react"
import { Box, LinearProgress } from "@material-ui/core"
import useStyles from "./style"

type ProgressBarProps = {
  value: number
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.progressBarWrapper}>
      <LinearProgress
        className={classes.progressBarStyle}
        variant="determinate"
        value={value}
        color="secondary"
      />
    </Box>
  )
}

export default ProgressBar
