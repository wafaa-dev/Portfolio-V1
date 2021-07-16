import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Project from './Project';
import projects from '../static/Projects';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
     fontFamily: 'Pangolin',
    // minHeight: '100vh',
    height:'400',
    width:'300',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

export default function Work () {
  const classes = useStyles();
//   const checked = useWindowPosition('header');
  return (
    <div className={classes.root} >
        <Box>
        <h1 style={{ fontFamily: 'Pangolin',}}>
            some of my projects so far 
        </h1>
        </Box>
       <Box>

      {/* <Project  project={projects[0]} />
      <Project  project={projects[1]} />
      <Project  project={projects[2]} /> */}
      <Project  project={projects[3]} />
      <Project  project={projects[4]} />
      <Project  project={projects[5]} />
      <Project  project={projects[6]} />
       </Box>
      
      <Box>
        <Link to="/" style={{textDecoration:'none',color:"black"}}>
          <HomeIcon style={{padding:'0'}}/>
          </Link>
      </Box>
    </div>

  );
}