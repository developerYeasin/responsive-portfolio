import React from "react";
import Courosel from "../Components/Courosel";
import Header from "../Components/Header";
import "../StyleSheet/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url(./image/circle-scatter-haikei.svg)` }}
      >
        <div>
          <h1>SATHYA</h1>

          <div className="intro-content font-bold">
            <p>
              MERN Stack <br /> Developer , Instructor
            </p>
            <button className="primary-btn font-bold">Get Started</button>
          </div>
        </div>
      </div>
      <Courosel />

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5 java-intro-box">
              <h1>Yes you are right...</h1>
              <p>I am a Javascript Buff...</p>
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./image/jsbuff.svg"
                alt=""
                height="200"
                className="w-100"
              />
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 p-5 java-intro-para">
              <p>
                JavaScript is one of the most top-ranked programming languages
                because of its ubiquitous use on all platforms and mass
                adoption. Main Use Cases: Web Development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="devStack container n-box2 my-5 py-5">
        <div className="text-center">
          <h1 className="font-bold text-center">My Development Stack</h1>
          <img src="./image/developer.svg" alt="" height="200" width="200" />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="text-start my-dev-stack">
              <h3 className="font-bold">Front-End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Redux</p>
              <p>Angular</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center my-dev-stack">
              <h3 className="font-bold">UI/Styling</h3>
              <hr />
              <p>Tailwind CSS</p>
              <p>Bootstrap</p>
              <p>Material UI</p>
              <p>ANT Design</p>
              <p>Semantic UI</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-end my-dev-stack">
              <h3 className="font-bold">Backend</h3>
              <hr />
              <p>Node</p>
              <p>Express</p>
              <p>Php</p>
              <p>SQL DB</p>
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
