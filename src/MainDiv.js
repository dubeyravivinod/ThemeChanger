import React from 'react'
import './mainDiv.css'
const MainDiv = ({lightTheme,darkTheme}) => {
    const spanStyle={
        color:(lightTheme==true)? "white":"black"
    }
  return (
    <>
    <div  className="maindiv">
        <div className="toogle">
        <h1 style={{color:(lightTheme==true)? "white":"black"}}>Overreacted</h1>
    <button style={{color:(lightTheme==false)? "white":"black"}}
     onClick={()=>{
    darkTheme(!lightTheme)
    // console.log(lightTheme);
}}>
    Toogle</button>
        </div>
  
  <div style={spanStyle}  className="containe">
            <div className="containe-child">
            <h2>The WET Codbase</h2>
            <span >Sunday 4th 2020 11min read</span>
            </div>
            <div className="containe-child">
            <h2>Goodby, clean code</h2>
            <span>Sunday 4th 2020 11min read</span>
            </div>
            <div className="containe-child">
            <h2>My Decade in Review</h2>
            <span>Saturday 11th 2018 5min read</span>
            </div>
            <div className="containe-child">
            <h2>What are the React Team</h2>
            <span>Thursday 4th 2015 5min</span>
            </div>
        </div>
    </div>

    </>
  )
}

export default MainDiv