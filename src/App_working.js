import './App.css';
import mypic from './vidhana_soudha.jpg'


function App() {
  return (
    <div className="App"> 
      <a href={"/About Me"}>About Me</a> 
      <br></br>
      <img alt='Bangalore' width="500" height="250" src={mypic} />   
      <h1>"Bangalore, The Silicon Valley of India"</h1>   
      <p> Bangalore is the capital and the largest city of the Indian state of Karnataka. It is widely regarded as the "Silicon Valley of India" (or "IT capital of India") 
          because of its role as the nation's leading information technology exporter. A demographically diverse city, Bangalore is the second fastest-growing major metropolis in India.</p> 
      <p>The above image shows Vidhana Soudha, the largest Legislative building in India. 
            It was constructed in Neo-Dravidian style in late 1950s and regarded as "Poetry in Stone".</p>  
    </div>
  );
}
export default App;