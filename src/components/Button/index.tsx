import React from "react"
import { Box, Button } from "@mui/material"
import styles from "./style"

type ButtonProps = {
  title: string
  onClick: () => void
}

const ButtonComponent = ({ title, onClick }: ButtonProps) => {
  return (
    <Box sx={styles.buttonWrapper}>
      <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        sx={styles.buttonStyle}
      >
        {title}
      </Button>
    </Box>
  )
}

export default ButtonComponent
