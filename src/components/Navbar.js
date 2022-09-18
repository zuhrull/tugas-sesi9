import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar () {

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return(
    <ul>
      <li className={splitLocation[1] === "" ? "active" : ""}>
        <Link to="/">Posts</Link>
      </li>
      <li className={splitLocation[1] === "albums" ? "active" : ""}>
        <Link to="/albums">Albums</Link>
      </li>
    </ul>
  )
}

export default Navbar;