import React from "react";
import Header from '../src/components/header/Header'
import Main from './components/Main/Main'

import './App.css'
import Footer from './components/Footer/Foter'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>

    )
  }
}

export default App;