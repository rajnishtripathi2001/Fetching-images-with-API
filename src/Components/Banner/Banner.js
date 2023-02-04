import {useState,React}  from 'react'
import axios from 'axios';
import "./Banner.css"

export default function Banner(props) {

  const [searchItem, setSearchItem] = useState("")

  const textOnChange=(event)=>{
      let searchTerm = event.target.value;
      setSearchItem(searchTerm);
  }
  const [result, setResult] = useState([])
  const searchImage= async (event)=>{ 
    await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchItem}&client_id=8vwTLM0pA4MN0XT3nHJCgULKmLUTZOFDFuhoww7RyZY`)
    .then((response)=>{
       setResult(response)  
    })
    props.func(result);
    event.preventDefault();
  }

  return (
    <div className='banner-container'>
      <div className='banner-header'> 
        <h1>Find Images</h1>
      </div> 
      <div className='input-set'>
        <input type="text" placeholder="Search Anything" onChange={textOnChange}/>
        <button className="submitBtn" onClick={searchImage}>Search</button>
      </div>

    </div>
  )
}
