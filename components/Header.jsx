import Nav from "./Nav";
import Map from "./Map";
import DropDownInput from "./DropDownInput";

function Header() {
  return (
    <header className="header ">
      <div className=" container">
        <Nav />
        <h1 className="header-text">
          The most affortable place to stay in the san franciso bay area
        </h1>
        <Map />
        <DropDownInput />
      </div>
    </header>
  );
}

export default Header;
