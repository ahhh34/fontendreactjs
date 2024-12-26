import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";


// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import { handleLoginApi } from "../../services/userService";

import './Login.scss';
import { FormattedMessage } from 'react-intl';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowpassword: false,
            errMessage: '',
        }

    }
    handleOnChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value)
    }
    handleOnChangePassWord = (event) => {
        this.setState({
            password: event.target.value
        })
        // console.log(event.target.value)
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                })
            }
            if (data && data.errCode === 0) {
                //to do

                this.props.userLoginSuccess(data.user)
                console.log('login sucess')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {

                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }




        }



    }

    handleShoeHidePassword = () => {

        this.setState({
            isShowpassword: !this.state.isShowpassword
        })
    }

    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'> login </div>
                        <div className='col-12 form-group login-input'>
                            <label>user name</label>
                            <input type='text' className='form-control' placeholder='enter your name' value={this.state.username} onChange={(event) => this.handleOnChangeUserName(event)} />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>password</label>
                            <div className='custom-input-password'>
                                <input className='form-control' type={this.state.isShowpassword ? 'text' : 'password'} placeholder='enter your password' value={this.state.password} onChange={(event) => this.handleOnChangePassWord(event)} />

                                <span onClick={() => { this.handleShoeHidePassword() }}>

                                    <i class={this.state.isShowpassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>

                                </span>





                            </div>



                        </div>

                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}

                        </div>
                        <div className='col-12 '>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password' >forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>or login with:</span>
                        </div>
                        <div className='col-12 social-login'>

                            <i className="fab fa-google-plus-g google"></i>

                            <i className="fab fa-facebook facebook"></i>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
