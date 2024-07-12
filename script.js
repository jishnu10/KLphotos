document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('image-container');
    const baseUrl = 'https://username.github.io/repository-name/images/'; // Replace with your GitHub Pages URL

    // URL to the JSON file
    const jsonUrl = 'https://username.github.io/repository-name/images.json'; // Replace with your GitHub Pages URL

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.images;
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `${baseUrl}${image}`;
                imgElement.alt = image;
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});
