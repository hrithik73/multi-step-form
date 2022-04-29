import * as React from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material"
import { TransitionProps } from "@mui/material/transitions"

import { useAppDispatch, useAppSelector } from "redux/store"
import { resetForm } from "redux/action"
import styles from "./style"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DetailsModal = () => {
  const dispatch = useAppDispatch()

  const {
    welcomePageData,
    contactDetails,
    componyDetails,
    personalDetails,
    departmentPageData,
  } = useAppSelector((state) => state.formReducer)

  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
    dispatch(resetForm())
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Data"}</DialogTitle>
      <DialogContent sx={styles.dialogWrapper}>
        <Typography>Product :-{welcomePageData.product}</Typography>
        <Typography>Department :- {departmentPageData.department}</Typography>
        <Typography>Email :- {contactDetails.email}</Typography>
        <Typography>Phone :- {contactDetails.phone}</Typography>
        <Typography>
          Name :- {personalDetails.firstName} {personalDetails.lastName}
        </Typography>
        <Typography> Compony Name:- {componyDetails.componyName} </Typography>
        <Typography> Job Title:- {componyDetails.jobTitle} </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
export default DetailsModal
