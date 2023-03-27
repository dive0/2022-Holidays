import { useState, useEffect } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

import DataTable from "./Components/DataTable";
import SearchForm from "./Components/SearchForm";

function App() {
  const [list, setList] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchChoice, setSearchChoice] = useState("");

  useEffect(() => {
    const fetchAllHolidays = async () => {
      const res = await fetch(
        `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=US&year=2022`
      );
      const json = await res.json();
      setList(json.holidays);
    };
    fetchAllHolidays().catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>2022 Holidays</h1>

      <SearchForm
        setFilteredResult={setFilteredResult}
        setSearchDate={setSearchDate}
        setSearchChoice={setSearchChoice}
        list={list}
      />

        <DataTable
          searchDate={searchDate}
          searchChoice={searchChoice}
          filteredResult={filteredResult}
          list={list}
        />
    </div>
  );
}

export default App;
