import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <div>
              <Navbar />
              <hr className="line" />
              <div className="dark-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="dark-home-image"
                />
                <h1 className="dark-home-heading">About</h1>
              </div>
            </div>
          ) : (
            <div>
              <Navbar />
              <hr className="line" />
              <div className="light-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="light-home-image"
                />
                <h1 className="light-home-heading">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
