import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Contact = () => {
  const [letterClass, setLetters] = useState("text-animate");
  const refform = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_03q6x8j",
        "template_nwzzlyv",
        refform.current,
        "8S21rQ-lN-MzmjM76"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to sent the message, please try again!");
        }
      );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetters("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>There are some text</p>
          <div className="contact-form">
            <form ref={refform} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Yihui Tian
          <br />
          Portland, Oregon
          <br />
          <span>yihui2@pdx.edu</span>
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[45.5104887, -122.6850111]} zoom={10}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.5104887, -122.6850111]}>
              <Popup>Yihui study here, come over for a boba!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
