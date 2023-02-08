import React, { useEffect, useState } from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([])
  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/trending")
  }, [])
  
  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content">
        <GifList />
      </div>
    </div>
  );
}

export default App;
