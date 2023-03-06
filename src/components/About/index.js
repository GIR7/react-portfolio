import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faDocker,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";
const About = () => {
  const [letterClass, setLetters] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetters("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>There is some text first paragraph</p>
          <p>here should be 2nd paragraph</p>
          <p>here should be 3nd paragraph</p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCloud} color="#fff" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#fff" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDocker} color="#5ed4f4" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
