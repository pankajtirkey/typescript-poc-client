import {
  createStyles,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { FC } from 'react';

const styles = createStyles({
  footerClass: {
    height: '64px',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
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
      <Typography variant='subtitle1' align='center' gutterBottom>
        made by Pankaj Nelson Tirkey
      </Typography>
    </footer>
  );
};

export default withStyles(styles)(Footer);
