const HolidayInfo = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.observedDate}</td>
      <td>{props.weekday}</td>
      <td>{props.public ? "Yes" : "No"}</td>
    </tr>
  );
};

export default HolidayInfo;
