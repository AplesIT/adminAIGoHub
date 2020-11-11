import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Authen.css'
import SignIn from './SignIn';
import Signup from './Signup';
import { withRouter } from 'react-router-dom';
 class Authen extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isLogin : true
        }
    }
    onClicks= ()=>{
        this.setState(
            {
                isLogin: !this.state.isLogin
            }
        )
    }
    renderComponents= () =>
    {
        return (this.state.isLogin ? <SignIn funcClick={() =>this.onClicks()} setAuthor={this.props.setAuthor}/> :<Signup funcClick={() =>this.onClicks()}/>)
    }

    render() {
        return (
            <div className=" row authen justify-content-center">
             <img src="/background.jpg" className="img-fluid col-lg-6 col-md-10 col-xs-10"  alt=""/>
            {this.renderComponents()}
            
            </div>
        )
    }
}
export default withRouter(Authen);
