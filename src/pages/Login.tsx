import { Button, Container, Grid, Typography } from '@material-ui/core';
import LoginForm from 'components/Forms/LoginForm';
import { ILoginFields } from 'lib/interfaces/Forms';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  const handleSubmit = (values: ILoginFields) => {
    // Submit login form
  };

  return (
    <Container maxWidth='sm'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LoginForm handleSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1'>Not registered?</Typography>
          <Button
            component={Link}
            to='/register'
            variant='contained'
            color='primary'
            // fullWidth
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
