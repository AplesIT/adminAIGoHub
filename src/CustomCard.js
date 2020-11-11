import React, { Component } from 'react'
import { Bookmark } from "react-feather";
import "./CustomCard.css"
import Slider from "react-slick";
import { Tooltip } from 'reactstrap';
import { Route , withRouter} from "react-router-dom";
class CustomCard extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            tooltipOpen: false
        }
    }
    setTooltipOpen =()=>
    {
        this.setState(
            {
                tooltipOpen: !this.state.tooltipOpen
            }
        )
    }
    onClickDetail=()=>
    {
        this.props.history.push("/detail");
    }
    render() {
        return (

            <div className="item-row mt-3 border special-item ml-2 d-flex flex-column" style={{ width: "230px  ", height: "300px  ", borderRadius: 5 }} onClick={()=>{this.onClickDetail()}} >
                <Bookmark className="bookMark" />
                < div className="mcard-title  d-flex flex-row row mt-3">
                    <img className="col-4 img-fluid" src="https://rapidapi-prod-apis.s3.amazonaws.com/63/5abbaa32ca4265a27ee3ba46c2f5c3/cd0bf186d542466b03aee00e539c575a.png" />
                    <div className=" " style={{ fontWeight: "bold", fontSize: 16, lineHeight: 2, textAlign: "left", padding: "0px !important" }}>Youtube to mp4</div>
                </div>
                <div className="mcard-body">
                    <div className="mcard-body-text">
                        An online service that retrieves YouTube video files from Google's unique server address.
                        </div>
                </div>
                <div className="mcard-body-rate flex-row row ">
                    <div className="col-3 d-flex flex-row">
                        <img className="img-fluid" src="/popularity.svg" />
                        <div className="txt-rate ml-2" style={{ fontSize: 12 }}  id="popularity">4.8</div>
                        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} autohide={false} target="popularity" toggle={()=> this.setTooltipOpen()}>
                            popularity .....
                        </Tooltip>
                    </div>
                    <div className="col-5 d-flex flex-row">
                        <img className="img-fluid" src="/latency.svg" />
                        <div className="txt-rate ml-2" style={{ fontSize: 12 }} > 2759ms</div>
                    </div>
                    <div className="col-4 d-flex flex-row">
                        <img className="img-fluid" src="/success-new.svg" />
                        <div className="txt-rate ml-1 mr-2" style={{ fontSize: 12 }} >48%</div>
                    </div>
                </div>
            </div>


        )
    }
}
export default withRouter(CustomCard);
