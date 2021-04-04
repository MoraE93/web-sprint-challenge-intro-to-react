import React , { useState, useEffect }from 'react';
import './App.css';
import axios from'axios'
import Character from'./components/Character'



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("https://swapi.dev/api/people/")
    .then(res => {setData(res.data)})

 }
, ["https://swapi.dev/api/people/"]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  

   return (
     <div className="App">
       <h1 className="Header">Characters</h1>
       {data.map(ele => {
         return <Character data={ele}/>
       }
       )}

    </div>
  );
}

export default App;
