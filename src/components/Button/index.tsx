import React from "react"
import Button from "@material-ui/core/Button"
import useStyle from "./style"
import { Box } from "@material-ui/core"

type ButtonProps = {
  title: string
  // children: React.ReactChild
  // onClick: () => void
}

const ButtonComponent = ({ title }: ButtonProps) => {
  const classes = useStyle()
  return (
    <Box className={classes.buttonWrapper}>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonStyle}
      >
        {title}
      </Button>
    </Box>
  )
}

export default ButtonComponent
