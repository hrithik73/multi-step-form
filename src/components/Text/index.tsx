import { Typography } from "@mui/material"
import React from "react"
import styles from "./style"

type TextProps = {
  children: React.ReactChild
}

const Text = ({ children }: TextProps) => {
  return <Typography sx={styles.textStyle}>{children}</Typography>
}
export default Text
