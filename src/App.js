import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/Pages/About'
import Disclaimer from './Components/Pages/Disclaimer'
import Credits from './Components/Pages/Credits'
import LatestPhotos from './Components/LatestPhotos'
import Photo from './Components/Photo'

class App extends Component {
  render() {
    return (
      <Router >
      <div>
        <Header />
          <div className="content-block">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Route exact path="/" render = {props =>(
                    <LatestPhotos />                 
                  )} />
                  <Route path="/about" component ={About} /> 
                  <Route path="/disclaimer" component ={Disclaimer} /> 
                  <Route path="/credits" component ={Credits} /> 
                  <Route path="/photo" component ={Photo} /> 
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App