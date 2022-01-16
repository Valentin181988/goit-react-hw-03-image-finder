import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';

import './App.css';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
import { Modal } from './components/Modal/Modal';
class App extends Component {
  state = {
    pictureName: '',
    showModal: false,
  };

  handleFormSubmit = pictureName => {
    this.setState({pictureName})
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button onClick={this.toggleModal}>Close</button>
          </Modal>
        )}
        
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery pictureName={this.state.pictureName}/>
        <Toaster />
      </div>
    );
  }
}

export default App;
