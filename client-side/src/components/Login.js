import {NavLink} from 'react-router-dom';
import React from 'react'
import{useState} from 'react'
import '/Users/summerjohnson/Desktop/nutrify-me/client-side/src/App.css'
import {useHistory} from "react-router-dom"
import { withRouter } from 'react-router-dom'
import redux from 'react-redux'
import {connect} from 'react-redux'
import {login} from '../actions/action'
import axios from 'axios'



function Login(props) {
    //let history = useHistory
   // console.log(process.env.REACT_APP_SERVER_URL)
    const [userLogin, setUserLogin] = useState({})
   

    const handleOnAdd = (e) =>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    

    const handleUserLogin = async () => {
        let data = {
            username: userLogin.username,
            password: userLogin.password
        
            
        }
        // console.log(process.env.REACT_APP_SERVER_URL)
        // fetch(`${process.env.REACT_APP_SERVER_URL}/users/login`,{
        //     method: 'POST',
            
        //     body: JSON.stringify(data)
        //     }).then(response => response.json())
        //     .then(result => {
        //         console.log('login',result)
        //         if(result.user_id) {
        //             data.user_id = result.user_id
        //             // save the username and user_id in local storage 
        //             localStorage.setItem("username", data.username)
        //             localStorage.setItem("userId", data.user_id)
        //             let dataObject = {"username":data.username, "user_id":data.user_id}
        //             props.onLogin(dataObject)
        //             alert("Welcome back to nutrifyMe")
        //             props.history.push(`/profile/${result.user_id}`)
        //         }else {
        //             alert("No user found")
        //           props.history.push("/register")
        //         }
                
        
        // }).catch(error=>{
        //     console.log(error)

        // })
        try{
            let response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, data)
            //let test = await axios.get(`${process.env.REACT_APP_SERVER_URL}`)
            console.log("Response: ", response)


        }catch(err){
            console.log("Error :", err)
        }
        
          

    }
    

    const handleUserGuests = () => {
       props.history.push("/Home")
    }

    return (
        <div id='loginPage' >
            <h1 class='title'>nutrifyMe</h1>
            
            <div class='loginBox'>
                <h1>Login</h1>
                <div class="textbox">
                    {/* <i class="fas fa-user" ></i>    */}
                    <input  type="text" onChange={handleOnAdd} placeholder="Username" name='username' required/>
                </div>
                <div class="textbox">
                    {/* <i class="fas fa-lock" ></i> */}
                    <input  type="password" onChange={handleOnAdd} placeholder="Password" name='password'required/>
                </div>
                <button class="btn" onClick={handleUserLogin}>Login</button>
                <a href="/register"><button class="btn"> Register</button></a> 
                <a href="/about"><button class="btn" onClick={handleUserGuests}>Login as Guest </button></a> 
                  
            </div>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (dataObject) => dispatch(login(dataObject))
        


    }

}

export default connect(null, mapDispatchToProps)(withRouter(Login))