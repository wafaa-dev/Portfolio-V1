import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";
import Tab from '@material-ui/core/Tab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import { Grid } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#ffccbc',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  paper: {
    background: "none",
    fontFamily: "Pangolin",
    fontSize: '1.3rem',
    textAlign: 'center'
  },
  section: {
    marginTop: "200px"
  },
  form: {
    textAlign: "center"
  },
  input: {
    marginTop: theme.spacing(4),
  },
}))
export default function Contact() {
  const classes = useStyles();
  return (
    <Container >
      <h1>my contact page </h1>
      <Grid container className="section" >
        <Grid item container>
          <Grid item xs={12} lg={12}>
            <Box style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <h5> contact information </h5>
              <Paper square className={classes.paper}>
                <h6 >Address</h6> <h6>jardins de carthage tunisia </h6>
                <h6>Email</h6> <h6>sakouhi.wafaa@gmail.com</h6>
                <h6>Phone</h6> <h6> +216 22196330 </h6>
                <h6>Linkedin</h6> <h6> sakouhi wafaa </h6>
                <h6>Github</h6> <h6> wafaa dev </h6>
              </Paper>
            </Box>
          </Grid>
          {/* <Grid item xs={12} lg={6}>
            <Box style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', background: "none" }}>
              <h5> contact form </h5>
              <form className={classes.form} noValidate autoComplete="off">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <TextField className={classes.input} label="required field" defaultValue="Full name" />
                  <TextField className={classes.input} label="required field" defaultValue="Email" />
                  <TextField className={classes.input} label="required field" defaultValue="Message" />
                </div>
              </form>
            </Box>

            <Box>
              <Button variant="contained" color="primary"> Submit </Button>
            </Box>
          </Grid> */}

          <Grid item xs={12} md={12}>
            <Box>
              <h5>
                feel free to contact me on social networks
              </h5>
            </Box>
            <Paper square style={{ display: 'flex', textAlign: 'center', background: "none" }}>
              <Tab icon={<LinkedInIcon />} label="Linkedin" target="_blank" href="https://www.linkedin.com/in/wafa-sakouhi-860abb208/" />
              <Tab icon={<TwitterIcon />} label="twitter" target="_blank" href="https://twitter.com/?lang=fr" />
              <Tab icon={<InstagramIcon />} label="Instagram" target="_blank" href="https://www.instagram.com/" />
              <Tab icon={<FacebookIcon />} label="Facebook" target="_blank" href="https://fr-fr.facebook.com/" />
            </Paper>

          </Grid>

          <Grid item xs={12} md={12}>
            <Box style={{ paddingTop: "30px" }}>
              <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                <HomeIcon />
              </Link>
            </Box>
          </Grid>

        </Grid>

      </Grid>
    </Container>
  );
}