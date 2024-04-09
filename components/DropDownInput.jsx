import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import searchIcon from "../src/assets/searchIcon.png";

function DropDownInput() {
  const optionTypes = ["All Type"];
  const optionNeighborhood = ["Neighborhood"];

  const defaultOptionType = optionTypes[0];
  const defaultOptionNeighborhood = optionNeighborhood[0];

  return (
    <div className="header-inputs">
      <Dropdown
        className="type"
        options={optionTypes}
        value={defaultOptionType}
        placeholder="Select an option"
      />
      <Dropdown
        className="neighbour"
        options={optionNeighborhood}
        value={defaultOptionNeighborhood}
        placeholder="Select an option"
      />
      <div className="search-icon-container">
        <img src={searchIcon} alt="search icon" />
      </div>
    </div>
  );
}

export default DropDownInput;
