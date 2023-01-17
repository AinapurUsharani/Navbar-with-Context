import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="dark-home-image"
                />
                <h1 className="dark-home-heading">Home</h1>
              </div>
            </div>
          ) : (
            <div>
              <Navbar />
              <hr className="line" />
              <div className="light-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="light-home-image"
                />
                <h1 className="light-home-heading">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
