 
import './App.css';
import Authen from "./Authen"
import {Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import HomePage  from './Home';
import ListApi from "./ListApi";
import {   createMuiTheme } from "@material-ui/core/styles";
import React from 'react'
import Poster from './Poster';
import DetailPage from "./DetailPage";
import ManagerUser from "./MangerUser"
function App() {
  const [theme,setTheme]=React.useState(true);
  const [isAuthor,setAuthor] =React.useState(false);
  const palletType = theme  ? "dark" : "light";
  const mainPrimaryColor = theme ? "#2196f3" : "#000000";
  const mainSecondaryColor = theme ? "#2196f3" : "#000000";
  const lightTheme=
  {
      palette: { 
      type: palletType,
      primary:
      {
          main: mainPrimaryColor
      },
      secondary:
      {
          main:  mainSecondaryColor
      }
      }
  }
  const themeLight = createMuiTheme(lightTheme);
  return (
    <div className="container-router">
    {isAuthor?<NavBar theme={theme} setTheme={setTheme} themeLight={themeLight} mainPrimaryColor={mainPrimaryColor} mainSecondaryColor={mainSecondaryColor} />: <div/>}
    <Switch>
    <Route exact path='/'render={() => <Authen  setAuthor={setAuthor} />}/>
    <Route path="/auth" component={Authen} />
    <Route path="/listapi" render={()=><ListApi setAuthor={setAuthor} />}/>
    <Route path="/poster" render={()=><Poster setAuthor={setAuthor}/>}/>
  <Route path="/home" render={()=><HomePage setAuthor={setAuthor}/>} />
  <Route path="/detail" render={()=><DetailPage setAuthor={setAuthor}/>} />
  <Route path="/managerUser" render={()=><ManagerUser setAuthor={setAuthor} mainPrimaryColor={mainPrimaryColor} mainSecondaryColor={mainSecondaryColor}/>} />
  </Switch>
  </div>
  );
}

export default App;
