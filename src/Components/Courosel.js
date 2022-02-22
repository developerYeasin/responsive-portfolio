import React from 'react';
import '../StyleSheet/Courosel.css';
import {FaAngular, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact} from 'react-icons/fa';

const Courosel = () => {
    return (
      <div>
        <div className="courosel-parent position-relative">
          <h1 className="position-absolute top-0 start-0 end-0 text-center pt-5 courosel-title">
            Technologes I use
          </h1>
          <div className="gallery">
            <span style={{ "--i": 1 }}>
              <FaReact color="cyan" />
            </span>
            <span style={{ "--i": 2 }}>
              <FaAngular color="red" />
            </span>
            <span style={{ "--i": 3 }}>
              <FaJava color="orange" />
            </span>
            <span style={{ "--i": 4 }}>
              <FaNodeJs color="green" />
            </span>
            <span style={{ "--i": 5 }}>
              <FaJsSquare color="yellow" />
            </span>
            <span style={{ "--i": 6 }}>
              <FaBootstrap color="blue" />
            </span>
            <span style={{ "--i": 7 }}>
              <FaHtml5 color="orange" />
            </span>
            <span style={{ "--i": 8 }}>
              <FaCss3 color="blue" />
            </span>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,64L17.1,85.3C34.3,107,69,149,103,170.7C137.1,192,171,192,206,165.3C240,139,274,85,309,96C342.9,107,377,181,411,213.3C445.7,245,480,235,514,218.7C548.6,203,583,181,617,144C651.4,107,686,53,720,58.7C754.3,64,789,128,823,165.3C857.1,203,891,213,926,181.3C960,149,994,75,1029,37.3C1062.9,0,1097,0,1131,48C1165.7,96,1200,192,1234,213.3C1268.6,235,1303,181,1337,160C1371.4,139,1406,149,1423,154.7L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
          ></path>
        </svg>
        
      </div>
    );
};

export default Courosel;