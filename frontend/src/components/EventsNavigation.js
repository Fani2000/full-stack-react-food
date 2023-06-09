import { NavLink } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  const isActiveHandler = ({ isActive }) =>
    isActive ? classes.active : undefined;
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={isActiveHandler}>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={isActiveHandler}>
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
