import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { FC } from 'react';

const Header: FC = () => (
  <AppBar position='fixed'>
    <Toolbar style={{ width: '100%', justifyContent: 'center' }}>
      <Typography variant='h6' align='center'>
        Typescript MERN POC
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
