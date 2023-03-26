import HolidayInfo from "./HolidayInfo";
const DataTable = (props) => {
  return (
    <div>
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
        {props.searchDate !== "" || props.searchChoice !== ""
          ? props.filteredResult &&
            props.filteredResult.map((holiday) => (
              <HolidayInfo
                name={holiday.name}
                date={holiday.date}
                observedDate={holiday.observed}
                weekday={holiday.weekday.date.name}
                public={holiday.public}
                key={holiday.name}
              />
            ))
          : props.list &&
            props.list.map((holiday) => (
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
  )
}

export default DataTable