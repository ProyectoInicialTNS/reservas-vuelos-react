//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Headers
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

class App extends Component {

  static propTypes =  {
    children : PropTypes.object.isRequired
  }
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header/>
        <Content body = {children}/>
        <Footer copyright='&copy;TNS 2018' />
      </div>
    );
  }
}

export default App;
