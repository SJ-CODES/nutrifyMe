import {NavLink} from 'react-router-dom';
import React from 'react'
import {useState} from 'react'
import '/Users/summerjohnson/Desktop/nutrify-me/client-side/src/App.css'
import {useHistory} from "react-router-dom"


function Register() {
    let history = useHistory()
    
    const [userRegister, setUserRegister] = useState({})

    const handleOnAdd = (e) =>{
        setUserRegister({
            ...userRegister,
            [e.target.name]: e.target.value
        })
    }
    const handleUserRegister = () => {
        
        fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        ,
        body: JSON.stringify(userRegister)
        }).then(result => result.json())
        .then(result => {
            if(result.success) {
                alert("Successfully added!")
                history.push("/")
            }else {
                alert("error")
            }
        })
    }


    return(
        <div id="registerPage">
            <h1 id='title'>nutrifyMe</h1>
           
           
           
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