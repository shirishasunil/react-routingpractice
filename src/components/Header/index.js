import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar-container">
    <div className="image-heading-container">
      <img
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-image"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="list-items">
      <li className="link-item">
        <Link to="/">Home</Link>
      </li>
      <li className="link-item">
        <Link to="/about">About</Link>
      </li>
      <li className="link-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)
export default Header
