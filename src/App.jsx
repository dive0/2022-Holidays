import { useState, useEffect } from "react";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import HolidayInfo from "./Components/HolidayInfo";

function App() {
  const [list, setList] = useState([]);

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

      <table>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Observed Date</th>
          <th>Weekday</th>
          <th>Public</th>
        </tr>
        {list &&
          list.map((holiday) => (
            <HolidayInfo name={holiday.name} date={holiday.date} observedDate={holiday.observed} weekday={holiday.weekday.date.name} public={holiday.public}/>
          ))}
      </table>
    </div>
  );
}

export default App;
