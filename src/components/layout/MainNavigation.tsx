import { Link } from "react-router-dom";

import "./MainNavigation.css";

export default function MainNavigation() {
  return (
    <header className="header">
      <div className="logo">React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="new-meetup">New meetup</Link>
          </li>
          <li>
            <Link to="favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
