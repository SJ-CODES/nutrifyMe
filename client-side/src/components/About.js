import {NavLink} from 'react-router-dom';
import React from 'react'
import '/Users/summerjohnson/Desktop/nutrify-me/client-side/src/App.css'


function About () {
    return(
        <div id="About">
            
            <div id='headerDisplay'>
                <h1 class='aboutNutrifyColor'>nutrifyMe</h1>
                
            </div>
            <div class="aboutContainer">
                <h1>About </h1>
                <p>
                    Welcome! <b>nutrifyMe</b> was created with the purpose of helping people create food diarys, access healthy recipes and search nutrition information.
                    All to help improve peoples nutritional awareness and help them meet their health goals! 
                </p>
                <a href="/register"><button class="btn"> Register Now</button></a>
            </div>
        </div>
    )
}

export default About