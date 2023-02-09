import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    axios
      .get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=zH1fd1S5RPAAGv4Z4vA4qHL45kEicv3C&limit=25&rating=g`)
      .then(response => {
        // handle success
        setGifs(response.data.data)
      })
      .catch(error =>  {
        // handle error
        console.log("Error fetching and Parsing Data",error);
      });
    
  }, [query]);
const handleQueryChange = (searchText) => {
  setQuery(searchText)
}
  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery={handleQueryChange}/>
        </div>
      </div>
      <div className="main-content">
        <GifList data={gifs}/>
      </div>
    </div>
  );
}

export default App;
