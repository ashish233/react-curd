import React from 'react'

export default function UserTable(props) {
    return (
        <table>
          <thead>
              <th>Name</th>
              <th>UserName</th>
              <th>Actions</th>
          </thead>
          <tbody>
              {props.users.length>0 ? (props.users.map(user=>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    
                </tr>)):(<tr></tr>)}
          </tbody>
        </table>
    )
}
