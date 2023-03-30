import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

interface MyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeaderDialog: React.FC<MyDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>Najwiecej trudności sprawiło mi...</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HeaderDialog;
