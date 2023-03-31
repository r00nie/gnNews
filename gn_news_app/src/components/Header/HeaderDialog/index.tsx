import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./HeaderDialog.styles";

interface MyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeaderDialog: React.FC<MyDialogProps> = ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle className={classes.dialogTitle}>Info</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography>
          Najwiecej trudności sprawiła mi refaktoryzacja kodu. Największą
          przyjemność sprawiło mi konfiguracja reduxa oraz dodawanie styli.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HeaderDialog;
