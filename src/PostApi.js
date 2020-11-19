import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ReactPlayer from "react-player";
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ImageUploader from 'react-images-upload';


import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

 
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


import { withRouter } from 'react-router-dom';

import "./PostApi.css"
 function PostApi(props) {
    const { detailApi, setApi } = useState(
        {
            name: "",
            author: "",
            sologo: "",
            avatar: "",
            video: "",
            descrption: [
                {
                    title: "",
                    detail: "",
                }
            ],
            about: "",
            galary: [
                "",
                "",
                "",

            ],
            pricing: [
                {
                    price: "",
                    title: "",
                    detail:
                        [
                            "",
                            "",
                            ""

                        ]
                }
            ]
        }

    );
    const [desctiption, setdesciption] = useState([{}, {}]);
    const [urlVideo, seturlVideo] = useState("");
    const [pictures, setPictures] = useState([]);
    const [price, setPrice] = useState([]);
    const [tagPrice, setTagPrice] = useState([]);
    useEffect(() => {
        props.setAuthor(true);

    })
    const useStyles = makeStyles((theme) =>
        ({
            root: {
                '& .MuiTextField-root': {
                    margin: theme.spacing(1),
                    color: 'black',
                    width: '100%',

                },

            },
            textArea:
            {

            },
            sologan:
            {
                '& #sologan':
                {
                    minWidth: '25rem'
                }
            },
            multilineColor: {
                color: 'black',

            },
            margin: {
                margin: theme.spacing(1),
                marginTop: "10px",

            },
            withoutLabel: {
                marginTop: theme.spacing(3),
            },
            textField: {
                width: '20ch',
            },

        }));
    const changeImage = (picture) => {
        var temp = pictures.concat(picture);
        setPictures(temp);

    }

    const KeyCodes = {
        comma: 188,
        enter: 13,
    };
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    const createNotification = async (type) => {
 
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
             
              NotificationManager.success('Success message', 'Create success item',1000);
              await sleep(1000);
              props.history.push("/detail")
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
        };
      };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];
    const classes = useStyles();
    return (
        <div style={{ position: "relative" }} className="PostApi">
           
            <Button style ={{marginBottom: "5%"}}
                variant="contained"
                className="capitalize btn-submit"
                onClick={()=>createNotification('success')}
            >
                Create
            </Button>
            <form className={classes.root} autoComplete="off">
                <div >
                    <h1 className="ml-5 mt-3 ">Summary Api</h1>

                    <div className="d-flex flex-row row w-100 ml-3 mt-5">
                        <div className="d-flex flex-column col-5 ml-3 shadow-lg rounded" style={{ position: "relative" }}>
                            <div className="txt-title-name" style={{background: "white", margin: "5px", marginLeft: "10px", zIndex :100}}>
                                 <h2 >Name Api</h2>
                            </div>
                            <div className="d-flex flex-row row mt-3">


                                <TextField style={{ height: "20px" }} className="col-8 ml-3 mr-3" InputProps={{ className: classes.multilineColor }} required id="name" variant="outlined" label="Name" placeholder="Enter Name Api" defaultValue="FaceBook" />
                                <TextField className="col-3" InputProps={{ className: classes.multilineColor }} required id="author" variant="outlined" label="Author" placeholder="Enter Author"></TextField>
                                <br />
                            </div>
                            <div className="w-100">
                                <TextField  className="sologan" InputProps={{ className: classes.multilineColor }}  required id="sologan" variant="outlined"   label="Sologan" placeholder="Enter sologan" ></TextField>
                                <br />
                            </div>
                        </div>
                        <div className="video-container flex-column col-6 ml-3 pr-3 shadow-lg rounded" style={{ minHeight: "100px", position: "relative" }}>
                        <div className="txt-title-name" style={{background: "white", margin: "5px" , marginLeft: "5%", zIndex :100}} >
                            <h2 >Video Api</h2>
                        </div>
                            <div className="  d-flex flex-row row mt-3" style={{ color: "black !important" }}>
                                <TextField className="col-10 urlVideo" InputProps={{ className: classes.multilineColor }} style={{ color: "black !important" }} required id="video" variant='outlined' label="Youtube" placeholder="Enter demo video" />
                                <Button className="col-1" style={{ margin: "10px" }} variant="contained" color="primary" href="#contained-buttons" onClick={() => {
                                    var text = document.getElementById("video").value;
                                    seturlVideo(text.trim());
                                }}>
                                    Add
                                </Button>
                            </div>
                            <div style={{ position: "relative" }}>
                                {urlVideo !== "" ?
                                    <ReactPlayer className=' react-player  shadow-lg  ' width="30rem" height="20rem"
                                        style={{ marginLeft: '100px' }}
                                        url="https://www.youtube.com/watch?v=_hnypXonehE&feature=emb_logo" /> :
                                    <div className='shadow-lg  react-player' style={{ marginLeft: '5%', marginTop: "5%", minWidth: "40rem", minHeight: "20rem" }}></div>}
                            </div>

                        </div>
                    </div>
                </div>
                <h1 className="ml-5 mt-3">Summary Features</h1>
                <div className="container-desciption d-flex flex-row row ml-1" style={{ marginTop: "1rem", position: "relative" }}>

                    {desctiption.map((i) =>
                        (
                            <div className="shadow-lg  col-3 mb-5 ml-5 rounded" style={{ position: "relative", paddingRight: "4vh", paddingTop: "2vh"}}>

                                <TextField InputProps={{ className: classes.multilineColor }} className="urlVideo " required id="video" variant='outlined' label="Youtube" placeholder="Enter demo video" />
                                <TextareaAutosize style={{ marginLeft: "10px", width: "36ch", marginBottom: 10 }} aria-label="minimum height" rowsMin={5} placeholder="Minimum 3 rows" />
                            </div>
                        ))}
                    <div className="shadow-lg  col-3 ml-3 mb-5  ml-5 rounded" style={{ position: "relative", minHeight: "15rem" }}>

                        <IconButton var style={{ outline: 'none', position: "absolute", top: "30%", left: "30%", width: "40%", height: "40%" }} onClick={() => {
                            var temp = [...desctiption, {}]
                            setdesciption(temp);
                        }}>

                            <AddCircleIcon style={{ color: "black", width: "80%", height: "80%", }} />
                        </IconButton>
                    </div>
                </div>
                <h1 className="ml-5 mt-3">Images & Pricing</h1>
                <div className="d-flex justify-content-center w-100 row mb-5" style={{ position: "relative" }}>
                    <div className="shadow-lg m-5 col-5 rounded" style={{ background: "inherit", height: "50%" }}>
                    <div className="txt-title-name" style={{background: "white", margin: "5px", zIndex :100}} >
                        <h2 >Media gallery</h2>
                    </div>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={(picture) => changeImage(picture)}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            withPreview={true}
                        />
                    </div>
                    <div className="col-5 shadow-lg rounded mt-5 d-flex flex-column mb-3" style={{ padding: "30px", position: "relative" }}>
                    <div className="txt-title-name" style={{background: "white", marginLeft: "8%",marginTop: "2%", zIndex :100}} >
                        <h2>Pricing</h2>
                    </div>
                        {price.map((i) => (
                            <div className="item-row-price">

                                <FormControl fullWidth className={classes.margin} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-amount">Detail</InputLabel>
                                    <OutlinedInput

                                        id="outlined-adornment-amount"
                                        style={{ color: "black", height: "3rem" }}
                                        startAdornment={<InputAdornment position="start">$$</InputAdornment>}
                                        labelWidth={60}
                                    />
                                </FormControl>
                                <ReactTagInput
                                    tags={tagPrice}
                                    placeholder="Enter price have features"
                                    maxTags={10}
                                    editable={true}
                                    readOnly={false}
                                    removeOnBackspace={true}
                                    onChange={(newTags) => setTagPrice(newTags)}
                                />
                                <hr />
                            </div>
                        ))}
                        <div className="item-row-add-price mb-4" style={{ position: "relative" }}>
                            <IconButton var style={{ outline: 'none', position: "absolute", top: "30%", left: "43%", width: "15%", height: "15%" }} onClick={() => {
                                var temp = [...price, {}]
                                setPrice(temp);
                            }}>

                                <AddCircleIcon style={{ color: "black", width: "80%", height: "80%", }} />
                            </IconButton>
                        </div>


                    </div>
                </div>

            </form>
            <NotificationContainer/>
        </div>
    )
}
export default withRouter(PostApi);
