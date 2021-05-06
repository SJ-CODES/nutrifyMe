
import React, { useEffect } from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'




function DisplayEntry (props) {

    const [userDiaryEntrys, setUserDiaryEntrys]= useState([])
   

    useEffect(() => {
        getUserDiaryEntry()
    }, [])
    const getUserDiaryEntry = () => {
        fetch(`http://localhost:8080/profiles/entry/${props.user_id}`)
            .then(response => response.json())
            .then(result => {
                console.log("result",result)
                console.log(result.diaryentrys)
                setUserDiaryEntrys(result.diaryentrys)
            })
    }

    const deleteDiaryEntry = (diaryentry_id) => {
        console.log(userDiaryEntrys)
        //let diaryentryid = userDiaryEntrys[0].diaryentry_id
        
        console.log('diaryentry_id', diaryentry_id )
        
        fetch(`http://localhost:8080/profiles/entry/${diaryentry_id}`,{
            method: 'DELETE'
        }).then(response => response.json())
        .then(result => {
            if(result.success) {

                alert("Entry Deleted!")
            }else {
                alert("Error Try Again!")
            }
        
    })
}
//     const updateDiaryEntry = (diaryentry_id) => {
//         console.log(userDiaryEntrys)
//         //let diaryentryid = userDiaryEntrys[0].diaryentry_id
        
//         console.log('diaryentry_id', diaryentry_id )
        
//         fetch(`http://localhost:8080/profile/entryupdate/${diaryentry_id}`,{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(diaryentry_id)
//         }).then(result => result.json())
//         .then(result => {
//             if(result.success) {
//                 alert("Entry Updated!")
//             }else {
//                 alert("Error Try Again!")
//             }
        
//     })
// }
    const entryItems = userDiaryEntrys.map((entrys) => {
        return (
            <div >
                <div key = {entrys.diaryentry_id}>
                    <li class="displayDiaryEntrys" > 
                        
                        <label>{entrys.date_created}</label>
                        <label>{entrys.meal}</label>
                        <label>{entrys.description}</label>
                       <button class="deleteBTN" onClick = {() => deleteDiaryEntry(entrys.diaryentry_id)} >Delete</button>
                       {/* <button class="deleteBTN" onClick = {() => updateDiaryEntry(entrys.diaryentry_id)} >Delete</button> */}
                        
                    </li>
                </div>
               
            </div>
                
            
        )})
              

    
    
   return(
       <div>
           {entryItems}
       </div>
   )
   
    
}
const mapStateToProps = (state) => {
    return {
        user_id: state.users.user_id
    }
}


export default connect(mapStateToProps)(DisplayEntry)