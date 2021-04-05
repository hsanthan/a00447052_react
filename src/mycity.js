import React, { Component } from "react"
import pic from './vidhana_soudha.jpg'
import sunny from './sunny.png'
import rainy from './cold.png'
import mild from './mild.png'

const api_key = 'dd569aa69fdb9261ef1888fc94eae027'

class Mycity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: undefined,
            desc: undefined,           
            isShowCelsius: false,
            celtemp: undefined
          
        }          
        this.fetchData = this.fetchData.bind(this)
    }
  
    fetchData() {
        const lat = 12.97
        const longitude = 77.59
        const units = 'metric'
        const myurl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longitude}&units=${units}&appid=${api_key}`
       
        fetch(myurl)
        .then(response => {
                return response.json()
            })
            .then(message => {
                this.setState({                   
                    temp: message.main.temp, 
                    celtemp: message.main.temp,                   
                    desc: message.weather[0].main,
                })
                
            });
    }
    
    
    componentDidMount() {
        this.fetchData()  
    }
    
    tempconvert(){
        if (this.state.isShowCelsius){
            var cel = parseFloat((this.state.temp -32) * (5/9)).toFixed(1)
            this.setState({
                temp: cel , 
                isShowCelsius: false })
            }
            else{
                var far = parseFloat((this.state.temp * (9/5)) + 32).toFixed(1)
                this.setState({
                    temp: far , 
                    isShowCelsius: true
            })
        }
    }

    render() {
        return (
            <div className="mycity-container">
                <img alt='Bangalore' width="500" height="250" src={pic} />   
                <h1>"Bangalore, The Silicon Valley of India"</h1>   
                 <p> Bangalore is the capital and the largest city of the Indian state of Karnataka. It is widely regarded as the "Silicon Valley of India" (or "IT capital of India") 
                because of its role as the nation's leading information technology exporter. A demographically diverse city, Bangalore is the second fastest-growing major metropolis in India.</p> 
                 <p>The above image shows Vidhana Soudha, the largest legislative building in India. 
                It was constructed in Neo-Dravidian style in late 1950s and regarded as "Poetry in Stone".</p> 
        
                {/* <p><b >Weather Now   : </b>{this.state.desc} </p> */}
                <p><img alt='weather' width='70' height='50' position='absolute' 
                         src= {this.state.celtemp <= 10  ? rainy : 
                                (this.state.celtemp > 20 && this.state.celtemp < 30)  ? mild :
                                 sunny }/>{this.state.temp} {this.state.isShowCelsius ? <b>&deg;F</b> :
                                                                                        <b> &deg;C</b>} &nbsp;&nbsp;
                <button onClick={() => this.tempconvert() } >
                    {this.state.isShowCelsius ? "View in Celsuis" : "View in Farenheit"} 
                </button></p>

               
                

                
                   
            </div>
        )
    }
}

export default Mycity;