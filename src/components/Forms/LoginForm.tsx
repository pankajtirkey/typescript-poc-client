import { Button, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { ILoginFields } from 'lib/interfaces/Forms';
import { FC } from 'react';

interface IProps {
  handleSubmit(values: ILoginFields): void;
}

const LoginForm: FC<IProps> = ({ handleSubmit }) => {
  const initialValues: ILoginFields = {
    email: '',
    password: ''
  };

  const formik = useFormik({
    initialValues: { ...initialValues },
    // validationSchema:
    onSubmit: (values: ILoginFields) => {
      console.log('***loginForm values', values);
      handleSubmit(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type='email'
            id='email'
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type='password'
            id='password'
            name='password'
            label='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            color='primary'
            variant='contained'
            fullWidth
            type='submit'
            disabled={!formik.isValid}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
