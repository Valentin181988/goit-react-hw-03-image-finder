import React, { Component } from "react";
import toast from 'react-hot-toast';
import { FcSearch } from "react-icons/fc";

import { SearchBar, 
    SearchForm, 
    SearchInput,
    SearchFormBtn,
    SearchFormBtnLabel } from './Searchbar.styled';

    const BgBtnimage = {uri: ("https://image.flaticon.com/icons/svg/149/149852.svg")};
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
            <SearchBar>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormBtn type="submit">
                       <FcSearch size={25}/>
                    </SearchFormBtn>

                    <SearchInput
                        type="text"
                        value={this.state.pictureName}
                        onChange={this.handleInputChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchBar>
            
        );
    };
}