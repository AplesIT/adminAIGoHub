import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect'
import CustomCheckBox from "./CustomCheckBox"
import CustomCard from "./CustomCard"
export default function Poster(props) {
    useEffect(() => {
        props.setAuthor(true);
    })
    const BootstrapInput = withStyles((theme) => ({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            color: "black",
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }))(InputBase);
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
            marginTop: 20,
        },
    }));
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <div className="filter-header" style={{ margin: "2% 5% 2% 5%" }}>
                <div className="row justify-content-end">
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="demo-customized-select-native">Sort</InputLabel>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput />}>
                            <option value={1} selected="selected">Sort by scale ascending</option>
                            <option value={-1}>Sort by scale descending</option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className="row mt-3">
                    <div className="d-flex flex-column col-3 shadow" style={{ borderRadius: 10 }}>

                        <div className="row-item-sideBar mb-5" >
                            <div className="d-flex flex-row mt-4" style={{ marginLeft: "10%" }}>
                                <LocalAtmIcon style={{ fontSize: "2.25rem" }} />
                                <Typography style={{ fontSize: "1.15rem", fontStyle: "bold" }} className="m-1 ml-2" > Money</Typography>
                            </div>
                            <div style={{ fontSize: "1.05rem", float: "right" }} className=" ml-2" > <CustomCheckBox children="Best Seller" /> </div>
                            <div style={{ fontSize: "1.05rem", float: "right" }} className="ml-2" > <CustomCheckBox children="Average" /> </div>
                            <div style={{ fontSize: "1.05rem", float: "right" }} className="ml-2" > <CustomCheckBox children="Low" /> </div>
                            <div style={{ fontSize: "1.05rem", float: "right" }} className=" ml-2" > <CustomCheckBox children="No sold" /> </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row row col-8 shadow pb-3 ml-4"  style={{ borderRadius: 10, paddingLeft: "3%"}}>
                        <CustomCard/>
                        <CustomCard/>
                        <CustomCard/>
                        <CustomCard/>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
