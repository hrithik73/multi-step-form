import { makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles<Theme>((theme) => ({
  progressBarWrapper: {
    // display: "flex",
  },
  progressBarStyle: {
    height: "10px",
    margin: "0 8px",
    borderRadius: "5px",
    // "& .MuiLinearProgress-colorSecondary": {
    //   backgroundColor: "#e6e6e6",
    // },
  },
}))

export default useStyles
