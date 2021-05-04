import React from 'react'
import {useState} from 'react'
import '/Users/summerjohnson/Desktop/nutrify-me/client-side/src/App.css'



function Profile() {

    const [userProfileEntry, setUserProfileEntry]    = useState({})

    const handleOnAdd = (e) => {
        setUserProfileEntry({
            ...userProfileEntry,
            [e.target.name]: e.target.value
        })
    }
    const handleUserProfileEntry = () => {
        fetch('http://localhost:8080/users/entry', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        ,
        body: JSON.stringify(userProfileEntry)
        }).then(result => result.json())
        .then(result => {
            if(result.success) {
                alert("Entry Added!")
            }else {
                alert("Error Try Again!")
            }
        }) 
    }
    return(
        <div>
             <div id='headerDisplay'>
                <h1>nutrifyMe</h1>
                <h3>My Profile</h3>
                <h3>Healthy Recipes</h3>
                <h3>Nutrition Help</h3>
                
            </div>
            
            <div id="profilePage">
                <div id="inputEntry">
                    <input type='text' onChange={handleOnAdd} placeholder="Enter Meal:Breakfast, Lunch, Dinner" name="meal" required/>
                    <input type='text' onChange={handleOnAdd} placeholder="Enter Meal Description" name="description" required />
                    <button onClick={handleUserProfileEntry}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Profile