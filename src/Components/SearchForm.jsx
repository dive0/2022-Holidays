const SearchForm = (props) => {
  const searchItems = () => {
    const searchDateValue = document.getElementById("date").value;
    const searchChoiceValue = document.getElementById("choice").value;
    props.setSearchDate(searchDateValue);
    props.setSearchChoice(searchChoiceValue);
    if (searchDateValue !== "" || searchChoiceValue !== "") {
      const filteredData = props.list.filter((item) => {
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
      props.setFilteredResult(filteredData);
    } else {
      props.setFilteredResult(props.list);
    }
  };
  
  return (
    <div>
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
    </div>
  )
}

export default SearchForm