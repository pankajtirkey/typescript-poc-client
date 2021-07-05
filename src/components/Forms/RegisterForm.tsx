import { Button, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { IRegisterFields } from 'lib/interfaces/Forms';
import { FC } from 'react';

interface IProps {
  handleSubmit(values: IRegisterFields): void;
}

const RegisterForm: FC<IProps> = ({ handleSubmit }) => {
  const initialValues: IRegisterFields = {
    firstName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    cpassword: '',
    profilePic: '',
    profileDescription: ''
  };

  const formik = useFormik({
    initialValues: { ...initialValues },
    // validationSchema: ''
    onSubmit: values => {
      console.log('values', values);
      handleSubmit(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='firstName'
            name='firstName'
            label='First Name'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='phone'
            name='phone'
            label='Phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='address'
            name='address'
            label='Address'
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='password'
            name='password'
            label='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id='cpassword'
            name='cpassword'
            label='Confirm Password'
            value={formik.values.cpassword}
            onChange={formik.handleChange}
            error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
            helperText={formik.touched.cpassword && formik.errors.cpassword}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='profilePic'
            name='profilePic'
            label='Profile Picture'
            value={formik.values.profilePic}
            onChange={formik.handleChange}
            error={
              formik.touched.profilePic && Boolean(formik.errors.profilePic)
            }
            helperText={formik.touched.profilePic && formik.errors.profilePic}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='profileDescription'
            name='profileDescription'
            label='Profile Description'
            value={formik.values.profileDescription}
            onChange={formik.handleChange}
            error={
              formik.touched.profileDescription &&
              Boolean(formik.errors.profileDescription)
            }
            helperText={
              formik.touched.profileDescription &&
              formik.errors.profileDescription
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
