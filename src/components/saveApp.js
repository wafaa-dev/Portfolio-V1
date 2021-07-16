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
<Container>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor:"blue"}}>
      <AboutMe/>
    </Grid>

 <Grid item xs spacing={4} style={{backgroundColor:"red"}} container>
          <Router>
            <Grid item xs={12} style={{backgroundColor:"green"}}>
       <Header />
            </Grid>
    

      <Switch>
        <Route exact path ="/" >
        <Home />
       </Route>

        <Route exact path="/Resume" > 
        <Resume /> 
        </Route>

        <Route exact path="/Work">
        <Work/>
         </Route>

        <Route path="/Contact" >
        <Contact/>
         </Route>

        </Switch>
         </Router>
       
        </Grid>

     </Grid>
       <Footer/>
</Container>  
  );
}

export default App;
