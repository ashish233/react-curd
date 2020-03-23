import React from 'react'

export default function UserTable(props) {
    return (
        
        <table className='table'>
          <thead>
              <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              {props.users.length>0 ? (props.users.map((user,key)=>
                <tr key={key}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button className='btn btn-primary'
                         onClick={()=>props.editRow(user)}>Edit</button>
                        <button className='btn btn-warning'
                         onClick={()=>props.deleteUser(user.name)}>Delete</button>
                    </td>
                </tr>)):(<tr></tr>)}
          </tbody>
        </table>
        
    )
}
