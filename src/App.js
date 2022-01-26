import './App.css';
import Header from './components/Header/Header';
import axios from "axios";
import React, {useEffect, useState} from "react";


const hash =  "bd0722d5750b6362d5ba0212ca36726b"
//5fc40be1cc147ce1a86fb3ab1df836b1

function App() {

  const[items, setItems] = useState([]);
  const[isLoading, setLoading] = useState(true);

  useEffect(()=>{
    const fetch = async()=>{
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`);
      console.log(result.data);
      setItems(result.data);
      setLoading(false);
    }
    fetch();

  },[])
  return (
    <div className="container">
      <Header/>
     
 
    </div>
  );
}

export default App;
