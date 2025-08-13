import React from "react";
import "./home.css";
import Navbar from "../../components/navbar";
import Image3 from "../../assets/half.jpg"; // left image
import Image2 from "../../assets/image.jpg"; // right image

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        {/* Left Image */}
        <div className="hero-side">
          <img src={Image3} alt="portrait left" className="side-img" />
        </div>

        {/* Center Content */}
        <div className="hero-content">
          <h3 className="intro">Hey, I’m Mustopha</h3>
          <h1 className="title">
            <span className="highlight">Front</span>end <br /> Developer
          </h1>
          <p className="description">
            We turn ideas into digital experiences that drive success. From responsive
            websites to dynamic platforms, we create what your brand deserves.
          </p>
          <div className="buttons">
            <button className="btn btn-black"><a href="./about">Contact</a></button>
            <button className="btn btn-grey">Services</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-side">
          <img src={Image2} alt="portrait right" className="side-img" />
        </div>
      </section>
    </>
  );
};

export default Home;
