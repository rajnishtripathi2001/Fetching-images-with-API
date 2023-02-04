import {useState,React}  from 'react'
import "./Banner.css"

export default function Banner(props) {

  const [searchItem, setSearchItem] = useState("")

  const textOnChange=(event)=>{
      let searchTerm = event.target.value;
      //console.log(serchTerm)
      setSearchItem(searchTerm);
  }
   
  const searchImage=(event)=>{ 
    props.func(searchItem);
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
