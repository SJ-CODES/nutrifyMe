import {NavLink} from 'react-router-dom';
import React from 'react'
import {useState} from 'react'
import '/Users/summerjohnson/Desktop/nutrify-me/client-side/src/App.css'
import {useHistory} from "react-router-dom"



function Register(props) {
   let history = useHistory()
    
    const [userRegister, setUserRegister] = useState({})

    const handleOnAdd = (e) =>{
        setUserRegister({
            ...userRegister,
            [e.target.name]: e.target.value
        })
    }
    const handleUserRegister = () => {
        
        fetch(`${process.env.REACT_APP_SERVER_URL}/users/register`, {
        method: 'POST',
        body: JSON.stringify(userRegister)
        }).then(result => result.json())
        .then(result => {
            if(result.success) {
                alert("Successfully Registered!")
                props.history.push("/")
            }else {
                alert("Error Try Again!")
            }
        }) 
        
    }


    return(
        <div id="registerPage">
            <h1 class='title'>nutrifyMe</h1>
           
           
           
            <div class='loginBox'>
            
                <h1>Register</h1>
                <div class="textbox">
                    {/* <i class="fas fa-user" aria-hidden="true"></i>    */}
                    <input  type="text" onChange={handleOnAdd} placeholder="Username" name='username' required/>
                </div>
                <div class="textbox">
                    {/* <i class="fas fa-lock" aria-hidden="true"></i> */}
                    <input  type="password" onChange={handleOnAdd} placeholder="Password" name='password'  required/>
                </div>
                <button class="btn" onClick={handleUserRegister}>Register</button>
                
            </div>


        </div>
    )
}

export default Register