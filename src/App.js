import React, { useState } from 'react';
import './index.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header';
import Repositories from './components/repositories-list';
import User from './components/user';
import UserForm from './components/userform';
import GlobalContextProvider from './context/globalstate';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

export default function App() {
  const classes = useStyles();
  const [usr, setUsr] = useState({});

  const handleFetchUser = (resp) => {
    setUsr(resp.data);
  };

  return (
    <GlobalContextProvider>
      <CssBaseline>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                elevation={3}
              >
                <Header />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                elevation={3}
              >
                <UserForm
                  handleFetchUser={handleFetchUser}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <User user={usr} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                className={classes.paper}
                elevation={3}
              >
                <Repositories user={usr.login} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </GlobalContextProvider>
  );
}
