import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
import ModalUser from './ModalUser';
class UserManage extends Component {

    /**
     * life cycle
     * run component
     * 1 run construct -> init state
     * 2 didmount set giá trị state
     * 3 render
     * 
     */






    constructor(props) {
        super(props);
        this.state = {
            arrUser: [],
            isOpenModalUser: false
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }

        console.log('get user from node.js: ', response)
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,

        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,

        })
    }

    render() {
        console.log('check reder ', this.state)
        let arrUsers = this.state.arrUsers;

        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    test={'abc'}
                    toggleFormParent={this.toggleUserModal}

                >

                </ModalUser>
                <div className='title text-center'>
                    manage users with thien
                </div>
                <div className='mx-1'>
                    <button className='btn btn-primary px-3' onClick={() => this.handleAddNewUser()}>
                        <i className='fas fa-plus'></i>
                        add new user
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tr>
                            <th>email</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>address</th>
                            <th>action</th>
                        </tr>


                        {arrUsers && arrUsers.map((item, index) => {

                            console.log('check map', item, index)
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit"><i class="fas fa-pencil-alt"></i></button>
                                        <button className='btn-delete'><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>

                            )
                        })



                        }



                    </table>
                </div>

            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
