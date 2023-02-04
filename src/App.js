import './App.css';
import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import Images from './Components/Images/Images';

function App() {  

  
  const [images, setImages] = useState([])

  const pullData = (response) =>{
    setImages(response.data.results);
  }


  return (
    <>
      <div className="main">
        <Banner func = {pullData}/>
        <Images images={images}/>
      </div>
    
    </>
  );
}

export default App;
