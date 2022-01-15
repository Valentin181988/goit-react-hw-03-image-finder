import React, { Component } from "react";
import { Error } from './ImageError';
import { GalleryApi } from "../servises/Gallery-api";


export class ImageGallery extends Component {
    state = {
       pictures: null,
       error: null,
       status: 'Idle'
    };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pictureName;
        const nextName = this.props.pictureName;

        if (prevName !== this.props.nextName) {

            this.setState({status: 'pending',});

            GalleryApi(nextName)
            .then(pictures  => this.setState({ pictures, status: 'resolved' }))
            .catch(error => this.setState({ error, status: 'rejected' }))
        };    
    };

    render() {
        const { pictures, error, status } = this.state;

        if(status === 'Idle') {
            return <p>Please enter the picture name</p>
        };

        if(status === 'pending') {
            return <div>Loading ...</div>
        };

        if(status === 'rejected') {
            return <Error message={error.message}/>
        };

        if(status === 'resolved') {
            return(
              <ul>
                  {pictures.hits.map(picture => {
                        return(
                            <li key={picture.id}>
                                <img src={picture.webformatURL} alt={picture.tag} />
                            </li>
                        );
                    })
                    
                  }
              </ul>
            );
        }
    };
}