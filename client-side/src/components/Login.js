import {NavLink} from 'react-router-dom';
import React from 'react'
import{useState} from 'react'



function Login() {




    return (
        <div id='loginPage' >
           
            <div id='loginBox'>
                
                <h1>Login</h1>

                <div class="textbox">
                    <i class="fas fa-user" ></i>   
                    <input  type="text" placeholder="username" required/>
                </div>
                <div class="textbox">
                    <i class="fas fa-lock" ></i>
                    <input  type="password" placeholder="password" required/>
                </div>
                
                <button class="btn">Login</button>
                <a href="/register"><button class="btn"> Register</button></a> 
                <a href="/Home"><button class="btn">Login as Guest </button></a> 
                  
            </div>
        </div>

    )
}

export default Login