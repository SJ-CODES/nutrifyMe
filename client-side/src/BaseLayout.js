


function BaseLayout(props) {
    return(
        <div>
            <h1 id='title'>nutrifyMe</h1>
            {props.children}
        </div>
    )
}

export default BaseLayout