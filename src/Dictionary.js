import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f9170000100000166eb4fc4197846fe9b4c676945b43b8d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary" >
        <section>
          <div className="LookUp">What word would you like to look up? 👀</div>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword} />
          </form>
          <div className="Hint">
            suggested words: Water, Yoga, Dog...
        </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
        <section>
          <a
            href="https://github.com/schtepfi/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >Open-source code</a>, by Stephanie Schlaepfer
        </section>
      </div >
    );
  } else {
    load()
    return "Loading...";
  }
}