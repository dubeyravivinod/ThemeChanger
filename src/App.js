import './App.css';
import React,{useState} from 'react'
import MainDiv from './MainDiv';

function App() {
  const[lightTheme, darkTheme]=useState(false);
  return (

    <div style={{background:(lightTheme==false)? "white":"black"}} className="App">
     
      <MainDiv lightTheme={lightTheme} darkTheme={darkTheme}

 />
    </div>
  );
}

export default App;