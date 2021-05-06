import React, { useEffect } from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'



function Checkdelete () {
    const deleteDiaryEntry = () => {
        
        fetch(`http://localhost:8080/entry/4`,{
            method: 'DELETE',
            
        })
     }
    return(
        <div>
            < button class="deleteBTN" onClick = {() => deleteDiaryEntry()} >Delete</button>
        </div>
    )
}

export default Checkdelete