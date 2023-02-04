import {React, useState} from 'react'
import "./Images.css"

export default function Images(props) {

  const result = props.images;

  console.log(result);

  return (
      <div className="grid-container">
        
        {result.map((value)=>{
          return(
            <img className="grid-item" src={value.urls.small} alt="tent" />
          )
        })}
        
      </div>
  )
}
