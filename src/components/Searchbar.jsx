import React, { Component } from "react";
import toast from 'react-hot-toast';

export class Searchbar extends Component {
    state = {
        pictureName: ''
    };

    handleInputChange = event => {
        this.setState({pictureName: event.currentTarget.value.toLowerCase()})
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.pictureName.trim() === '') {
            return toast('Please enter a picture name!')
        };

        this.props.onSubmit(this.state.pictureName);
        this.setState({pictureName: ''})
    };

    render() {
        return(
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                    <span>Search</span>
                    </button>

                    <input
                    type="text"
                    value={this.state.pictureName}
                    onChange={this.handleInputChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    };
}