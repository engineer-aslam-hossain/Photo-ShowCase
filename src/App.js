import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
// import About from './Components/Pages/About'
import LatestPhotos from './Components/LatestPhotos'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="content-block">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>Latest Photos </h2>
                  <div className="row">
                      <LatestPhotos />

                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default App