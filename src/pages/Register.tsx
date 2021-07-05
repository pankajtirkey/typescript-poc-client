import { Button, Container, Grid, Typography } from '@material-ui/core';
import RegisterForm from 'components/Forms/RegisterForm';
import { IRegisterFields } from 'lib/interfaces/Forms';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Register: FC = () => {
  const handleSubmit = (values: IRegisterFields) => {
    // Submit login form
  };

  return (
    <Container maxWidth='sm'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RegisterForm handleSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1'>Already registered?</Typography>
          <Button
            component={Link}
            to='/login'
            variant='contained'
            color='primary'
            // fullWidth
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
