import { makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles<Theme>((theme) => ({
  buttonWrapper: {
    display: "flex",
  },
  buttonStyle: {
    margin: "0 8px",
    borderRadius: "5px",
  },
}))

export default useStyles
