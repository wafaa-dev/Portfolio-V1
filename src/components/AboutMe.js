import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import wafa from './wafa.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"100px",
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
 
  },
  media: {
    height: 300,
    borderRadius:20,
    backgroundColor:"green",

  },

  avatar: {
    backgroundColor: '#9575cd',
  },

  text:{
    fontFamily: 'Pangolin',
  },
}));

export default function AboutMe() {
    const classes = useStyles();
    return (
        <div >
          <> 
<Box className={classes.box} style={{textAlign:'center',borderRadius:"7px"}} >
<Card className={classes.root} >
      <CardHeader className={classes.name}
        avatar={
          <Avatar aria-label="wafa" className={classes.avatar}>
            WS
          </Avatar>
        }
        title="wafa sakouhi" style={{fontSize:"1.2 em"}}
        subheader="fullstack web developer"
      />
      <CardMedia
       component="img"
        src={wafa}
        className={classes.media}
        title="my personal photo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" fontFamily= 'Pangolin'>
            based in Tunis,Tunisia 
        </Typography>
      </CardContent>
        <CardContent>
          
         <Typography style={{ fontWeight:'bold'}}>
           email:
<span className={classes.text}> sakouhi.wafaa@gmail.com</span>
         </Typography>
         <Typography style={{ fontWeight:'bold'}}>            phone:
<span className={classes.text}>+216 22 196 330</span></Typography>
        </CardContent>
    </Card>
          </Box>
</>
        </div>
    );
}
