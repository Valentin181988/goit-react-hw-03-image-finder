import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    pictureName: '',
  };

  handleFormSubmit = pictureName => {
    this.setState({pictureName})
  };

  render() {
    return (
      <div>        
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery pictureName={this.state.pictureName}/>
        <Toaster />
      </div>
    );
  }
}

export default App;
