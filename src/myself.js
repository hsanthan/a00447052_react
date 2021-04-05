import React, { Component } from "react"
import mypic from './hema_fl.jpg'

class Myself extends Component {
    
    render() {
        return (
            <div className="myself-container">
                <img alt='My Pic' width="350" height="250" src={mypic} />   
             <h1>"Hi, I'm Hema"</h1>   
             <p> I have joined MScCDA at SMU to explore the opportunities in a data science. Hopefully I would one day become a successful data scientist in Healthcare Analytics.:)</p> 
        
            </div>
        )
    }
}

export default Myself;