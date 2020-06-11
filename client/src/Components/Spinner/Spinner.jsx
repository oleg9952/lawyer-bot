import React from 'react'
import { makeStyles, LinearProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Spinner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress />
        </div>
    )
}

export default Spinner
