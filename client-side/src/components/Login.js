import {NavLink} from 'react-router-dom';
import React from 'react'
import{useState} from 'react'
import '/Users/summerjohnson/Desktop/nutrify-me/client-side/src/App.css'
import {useHistory} from "react-router-dom"
import { withRouter } from 'react-router-dom'


function Login(props) {
    //let history = useHistory
  
    const [userLogin, setUserLogin] = useState({})
    const [isloggedin, setIsloggedin] = useState(false)

    const handleOnAdd = (e) =>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    

    const handleUserLogin = () => {
        let data = {
            username: userLogin.username,
            password: userLogin.password
            
        }
        fetch('http://localhost:8080/users/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then(result => result.json())
            .then(result => {
                if(result.success) {
                    console.log(result)
                    localStorage.setItem("userid", result.user_id)
                    alert("Welcome back to nutrifyMe")
                   props.history.push("/Profile")
                }else {
                    alert("No user found")
                  props.history.push("/Regsiter")
                }
        
        })

    }

    const handleUserGuests = () => {
       props.history.push("/Home")
    }

    return (
        <div id='loginPage' >
            <h1 id='title'>nutrifyMe</h1>
            
            <div id='loginBox'>
                <h1>Login</h1>
                <div class="textbox">
                    <i class="fas fa-user" ></i>   
                    <input  type="text" onChange={handleOnAdd} placeholder="username" name='username' required/>
                </div>
                <div class="textbox">
                    <i class="fas fa-lock" ></i>
                    <input  type="password" onChange={handleOnAdd} placeholder="password" name='password'required/>
                </div>
                <button class="btn" onClick={handleUserLogin}>Login</button>
                <a href="/register"><button class="btn"> Register</button></a> 
                <a href="/Home"><button class="btn" onClick={handleUserGuests}>Login as Guest </button></a> 
                  
            </div>
        </div>

    )
}

export default withRouter(Login) 