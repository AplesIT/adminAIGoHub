import React, { Component } from 'react';
import { Star, Lock, Target } from "react-feather";

import "./DetailPage.css";
import ReactPlayer from "react-player"
import { List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Carousel, { Modal, ModalGateway } from 'react-images';

export default class DetailPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            modalIsOpen: false
        };
    }
    componentDidMount() {
        this.props.setAuthor(true);
    }
    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    }
    clickImage = (index) => {
        this.setState(
            {
                isOpen: true,
                modalIsOpen: false
            }
        )
    }
    render() {
        const images = [
            {
                source: "https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/desktop_screenshot/13f78b1cb8c72a70fbd8287ea4855f81.png",
            }, {
                source: "https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/desktop_screenshot/bb9c08df4396688ee6a8dbbe40e61473.png",
            }, {
                source: "https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/desktop_screenshot/22642fd83d2e6d16bb77ad45060b8e77.png",
            }
        ];
        const { modalIsOpen } = this.state;
        return (
            <div>


                <div className="detailPage">
                    {/* Header */}
                    <div className="headeritem w-100 img-fluid" style={{
                        height: 500, backgroundImage: `url("https://cdn.shopify.com/shopifycloud/shopify_app_store/assets/v2/backgrounds/hero-073ea0d17442ccee222f7e710d062b8c05b22f59910e3aa366fa21b586660c0d.svg")`, backgroundSize: 'cover',
                        overflow: 'hidden', padding: 50
                    }}>
                        <div className="header-link" >
                            <a className="linkItem" href="#" style={{ color: "blue", fontSize: 15 }}>   PLACES TO SELL  </a>|
                <a className="linkItem" href="#" style={{ color: "blue", fontSize: 15 }}>   MARKETING  </a>
                        </div>
                        <div className="bodyItem mt-1 row d-flex mt-3">
                            <div className="logo-item col-1">
                                <img className="img-fluid shadow" style={{ borderRadius: 10, width: 60, height: 60 }} srcSet="https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/cb066d6a6de0f6b56593f7dc0ed4321c.jpg?height=168&quality=90&width=168 2x, https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/cb066d6a6de0f6b56593f7dc0ed4321c.jpg?height=84&quality=90&width=84 1x" height={84} width={84} alt="Facebook channel" src="https://apps.shopifycdn.com/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/cb066d6a6de0f6b56593f7dc0ed4321c.jpg?height=84&quality=90&width=84" />
                            </div>
                            <div className="title-item flex-column mt-4" >
                                <div className="d-flex flex-row">
                                    <div style={{ fontSize: "3em" }}> Facebook channel</div>
                                    <text className="mt-2 ml-2">by</text>
                                    <a className="ml-1 mt-2" href="/home">AIHUB</a>
                                </div>
                                <div style={{ fontSize: "1.75em", marginTop: 10, color: "#454f5b", fontWeight: 400, marginTop: 20 }}>
                                    Bring your products to Facebook and Instagram users.
                        </div>
                                <div style={{ marginTop: 30 }} className="d-flex flex-row">
                                    <Star color="gold" fill="gold" />
                                    <div className="d-flex flex-row" style={{ marginTop: 5, marginLeft: 5 }}>
                                        <div style={{ marginTop: 4, marginLeft: 5, color: "#637381", fontWeight: 400 }}  >4.6</div>
                                        <a style={{ marginTop: 4, marginLeft: 5 }} href="#">1258 reviews</a>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <button type="button" className="btn" style={{ fontFamily: "ShopifySans, Helvetica, Arial, sans-serif", marginTop: 40, backgroundColor: "#5c6ac4", color: "#ffffff", width: "25%", height: "3em" }}>Add app</button>
                                <div style={{ marginTop: 20, color: "#637381", fontWeight: 400, marginBottom: 0 }}>Free to install. Additional charges may apply.</div>
                            </div>
                            <div className="ui-app-store-hero__media d-flex flex-column align-items-center" style={{ marginLeft: 50, position: "relative" }}>
                                <ReactPlayer className='react-player shadow' width="30rem" height="20rem"
                                    url="https://www.youtube.com/watch?v=_hnypXonehE&feature=emb_logo" />
                            </div>

                        </div>


                    </div>


                    {/* Body */}
                    <div className="d-flex row justify-content-center" style={{ marginTop: 50, marginLeft: 20, marginRight: 20 }}>
                        <div className="col-3">
                            <h2 className="text-center"> Simple to set up</h2>
                            <p className="text-center" style={{ fontSize: "1.3em", lineHeight: 1.3 }}>Quickly connect your main Facebook accounts and your products will automatically sync so can promote them on Facebook or Instagram.</p>
                        </div>
                        <div className="col-3">
                            <h2 className="text-center"> Build your audience</h2>
                            <p className="text-center" style={{ fontSize: "1.3em", lineHeight: 1.3 }}>Use free and paid marketing tools to reach new customers and promote your products across Facebook and Instagram, without leaving Shopify.</p>
                        </div>
                        <div className="col-3">
                            <h2 className="text-center"> Easily manage products</h2>
                            <p className="text-center" style={{ fontSize: "1.3em", lineHeight: 1.3 }}>Manage your products, view approved products for selling and marketing, resolve product issues, and track ad activity all from the channel.</p>
                        </div>
                    </div>
                    {/* Body */}
                    <hr style={{ margin: 50 }} />
                    <div className="row d-flex justify-content-between" style={{ margin: 50 }}>
                        <div className="col-4 d-flex flex-column "  >
                            <h2> About Facebook channel </h2>
                            <div id="txt-description" className="txt-description">
                                <p style={{ fontSize: "1.25em" }}>The Facebook Channel gives you all the tools you need to successfully sell and market across Facebook and Instagram. Discover new opportunities to help you scale and grow your business, and manage all your Facebook accounts and products from one place.

                                Simple setup...</p>
                                <p style={{ fontSize: "1.25em" }}>The Facebook Channel gives you all the tools you need to successfully sell and market across Facebook and Instagram. Discover new opportunities to help you scale and grow your business, and manage all your Facebook accounts and products from one place.

                                Simple setup...</p>
                                <p style={{ fontSize: "1.25em" }}>The Facebook Channel gives you all the tools you need to successfully sell and market across Facebook and Instagram. Discover new opportunities to help you scale and grow your business, and manage all your Facebook accounts and products from one place.

                                Simple setup...</p>
                                <p style={{ fontSize: "1.25em" }}>The Facebook Channel gives you all the tools you need to successfully sell and market across Facebook and Instagram. Discover new opportunities to help you scale and grow your business, and manage all your Facebook accounts and products from one place.

                                Simple setup...</p>
                            </div>
                            <button type="button" id="btn-show" className="btn-show" style={{ fontFamily: "ShopifySans, Helvetica, Arial, sans-serif", marginTop: 2, width: "50%", height: "3em" }} onClick={()=>
                            {
                                console.log(document.getElementById("txt-description").classList);
                                if(document.getElementById("txt-description").classList.contains("-expanded"))
                                {
                                    document.getElementById("txt-description").classList.remove("-expanded");
                                }
                                else 
                                {
                                    document.getElementById("txt-description").classList.add("-expanded");
                                }
                             
  
                                if (document.getElementById("txt-description").classList.contains("-expanded")) {
                                    document.getElementById("btn-show").innerHTML= 'Show less description';
                                } else {
                                    document.getElementById("btn-show").innerHTML ="Show full description";
                                }
                            }}>Show full description</button>
                        </div>

                        <div className="col-3 flex-end flex-column stock">
                            <h1>Support</h1>
                            <div className="d-flex flex-row ">
                                <Lock />
                                <a style={{ fontSize: "1.125em", marginTop: 5, marginLeft: 5 }} href="#">Privacy policy</a>
                            </div>
                            <div className="d-flex flex-row mt-2 ">
                                <Target />
                                <a style={{ fontSize: "1.125em", marginTop: 5, marginLeft: 5 }} href="#">Get Support</a>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-column justify-content-between" style={{ margin: 50 }}>
                        <h2>Media gallery</h2>
                        <div className="d-flex flex-row row" style={{ marginLeft: 10 }}>
                            <img className="img-fluid" style={{ width: 150, height: 150, marginRight: 10, borderRadius: 5 }} src={images[0].source} onClick={this.toggleModal}></img>
                            <img className="img-fluid" style={{ width: 150, height: 150, marginRight: 10, borderRadius: 5 }} src={images[1].source} onClick={this.toggleModal}></img>
                            <img className="img-fluid" style={{ width: 150, height: 150, marginRight: 10, borderRadius: 5 }} src={images[2].source} onClick={this.toggleModal}></img>
                        </div>
                        <ModalGateway>
                            {modalIsOpen ? (
                                <Modal onClose={this.toggleModal}>
                                    <Carousel views={images} />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                    <div className="d-flex flex-column " style={{ background: "#f4f6f8" }}>
                        <h2 style={{ margin: "50px 50px 10px 50px" }}>Pricing</h2>
                        <div className="d-flex flex-row row justify-content-center" style={{ marginTop: 10, marginLeft: 50, marginBottom: 20 }}>
                            <div className="bg-white list-item shadow d-flex flex-column" style={{ borderRadius: 10, minHeight: "20em", marginBottom: 40 }}>
                                <h5 className="mt-2 text-left"> FREE</h5>
                                <h3 className="mt-2 text-center"> Free to install</h3>
                                <List  >
                                    <List.Item style={{ margin: "0px 5px 0px px" }}>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content style={{ fontSize: "1.15em" }}>100 monthly review request emails</List.Content>
                                    </List.Item>
                                    <List.Item style={{ margin: "0px 5px 0px px" }}>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content style={{ fontSize: "1.15em" }}>Offer discounts for photo reviews</List.Content>
                                    </List.Item>
                                    <List.Item style={{ margin: "0px 5px 0px px" }}>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content style={{ fontSize: "1.15em" }}>Reviews, Ratings & Popup widgets</List.Content>
                                    </List.Item>
                                    <List.Item style={{ margin: "0px 5px 0px px" }}>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content style={{ fontSize: "1.15em" }}>Inline SEO</List.Content>
                                    </List.Item>
                                    <List.Item style={{ margin: "0px 5px 0px px" }}>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content style={{ fontSize: "1.15em" }}>Up to 500 processed orders</List.Content>
                                    </List.Item>


                                </List>

                            </div>
                            <div className="bg-white list-item shadow d-flex flex-column" style={{ borderRadius: 10, minHeight: "20em", marginBottom: 40 }}>
                                <h5 className="mt-2 text-left"> FREE</h5>
                                <h3 className="mt-2 text-center"> Free to install</h3>
                                <List>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>100 monthly review request emails</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>Offer discounts for photo reviews</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>Reviews, Ratings & Popup widgets</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>Inline SEO</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>Up to 500 processed orders</List.Content>
                                    </List.Item>


                                </List>

                            </div>
                            <div className="bg-white list-item shadow d-flex flex-column" style={{ borderRadius: 10, minHeight: "20em", marginBottom: 40 }}>
                                <h5 className="mt-2 text-left"> FREE</h5>
                                <h3 className="mt-2 text-center"> Free to install</h3>
                                <List>
                                    <List.Item  >
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>100 monthly review request emails</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>Offer discounts for photo reviews</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>Reviews, Ratings & Popup widgets</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>Inline SEO</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='checkmark' fill="green" color="green" />
                                        <List.Content>Up to 500 processed orders</List.Content>
                                    </List.Item>


                                </List>

                            </div>

                        </div>
                    </div>
                </div>

            </div>


        )
    }
}
