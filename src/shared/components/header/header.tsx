import { Link } from "react-router-dom";

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
        </ul>
      </div>
    </nav>
  );
}
