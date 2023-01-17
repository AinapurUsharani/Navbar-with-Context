import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeDarkToLight = () => {
        toggleTheme()
      }

      const changeLightToDark = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <ul className="dark-container">
              <li className="link">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="dark-logo"
                />
              </li>
              <div className="home-about-dark-container">
                <Link to="/" className="special-link">
                  <li className="link1">Home</li>
                </Link>
                <Link to="/about" className="special-link">
                  <li className="link1">About</li>
                </Link>
              </div>
              <button
                type="button"
                onClick={changeDarkToLight}
                className="button"
                data-testid="theme"
              >
                <li className="link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="dark-symbol"
                  />
                </li>
              </button>
            </ul>
          ) : (
            <ul className="light-container">
              <li className="link">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="light-logo"
                />
              </li>
              <div className="home-about-light-container">
                <Link to="/" className="special-link">
                  <li className="link2">Home</li>
                </Link>
                <Link to="/about" className="special-link">
                  <li className="link2">About</li>
                </Link>
              </div>
              <button
                type="button"
                onClick={changeLightToDark}
                className="button"
                data-testid="theme"
              >
                <li className="link">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="light-symbol"
                  />
                </li>
              </button>
            </ul>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
