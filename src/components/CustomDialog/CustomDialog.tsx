import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core"
import { FunctionComponent, ReactNode } from "react"
import React from "react"

interface CustomDialogProps {
  open: boolean
  handleClose: () => void
  title?: string
  text?: string | ReactNode
  actions?: ReactNode
}

const CustomDialog: FunctionComponent<CustomDialogProps> = ({
  open,
  handleClose,
  title,
  text,
  actions,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      {text && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
      )}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  )
}

export default CustomDialog
