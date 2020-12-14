import { Switch, Route, Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <div className="l-container nav-wrapper">
        <a href="/" className="brand-logo">
          TalkMore App
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rate">Rates</Link>
          </li>
          <li>
            <Link to="/phone-plans">Phone Plans</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
