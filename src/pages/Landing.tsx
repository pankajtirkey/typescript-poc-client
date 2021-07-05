import {
  Button,
  ButtonGroup,
  createStyles,
  Grid,
  Theme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { flexDirection: 'row' }
  })
);

const Landing: FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12}>
        <ButtonGroup
          variant='contained'
          color='secondary'
          aria-label='main action buttons on landing page'
        >
          <Button component={Link} to='/login'>
            Login
          </Button>
          <Button component={Link} to='/register'>
            Register
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Landing;
