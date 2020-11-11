import React, { Component,useEffect} from 'react'
import NavBar from './NavBar'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { colors } from '@material-ui/core';
import TableApi from './TableApi';

function  HomePage(props) {
    const [theme,setTheme]=React.useState(true);
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
    useEffect(()=>
    {
        props.setAuthor(true);
    })
    const themeLight = createMuiTheme(lightTheme);
        return (
            <div>
            <ThemeProvider  theme={themeLight}>
            <div style={{width:"100%", color: mainPrimaryColor}}> 
                <TableApi/>
            </div>
            </ThemeProvider>
            </div>
        )
}
export default HomePage
