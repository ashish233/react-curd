import React, { Component } from 'react'

export default class AddUserForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            username: ""
        }
    }

    onChangeHandler = (event) =>{
       
        this.setState({
            [event.target.name] : event.target.value
        })

    }
  
    onSubmitHandler = (event)=>{
        event.preventDefault();
        this.props.onSumbit({
            name:this.state.name,
             username:this.state.username}
        )
        this.setState({
            name:'',
            username:'',
            flag:true
        })
    }



  

    render() {

        

        return (
            <div>
                <form className='form'>
                    <div className='form-group'>
                        <label>Name</label>
                        <input className='form-control'
                            name='name'
                            onChange={this.onChangeHandler}
                            type='text'
                            value={this.state.name} ></input>
                    </div>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input className='form-control'
                         name='username'
                         onChange={this.onChangeHandler}
                         type='text'
                         value={this.state.username} 
                         ></input>
                    </div>
                    <button className='btn btn-primary' onClick={this.onSubmitHandler }>Submit</button>
                   
                </form>
            </div>
        )
    }
}
