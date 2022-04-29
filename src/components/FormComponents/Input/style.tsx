import { SxProps } from "@mui/material"

const styles: {
  [key: string]: SxProps
} = {
  textFieldStyle: {
    alignSelf: "center",
    margin: "10px 0px",
    "& .MuiOutlinedInput-root": {
      width: "350px",
      backgroundColor: "white",
      border: "0.3px solid #d4d4d4",
    },
  },
}

export default styles
