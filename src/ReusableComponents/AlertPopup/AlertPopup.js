import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function AlertPopup(props) {
  const [state] = React.useState({
    vertical: props.PopupPosition?.split("-")?.[0] ?? "top",
    horizontal: props.PopupPosition?.split("-")?.[1] ?? "center",
  });
  const { vertical, horizontal } = state;

  // Position:
  // Top-Center
  // Top-Left
  // Top-Right
  // Bottom-Left
  // Bottom-Right
  // Bottom-Center

  return (
    <>
      <Snackbar
        open={props.IsOpen}
        autoHideDuration={props.PopupDuration ?? 2000}
        onClose={props.handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={props.handleClose}
          severity={props.severity ?? "success"}
          variant={props.variant ?? "filled"}
          sx={{ width: props.width ?? "100%" }}
          color={ props.type ?? "success"}
        >
          {props.PopupMessage ?? "Details has been saved successfully"}
        </Alert>
      </Snackbar>
    </>
  );
}
