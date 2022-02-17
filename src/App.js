import React, { useState, useEffect } from "react";
import axios from 'axios';
import Items from "./Items";
import Photo from "./Photo";
import "./App.css";

function App() {
  const [data, setData] = useState(null)
  const [currentHdurl, setCurrentHdurl] = useState(null)
  const [error, setError] = useState(null)

  const openPhoto = hdurl => {
    setCurrentHdurl(hdurl)
  }

  const closePhoto = () => {
    setCurrentHdurl(null)
  }
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=L42Xqk3WgbNnupggmdDsHRXYtyU5Jf5sTFrlD0CO&date=2012-03-14`)
        .then(res => {
            setData(res.data);
        }).catch(err => setError(true))
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Welcome to Nasa's photo of the day!</h1>
      </header>
      { error && <h2>Deepest apologies. We can't seem to reach our server right now.</h2> }
      { data && <Items item={data} openPhoto={openPhoto} /> }
      { currentHdurl && <Photo photUrl={currentHdurl} close={closePhoto} /> }
      <footer>
        <h4>Contact Us!</h4>
      </footer>
    </div>
  );
}

export default App;
