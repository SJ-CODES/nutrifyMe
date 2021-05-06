
import { Component } from "react"
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