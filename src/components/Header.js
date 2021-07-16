import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import StyledMenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((e) => ({
  appbar: {
    marginLeft:"55px",
  
      display:"flex",
      
   position:"fixed",
   textAlign:"center",
    backgroundColor:"white",
    borderRadius:"5px",
    fontFamily: 'Pangolin',
    width:"auto",
  },

  colorText: {
    color: '#37B7A1',
  },

  title: {
    color: '#fff',
    fontSize: '4rem',
  
  },
  icon:{
    marginTop:"10px",
    paddingTop:"20px",
      marginRight:"20px",

  },
  textLink:{
    textDecoration:'none',
    color:'grey',
  },
  appbTitle:{
marginRight:"20px",
marginLeft:"20px",
    color:"#edc4f5",
  },

}));
export default function Header() {
  const classes = useStyles();
  return (  
    <div className={classes.appbar} >
<h1 className={classes.appbTitle}>
            My<span className={classes.colorText}>Portfolio</span>
          </h1>

<Link to="/" className={classes.textLink}>
        <StyledMenuItem className={classes.icon}>
          <ListItemIcon >
          <HomeIcon fontSize="small" style={{padding:"0",margin:"0"}}/>
          </ListItemIcon> 
           <ListItemText primary="Home" />
        </StyledMenuItem> 
         </Link>

        <Link to="/Resume" className={classes.textLink}>
        <StyledMenuItem className={classes.icon}>
          <ListItemIcon>
          <InfoIcon fontSize="small" />
          </ListItemIcon> 
           <ListItemText primary="Resume" />
        </StyledMenuItem> 
         </Link>
          <Link to="/Work" className={classes.textLink} >
        <StyledMenuItem className={classes.icon}>
          <ListItemIcon>
            <WorkIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </StyledMenuItem>
        </Link>
        <Link to="/Contact" className={classes.textLink} >
        <StyledMenuItem className={classes.icon}>
          <ListItemIcon>
            <ContactMailIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Contact Me" />
        </StyledMenuItem>
        </Link>
     </div>
  

  )}
