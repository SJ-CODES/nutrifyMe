import {NavLink} from 'react-router-dom';
import React from 'react'
import{useState} from 'react'
import '/Users/summerjohnson/Desktop/nutrify-me/client-side/src/App.css'
import {useHistory} from "react-router-dom"

function Header () {
    return(
        <div>
            <div id='headerDisplay'>
                <h1 id='title'>nutrifyMe</h1>
                <h1>My Profile</h1>
                <h1>Healthy Recipes</h1>
                <h1>Nutrition Help</h1>
                
            </div>
        </div>
    )
}

export default Header