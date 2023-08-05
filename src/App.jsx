import { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("Search for Music!");

  const API_URL = "https://itunes.apple.com/search?term"; //TERM

  useEffect(() => {
    if (search) {
      //WRAPPING EFFECT IN IF STATEMENT PREVENTS CALLING API ON LOAD
      const fetchData = async () => {
        document.title = `${search} Music`;
        const response = await fetch(API_URL + search);
        const resData = await response.json();
        if (resData.results.length) {
          setData(resData.results);
        } else {
          setMessage("Not found!");
        }
      };
      fetchData();
    }
  }, [search]);

  //PASS FUNCTION DOWN TO SEARCHBAR. setSearch = state setter function
  const handleSearch = (e, term) => {
    e.preventDefault(); //PREVENTS FORM FROM REFRESHING PAGE AUTOMATICALLY. REFRESH COULD LOSE STATE VALUE
    setSearch(term);
  };

  //handleSearch PROP = handleSearch function
  //DATA SENT TO GALLERY
  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;
