import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import { ViewList as ViewListIcon, ViewModule as ViewModuleIcon, Info } from '@material-ui/icons';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import HeaderDialog from '../HeaderDialog';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    // handle toggle button change
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          {title}
        </Typography>
        <ToggleButtonGroup orientation="horizontal" exclusive onChange={handleChange} style={{ marginLeft: 'auto', backgroundColor: 'white' }}>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Button onClick={handleOpen}>
          <Info/>
        </Button>
        <HeaderDialog isOpen={open} onClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
