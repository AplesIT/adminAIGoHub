import React from 'react'

import {makeStyles } from '@material-ui/core/styles';
import CategoryIcon from '@material-ui/icons/Category';
import List from '@material-ui/core/List';
 
import FaceIcon from '@material-ui/icons/Face';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
 
import ListItemText from '@material-ui/core/ListItemText';
 
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { IconButton } from '@material-ui/core';
function DrawerBar(props) {
    const useStyles = makeStyles((theme) => ({
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));
    const classes = useStyles();
    const [openUser, setOpen] = React.useState(true);
    const [openCategory,setCategory] =React.useState(true);
    const handleClick = () => {
        setOpen(!openUser);
    };

    const { changeHistory } = props;
 
    return (
        <div>
            
            <List>
            <ListItem button >
                    <ListItemText primary="AIGoHub"/>
            </ListItem>
                <ListItem button onClick={handleClick}>
                <IconButton aria-label="show 4 new mails" color="inherit" disableRipple="false" >
                        <FaceIcon  color="white" />
                </IconButton>
                    <ListItemText primary="User" />
                    {openUser ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openUser} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={()=> changeHistory("/listapi")}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                                <ListAltIcon styles={{color:"white"}} />
                        </IconButton>
                            <ListItemText   className="ml-2" primary="List Api" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={()=>{setCategory(!openCategory)}}>
                    <IconButton color="inherit"> 
                     <CategoryIcon/>
                     </IconButton>
                    <ListItemText className="ml-2" primary="Category"></ListItemText>                       
                    {openCategory ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openCategory} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}  onClick={()=>changeHistory("/poster")}   >
                        <IconButton aria-label="show 4 new mails" color="inherit">
                                <AllInboxIcon  styles={{color:"white"}} />
                        </IconButton>
                            <ListItemText   className="ml-2" primary="Poster" />
                        </ListItem>
                        <ListItem button className={classes.nested}  onClick={()=>changeHistory("/managerUser")} >
                        <IconButton aria-label="show 4 new mails" color="inherit">
                                <PeopleAltIcon  styles={{color:"white"}} />
                        </IconButton>
                            <ListItemText   className="ml-2" primary="Manager User" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>

    )
}
export default withRouter(DrawerBar);
