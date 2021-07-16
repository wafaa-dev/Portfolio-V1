import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { purple } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';

    

const useStyles = makeStyles((theme) => ({
    root:{
    marginTop:"50px",
    paddingTop:"20px",
    overflow:"hidden"

    },
    
    }));
function Resume() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Box className={classes.section}>
            <Box>
<h3 style={{color:"#37B7A1"}}>
     Education
</h3>
  <SchoolIcon style={{ color: purple[400] }} />
<React.Fragment >
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2009</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography> Bachlor Degree in Biomedical Engineering</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2013</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Master's Degree in engineering and management of industrial Systems
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2018</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Professional Certificate in management QHSE</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2021</Typography>
          </TimelineOppositeContent>
               <TimelineDot />
          <TimelineContent>
            <Typography>Fullstack developer certificate</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
</Box>
 <Box>
<h3 style={{color:"#37B7A1"}}>
 Work
</h3>
 <WorkIcon  style={{ color: purple[400] }}/>
<React.Fragment >
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Product Technicien at SEBN TN</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2012</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Internship at SIEMENS Tn IA/DT division</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">2009</Typography>
          </TimelineOppositeContent>
           <TimelineDot />
          <TimelineContent>
            <Typography>Internship at SIEMENS Tn Health Care division</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
            </Box>
        </Box>
                  {/* <Box >
           <Typography paragraph style={{fontFamily: 'Pangolin'}}>About me:</Typography>
          <Typography paragraph style={{fontFamily: 'Pangolin'}}>
           I hold a Master degree in engineering and management of industrial systems.
As a move away from the industrial field, I have already joined a full stack web developer bootcamp .
My final project was a MERN application called ‘freelancit’ which is a freelance platform that helps  freelancers and freelance seekers to accomplish their work. This application gave me valuable insight into the web development environment from conception to deployment .
          </Typography>
        
          <Typography paragraph style={{fontFamily: 'Pangolin'}}>
     When i'm not coding , i'm probably hanging out with friends,Hicking or going for a pilates class.
     For lazy days i enjoy watching films and cooking 

          </Typography>
       
        </Box> */}
          <Box>
        <Link to="/" style={{textDecoration:'none',color:"black"}}>
          <HomeIcon style={{padding:'0'}}/>
          </Link>
      </Box>
         </div>
         
    )
}

export default Resume
