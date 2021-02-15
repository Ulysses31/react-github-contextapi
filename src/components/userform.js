import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { GlobalContext } from '../context/globalstate';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // marginBottom: "30px"
    flexGrow: 1
  }
}));

export default function UserForm() {
  const { getUser } = useContext(GlobalContext);
  const [user, setUser] = useState('microsoft');
  const classes = useStyles();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getUser(user);
  };

  const handleUsrChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='searchQuery'
              name='searchQuery'
              value={user}
              onChange={handleUsrChange}
              autoComplete='off'
              label='enter profile name'
              variant='outlined'
              size='small'
              margin='none'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
