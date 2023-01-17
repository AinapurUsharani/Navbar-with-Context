import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="dark-home-image"
                />
                <h1 className="dark-home-heading">Lost Your Way</h1>
                <p className="dark-home-paragraph">
                  We cannot seem to find the page you are looking for
                </p>
              </div>
            </div>
          ) : (
            <div>
              <Navbar />
              <hr className="line" />
              <div className="light-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="light-home-image"
                />
                <h1 className="light-home-heading">Lost Your Way</h1>
                <p className="light-home-paragraph">
                  We cannot seem to find the page you are looking for
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
