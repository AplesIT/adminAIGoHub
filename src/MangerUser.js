import React, {useEffect} from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TableUser from './TableUser';
export default function MangerUser(props) {
    useEffect(()=>
    {
        props.setAuthor(true);
    })
    const {mainPrimaryColor} =props;
    const useStyles = makeStyles((theme) => ({
          search: {
            float:"right",
            marginTop: "20px !important",
            position: 'relative',
            borderRadius: "20px",
            backgroundColor: fade(theme.palette.primary.light, 0.15),
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '30% !important',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(3),
            },
          },
          searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          
          inputRoot: {
            color: 'black',
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
              width: '20ch',
            },
          },
          sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'flex',
            },
          },
          sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
              display: 'none',
            },
          } 
    
        }));
        const classes = useStyles();
    return (
        <div className="d-flex flex-column">
          <div className="search-input">
            <div className={classes.search} >
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
            <div className="table-body">
            < TableUser ></TableUser>
            </div>
        </div>
    )
}
