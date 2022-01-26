import './App.css';
import Header from './components/Header/Header';
import axios from "axios";
import React, {useEffect, useState} from "react";


//ec575a3d1776c24a1e477dba26a23004

function App() {

  const[items, setItems] = useState([]);
  const[isLoading, setLoading] = useState(true);

  useEffect(()=>{
    const fetch = async()=>{
      const result = await axios(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150`)
    }

  })
  return (
    <div className="container">
      <Header/>
     
 
    </div>
  );
}

export default App;
