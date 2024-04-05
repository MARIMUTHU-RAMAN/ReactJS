import React from "react";
import "./dashboarddialog.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Button } from "primereact/button";
const Dashboarddialog = (props) => (
  <Dialog open={props.IsOpen} onClose={props.handleClose}>
    <DialogTitle>{props.ModalTitle}</DialogTitle>
    <DialogContent>{props.DialogContent}</DialogContent>
    <DialogActions>
      {props.DialogAction ? (
        props.DialogAction
      ) : (
        <>
          <Button color="primary" onClick={props.onCancelHendler}>
            {props.cancelText ?? "Cancel"}
          </Button>
          <Button color="primary" onClick={props.onClickHandler}>
            {props.okText ?? "Proceed"}
          </Button>
        </>
      )}
    </DialogActions>
  </Dialog>
);

export default Dashboarddialog;
