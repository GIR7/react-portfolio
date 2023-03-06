import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import Lettery from "../../assets/images/lettery.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Logo from "./logo";
const Home = () => {
  const [letterClass, setLetters] = useState("text-animate");
  const nameArr = ["i", "h", "u", "i"];
  const jobArr = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetters("text-animate-hover");
  //   }, 4000);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetters("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={Lettery} alt="letter Y" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArr}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArr}
              idx={19}
            />
          </h1>
          <h2>Cloud based apps / Web apps / Cloud security</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Home;
