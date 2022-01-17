import { ImageGalleryItems } from "./ImageGalleryItem.styled";

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