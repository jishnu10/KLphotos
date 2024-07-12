document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('image-container');
    const baseUrl = 'https://jishnu10.github.io/KLphotos/images/'; // Replace with your GitHub Pages URL

    // URL to the JSON file
    const jsonUrl = 'https://jishnu10.github.io/KLphotos/images.json'; // Replace with your GitHub Pages URL

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
            const errorMessage = document.createElement('p');
            errorMessage.textContent = `Error fetching images: ${error.message}`;
            imageContainer.appendChild(errorMessage);
        });
});
