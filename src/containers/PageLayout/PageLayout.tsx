import {
  Container,
  createStyles,
  CssBaseline,
  withStyles
} from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import Footer from 'components/Ui/Footer/Footer';
import Header from 'components/Ui/Header/Header';
import Dashboard from 'pages/Dashboard';
import Landing from 'pages/Landing';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Register from 'pages/Register';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const styles = createStyles({
  rootContainer: { height: '100%', width: '100%' },
  mainContainer: { height: '100%' }
});

const PageLayout: FC<WithStyles<typeof styles>> = ({ classes }) => (
  <>
    <CssBaseline />
    <Header />
    <Container maxWidth='sm' className={classes.rootContainer}>
      <main className={classes.mainContainer}>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/home' component={Dashboard} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </main>
    </Container>
    <Footer />
  </>
);

export default withStyles(styles)(PageLayout);
