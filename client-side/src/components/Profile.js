import React, { useEffect } from 'react'
import {useState} from 'react'
import '/Users/summerjohnson/Desktop/nutrify-me/client-side/src/App.css'
import {connect} from 'react-redux'
import { getUserDiaryEntry } from '../actions/action'
import DisplayEntry from "./DisplayEntry"


const timestamp = Date.now()
function Profile(props) {

    const [userProfileEntry, setUserProfileEntry]= useState({user_id:props.user_id})
    console.log(userProfileEntry)

    const HandleOnAdd = (e) => {
        setUserProfileEntry({
            ...userProfileEntry,
            [e.target.name]: e.target.value
        })
        
    }
    const HandleUserProfileEntry = () => {
        fetch(`http://localhost:8080/profiles/entry`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        ,
        body: JSON.stringify(userProfileEntry)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                alert("Entry Added!")
            }else {
                alert("Error Try Again!")
            }
        
        })
     }
    
  
            

    
    

    
     return(
            <div id="profilePage">
                <div id='headerDisplay'>
                    <h1 id='headerNutrifyMe'>nutrifyMe</h1>
                    <a href="/HealthyRecipes"><button class="btn">Healthy Recipes</button></a>
                    <a href="/NutritionHelp"><button class="btn"> Nutrition Help</button></a>
                    <a href="/login"><button class="btn"> Log out</button></a>
                    
                </div>
                
                <div>
                    <div class="inputEntry">
                        <input type='textbox' onChange={HandleOnAdd} placeholder="Enter: Breakfast, Lunch, Dinner" name="meal" required/>
                        <input type='textbox' onChange={HandleOnAdd} placeholder="Enter Meal Description" name="description" required />
                        <button onClick={HandleUserProfileEntry}>Add</button>
                        
                    </div>
                </div>
               
                <h2 class="foodDiaryTitle">Food Diary</h2>
                    <DisplayEntry /> 
                

            </div>
        )
        
  
    
}
    const mapStateToProps = (state) => {
        return {
            user_id: state.users.user_id
        }

}

export default connect(mapStateToProps)(Profile)
    