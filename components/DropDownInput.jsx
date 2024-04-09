import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function DropDownInput() {
  const optionTypes = ["All Type"];
  const optionNeighborhood = ["Neighborhood"];

  const defaultOptionType = optionTypes[0];
  const defaultOptionNeighborhood = optionNeighborhood[0];
  return (
    <div>
      <Dropdown
        options={optionTypes}
        value={defaultOptionType}
        placeholder="Select an option"
      />
      <Dropdown
        options={optionNeighborhood}
        value={defaultOptionNeighborhood}
        placeholder="Select an option"
      />
    </div>
  );
}

export default DropDownInput;
