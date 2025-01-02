import { TRUE } from 'node-sass';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }
    toggle = () => {
        this.props.toggleFormParent()
    }


    componentDidMount() {
    }

    toggle = () => {
        alert('click me')
    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('missing parameter ' + arrInput[i]);
            }


        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid=this.isValid
        console.log('data modal ', this.state)

    }

    handleOnChageInput = (event, id) => {
        //good code

        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });

        //bad code modify state
        /**
         * this.state={
         * email:''
         * password:''
         * .....
         * }
         * this.state.email== this.state['email]
         * 
         */
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check state bad code: ', this.state)
        // })

    }

    render() {

        // console.log('check child props', this.props);
        // console.log('check child openmodal prop', this.props.isOpen);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.toggle}
                className={'modal-user-container'}
                size='lg'


            >
                <ModalHeader toggle={this.toggle}>create new user</ModalHeader>
                <ModalBody>

                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>email</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, "email") }}
                                value={this.state.email}
                            ></input>

                        </div>
                        <div className='input-container'>
                            <label>password</label>
                            <input type='password'
                                onChange={(event) => { this.handleOnChageInput(event, "password") }}
                                value={this.state.password}
                            ></input>

                        </div>
                        <div className='input-container'>
                            <label>first name</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, "firstName") }}
                                value={this.state.firstName}
                            ></input>

                        </div>
                        <div className='input-container'>
                            <label>last name</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, "lastName") }}
                                value={this.state.lastName}
                            ></input>

                        </div>
                        <div className='input-container max-w-input'>
                            <label>address</label>
                            <input type='text'
                                onChange={(event) => { this.handleOnChageInput(event, "address") }}
                                value={this.state.address}
                            ></input>

                        </div>
                    </div>




                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3'
                        onClick={this.handleAddNewUser}>add user</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={this.toggle}>close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
