import React, { Component } from 'react'
import UserTable from './UserTable'

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             usersData : [
                { id: 1, name: 'Tania', username: 'floppydiskette' },
                { id: 2, name: 'Craig', username: 'siliconeidolon' },
                { id: 3, name: 'Ben', username: 'benisphere' },
              ]
        }
    }
    
    render() {
        return (
            <div className='container'>
                <h1>CURD Operation</h1>
                <div className='flex-row'>
                    <div className='flex-large'>
                        <h2>Add User</h2>
                    </div>
                    <div className="flex-large">
                        <h2>View users</h2>
                         <UserTable users={this.state.usersData} />
                    </div>

                </div>
            </div>
        )
    }
}

export default User
