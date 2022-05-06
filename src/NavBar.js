import { NavLink, Link } from "react-router-dom";

/** Renders NavBar
 *
 * Props: currentUser, logout()
 *
 * Handles display based on currentUser state.
 */
function NavBar({currentUser, logout}) {

  const name = currentUser ? currentUser.username : "";
  const style = {fontWeight:"bold", color:"black"}
  const loggedInLinks =
    <div>
      <span>
          <NavLink style={({ isActive }) =>
              isActive ? style : undefined
            } to="/companies">Companies</NavLink>
          <NavLink style={({ isActive }) =>
              isActive ? style : undefined
            }to="/jobs">Jobs</NavLink>
          <NavLink style={({ isActive }) =>
              isActive ? style : undefined
            }to="/profile">Profile</NavLink>
          <NavLink style={({ isActive }) =>
              isActive ? style : undefined
            }to="/" onClick={logout}>{name} Logout</NavLink>
      </span>
    </div>

  const loggedOutLinks =
    <span>
      <NavLink style={({ isActive }) =>
              isActive ? style : undefined
            } to="/login">Login</NavLink>
      <NavLink style={({ isActive }) =>
              isActive ? style : undefined
            } to="/signup">Signup</NavLink>
    </span>

  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink style={({ isActive }) =>
              isActive ? style : undefined
            } to="/" className="homeLink">Jobly</NavLink>
      <span className="float-end">
        {currentUser ? loggedInLinks : loggedOutLinks}
      </span>
    </nav>
  );
}

export default NavBar;