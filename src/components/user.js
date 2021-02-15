import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { GlobalContext } from '../context/globalstate';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '128px',
    height: '128px',
    margin: '10px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function User() {
  const { user } = useContext(GlobalContext);
  const classes = useStyles();

  return (
    <>
      {'name' in user ? (
        <Card className={classes.root} elevation={3}>
          <CardMedia
            className={classes.cover}
            image={user.avatar_url}
            title='Live from space album cover'
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component='h5' variant='h5'>
                {user.name}
              </Typography>
              <Typography
                variant='subtitle1'
                color='textSecondary'
              >
                {user.company}
              </Typography>
              <Typography
                variant='subtitle1'
                color='textSecondary'
              >
                {user.location}
              </Typography>
              <Typography
                variant='subtitle1'
                color='textSecondary'
              >
                {user.email}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ) : (
        ''
      )}
    </>
  );
}
