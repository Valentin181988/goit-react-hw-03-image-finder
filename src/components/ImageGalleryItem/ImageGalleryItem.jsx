import { ImageGalleryItems } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({pictures, onClick}) => {
    return(
      <>
        {pictures.map(picture => {
          return(
              <ImageGalleryItems key={picture.id} onClick={() => onClick(picture)}>
                  <img src={picture.webformatURL} alt={picture.tag} />
              </ImageGalleryItems>
          );
        })}
      </>
      
    );
};

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array,
  onClick: PropTypes.func
};