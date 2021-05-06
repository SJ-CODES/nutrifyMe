
import { Component } from "react"
import Checkdelete from "./components/checkdelete"
import Footer from './components/Footer'

function BaseLayout(props) {
    return(
        <div>
             
             {props.children}
             {/* <Footer /> */}
            
        </div>
    )
}

export default BaseLayout