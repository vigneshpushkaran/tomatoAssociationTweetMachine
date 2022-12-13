import * as React from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface snackBarProps extends SnackbarOrigin{
  text: string;
  open: boolean;
}

export default function PositionedSnackbar({
  text,
  open,
  vertical = "top",
  horizontal = "center",
}: snackBarProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      message={text}
      key={vertical + horizontal}
    />
  );
}
