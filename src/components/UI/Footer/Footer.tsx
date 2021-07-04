import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { FC } from 'react';

const styles = createStyles({
  footerClass: {
    height: '64px',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px'
  }
});

const Footer: FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <footer className={classes.footerClass}>
      made by Pankaj Nelson Tirkey
    </footer>
  );
};

export default withStyles(styles)(Footer);
