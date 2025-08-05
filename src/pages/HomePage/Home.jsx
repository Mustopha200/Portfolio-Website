import React from 'react'
import './home.css'
import Navbar from "../../components/navbar"
import Image3 from "../../assets/half.jpg"
import Image2 from "../../assets/image.jpg"




const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div className="home-left">
        <h3 className="intro">Hey, I am Mustopha</h3>
        <h1 className="title">
          <span className="highlight">Front</span>end<br />Developer
        </h1>
        <div className="description">
        <p>We turn ideas into digital experiences that drive success.
        </p>
        <p>From responsive websites to dynamic platforms, we create</p>
        <p>what your brand deserves. Reach out to us today</p>
        </div>  
        <div className="buttons">
          <button className="btn-black">Contact</button>
          <button className="btn-grey">My Resume</button>
        </div>
      </div>  
      <div className="home-right">
        <img src= {Image3} className='img2'/>
        <img src= {Image2}  className="img"/>  
      </div>
    </div>
    </>
  )
}

export default Home