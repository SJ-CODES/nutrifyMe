import {NavLink} from 'react-router-dom';
import React from 'react'
import {useState} from 'react'

function Register() {
    const [userRegister, setUserRegister] = useState({})

    const handleOnAdd = (e) =>{
        setUserRegister({
            ...userRegister,
            [e.target.name]: e.target.value
        })
    }
    const handleUserRegister = () => {
        fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        ,
        body: JSON.stringify(userRegister)
        }).then(result => result.json())
        .then(result => {
            if(result.success) {
                alert("User successfully added!")
                //this takes the user to the books page to view all books
                this.props.history.push('/')
            }
        })
    }


    return(
        <div id="registerPage">
           
            <div id='loginBox'>
            
                <h1>Register</h1>
                <div class="textbox">
                    <i class="fas fa-user" aria-hidden="true"></i>   
                    <input  type="text" onChange={handleOnAdd} placeholder="Username" name='username' required/>
                </div>
                <div class="textbox">
                    <i class="fas fa-lock" aria-hidden="true"></i>
                    <input  type="password" onChange={handleOnAdd} placeholder="Password" name='password'  required/>
                </div>
                <button class="btn" onClick={handleUserRegister}>Register</button>
                
            </div>


        </div>
    )
}

export default Register