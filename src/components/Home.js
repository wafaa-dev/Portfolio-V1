import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
const useStyles = makeStyles((e) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Pangolin',
  },
  container: {
    textAlign: 'center',
  },
  colorText: {
    color: '#37B7A1',
  },
  title: {
    color: '#edc4f5',
    fontSize: '4rem',

  },
  main: {
    textAlign: "center",
  }
}));

export default function Home() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My<span className={classes.colorText}>Portfolio</span>
          </h1>
        </div>
      </Collapse>
    </div>

  );
}