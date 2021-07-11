import '../assets/css/App.css';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "../assets/jss/layouts/appStyle.js";

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.wrapper}>
        <h1>test</h1>
        <Route path="/" exact component={Index}></Route>
        <Route path="/about/" exact component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
