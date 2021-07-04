import { Container, createStyles, withStyles } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import Footer from 'components/UI/Footer/Footer';
import Header from 'components/UI/Header/Header';
import Dashboard from 'pages/Dashboard';
import Landing from 'pages/Landing';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Register from 'pages/Register';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const styles = createStyles({
  rootContainer: { height: '100vh', width: '100%' },
  mainContainer: { height: '100%', marginTop: '64px', marginBottom: '64px' }
});

const PageLayout: FC<WithStyles<typeof styles>> = ({ classes }) => (
  <Container maxWidth='md' className={classes.rootContainer}>
    <Header />
    <main className={classes.mainContainer}>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Dashboard} />
        <Route path='/profile' component={Profile} />
      </Switch>
      <h1>Hello</h1>
    </main>
    <Footer />
  </Container>
);

export default withStyles(styles)(PageLayout);
