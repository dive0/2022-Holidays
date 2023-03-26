import { useState, useEffect } from "react";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import HolidayInfo from "./Components/HolidayInfo";

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

  const searchItems = (e) => {
    const searchDateValue = document.getElementById("date").value;
    const searchChoiceValue = document.getElementById("choice").value;
    setSearchDate(searchDateValue);
    setSearchChoice(searchChoiceValue);
    if (searchDateValue !== "" || searchChoiceValue !== "") {
      const filteredData = list.filter((item) => {
        if (
          item.weekday.date.name.includes(searchChoiceValue) &&
          item.date.includes(searchDateValue)
        ) {
          return item;
        } else if (
          searchDateValue === "" &&
          item.weekday.date.name.includes(searchChoiceValue)
        ) {
          return item.weekday.date.name.includes(searchChoiceValue);
        } else if (
          searchChoiceValue === "" &&
          item.date.includes(searchDateValue)
        ) {
          return item.date.includes(searchDateValue);
        }
      });
      setFilteredResult(filteredData);
    } else {
      setFilteredResult(list);
    }
  };

  return (
    <div className="App">
      <h1>2022 Holidays</h1>

      <form>
        <input
          type="date"
          min="2022-01-01"
          max="2022-12-31"
          id="date"
          name="date"
        />
        <select name="weekday" id="choice">
          <option value="">Select</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <button type="button" onClick={searchItems}>
          Submit
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Observed Date</th>
            <th>Weekday</th>
            <th>Public</th>
          </tr>
        </thead>
        {searchDate !== "" || searchChoice !== ""
          ? filteredResult &&
            filteredResult.map((holiday) => (
              <HolidayInfo
                name={holiday.name}
                date={holiday.date}
                observedDate={holiday.observed}
                weekday={holiday.weekday.date.name}
                public={holiday.public}
                key={holiday.name}
              />
            ))
          : list &&
            list.map((holiday) => (
              <HolidayInfo
                name={holiday.name}
                date={holiday.date}
                observedDate={holiday.observed}
                weekday={holiday.weekday.date.name}
                public={holiday.public}
                key={holiday.name}
              />
            ))}
      </table>
    </div>
  );
}

export default App;
