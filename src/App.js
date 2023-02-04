import './App.css';
import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import Images from './Components/Images/Images';

function App() {  

  const [searchTerm, setSearchTerm] = useState('')

  const pullData = (data) =>{
    console.log(data);
    setSearchTerm(data);
  }

  

  return (
    <>
      <div className="main">
        
        <Banner func = {pullData}/>
        <Images/> 
        {searchTerm}  

      </div>
    
    </>
  );
}

export default App;
