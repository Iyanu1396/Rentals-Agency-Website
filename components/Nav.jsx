
import logo from "../src/assets/logo.png";

function Nav() {
  return (
    <nav>
      <div>
        <img className="logo" src={logo}></img>
      </div>
      <ul>
        <li>Home</li>
        <li>Lanlord</li>
        <li>Tenant</li>
        <li>Contact</li>
      </ul>
      <div className="divider"></div>
    </nav>
  );
}

export default Nav;
