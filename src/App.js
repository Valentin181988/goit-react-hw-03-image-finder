import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { Searchbar } from './components/Searchbar';
class App extends Component {
  state = {
    pictureName: ''
  };

  handleFormSubmit = pictureName => {
    this.setState({pictureName})
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <Toaster />
      </div>
    );
  }
}

export default App;
