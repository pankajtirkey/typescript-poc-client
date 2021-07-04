import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { FC } from 'react';

const styles = createStyles({
  headerClass: {
    height: '64px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px'
  }
});

const Header: FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <header className={classes.headerClass}>
      <p>This is the header</p>
    </header>
  );
};

export default withStyles(styles)(Header);
