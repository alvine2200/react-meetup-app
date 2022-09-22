import { Link } from "react-router-dom";
import classes from './Navigation.module.css';

function MainNavigation() {
  return (
    <header classNam={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
