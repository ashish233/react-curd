import React, { Component } from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usersData: [
                { id: 1, name: 'ashish', username: 'ashishpande' },
                { id: 2, name: 'manish', username: 'manishpendse' },
                { id: 3, name: 'ajinkya', username: 'ajinkyadivekar' },
            ]
        }
    }

    addUser = (user) => {
        console.log(" in add user");
        console.log(user)
        this.setState({
            usersData: [user, ...this.state.usersData]
        }, () => {
            console.log(this.state.usersData)
        })
    }

    deleteUser = (name) => {
        this.setState({
            usersData: this.state.usersData.filter(info => info.name != name)
        })
    }

    editRow = info =>{
        console.log(info)
    }

    updateUser = user =>{
        console.log(" update user")

    }
    render() {
        return (
            <div className='container'>
                <h1>CURD Operation</h1>
                <div className='row'>
                    <div className='col'>
                        <h2>Add User</h2>
                        <AddUserForm onSumbit={this.addUser}></AddUserForm>
                    </div>
                    <div className="col">
                        <h2>View Users</h2>
                        <UserTable users={this.state.usersData}
                            deleteUser={this.deleteUser}
                            editRow ={this.editRow} />
                    </div>

                </div>
            </div>
        )
    }
}

export default User
