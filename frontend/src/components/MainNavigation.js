import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const isActiveHandler = ({ isActive }) => (isActive ? classes.active : undefined);

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={isActiveHandler}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={isActiveHandler}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
