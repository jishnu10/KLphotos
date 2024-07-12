document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('image-container');
    const baseUrl = 'https://jishnu10.github.io/KLphotos/images/';
    const jsonUrl = 'https://jishnu10.github.io/KLphotos/images.json';

    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const images = data.images;
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `${baseUrl}${image}`;
                imgElement.alt = image;
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
});
