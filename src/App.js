import React from "react" ;
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Home from './components/Home';
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {


  return (
    <Router>
<Container>
  <Grid container >
    <Grid item xs={12} sm={12} md={4} lg={3} >
      <AboutMe/>
    </Grid>

 <Grid item md={8} container style={{textAlign:"center"}}>
     <Grid item xs={12} md={12} >
       <Header />
     </Grid>
    
<Grid item md={12} style={{marginLeft:"55px"}}> 
      <Switch>
        <Route exact path ="/" > <Home /> </Route>
        <Route exact path="/Resume" > <Resume /> </Route>
        <Route exact path="/Work"> <Work/> </Route>
        <Route path="/Contact" ><Contact/></Route>
       </Switch>

</Grid>
</Grid>
 </Grid>
       <Footer/>
</Container>  
  </Router>
  );
}

export default App;
