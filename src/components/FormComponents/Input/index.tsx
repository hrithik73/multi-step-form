import React from "react"
import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

import styles from "./style"

type InputProps = {
  name: string
  label: string
  type?: string
  control: any
  rules?: any
}

const Input = ({ name, control, label, type, rules, ...rest }: InputProps) => {
  return (
    <Controller
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <TextField
          required
          sx={styles.textFieldStyle}
          value={value}
          onChange={onChange}
          onBlur={(event: any) => {
            console.log(event.target.value)
            onBlur()
          }}
          inputRef={ref}
          type={type}
          label={label}
          error={!!error}
          helperText={error?.message}
          {...rest}
        />
      )}
      rules={rules}
      control={control}
      name={name}
      {...rest}
    />
  )
}

export default Input
