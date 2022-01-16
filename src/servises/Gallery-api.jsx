export const GalleryApi = (name) => {
    return  fetch(`https://pixabay.com/api/?q=${name}&page=1&key=24403049-2d622057a7d1ef54c20b3a063&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
        
        if(response.ok) {
            return response.json();
            
        };

           throw new Error('An error has occured.')       

    }).then(data => {

        if(data.total === 0) {
            return Promise.reject(
                new Error(`There is no picture with name ${name}`),
                );
        };
        
        return data;
    }).catch(error => {
        return Promise.reject(
            new Error('An error has occured.')
        )
    })
}