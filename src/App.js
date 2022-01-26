import './App.css';
import Header from './components/Header/Header';
import axios from "axios";
import React, {useEffect, useState} from "react";
import CharacterTable from './components/CharacterTable/CharacterTable';
import Search from './components/Search/Search';


const hash =  "bd0722d5750b6362d5ba0212ca36726b"
//5fc40be1cc147ce1a86fb3ab1df836b1

function App() {

  const[items, setItems] = useState([]);
  const[isLoading, setLoading] = useState(true);
  const [query,setQuery] = useState('')

  useEffect(()=>{

      const fetch = async()=>{
        if(query===''){
          // checking if favorites array is empty or does not exist
          if(localStorage.getItem('favorites')==='[]' || !localStorage.getItem('favorites')){
            localStorage.setItem('favorites', '[]')
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`)
            console.log(result.data.data.results)
            setItems(result.data.data.results)
            setLoading(false) 
          }else{
            let favorite = JSON.parse(localStorage.getItem('favorites'))
            setItems(favorite)
            setLoading(false)
          }
          
          
        }else{
      
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
    }
      }
    fetch()
  },[query])


  return (
    <div className="container">
      <Header />
      <Search  search= {(q)=>setQuery(q)}/>
      <CharacterTable items= {items} isLoading={isLoading}/>
     
 
    </div>
  );
}

export default App;
