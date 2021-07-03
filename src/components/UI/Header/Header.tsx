import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { FC } from 'react';

const styles = createStyles({
  headerClass: { height: '72px' }
});

const Header: FC<WithStyles<typeof styles>> = ({ classes }) => {
  return (
    <header className={classes.headerClass}>
      <p>This is the header</p>
    </header>
  );
};

export default withStyles(styles)(Header);
