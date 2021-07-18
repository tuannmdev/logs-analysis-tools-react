import '../assets/css/App.css';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import styles from "../assets/jss/layouts/appStyle.js";
import Dashboard from '../components/Dashboard/Dashboard';
import Sidebar from '../components/Sidebar/Sidebar';
import routes from "../routes.js";
import logo from "../assets/img/loganlytics_logo.png";
import bgImage from "../assets/img/sidebar-2.jpg";
import { createBrowserHistory } from 'history';
import Navbar from '../components/Navbars/NavBar';

const About = () => <h2>About</h2>

const useStyles = makeStyles(styles);
const history = createBrowserHistory();

function App() {
  const classes = useStyles();
  const [color, setColor] = React.useState("blue");
  const [image, setImage] = React.useState(bgImage);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.wrapper}>       
      <Router {...{ history }}>
      <Navbar />
        <Switch>
          <Route path="/about/" exact component={About}></Route>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
