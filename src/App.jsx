import { useState, useEffect } from "react";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchAllHolidays = async () => {
      const res = await fetch(`https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=US&year=2022`);
      const json = await res.json();
      setList(json);
    };
    fetchAllHolidays().catch(console.error);
  }, [])

  return (
    <div className="App">
      <h1>2022 Holidays</h1>

      <ul>
        {list && list.holidays.map((holiday) => {
          
        })}
      </ul>
      
    </div>
  )
}

export default App;
