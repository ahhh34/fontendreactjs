import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';




class Login extends Component {
    constructor(props) {
        super(props);

    }



    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'> login </div>
                        <div className='col-12 form-group login-input'>
                            <label>user name</label>
                            <input type='text' className='form-control' placeholder='enter your name' />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>password</label>
                            <input type='password' className='form-control' placeholder='enter your password' />
                        </div>
                        <div className='col-12 '>
                            <button className='btn-login'>login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password'>forgot your password?</span>
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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
