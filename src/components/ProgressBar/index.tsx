import { Box, LinearProgress } from "@mui/material"
import * as React from "react"
import styles from "./style"

type ProgressBarProps = {
  value: number
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <Box sx={styles.progressBarWrapper}>
      <LinearProgress
        sx={styles.progressBarStyle}
        variant="determinate"
        value={value}
        color="secondary"
      />
    </Box>
  )
}

export default ProgressBar
