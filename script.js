document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('image-container');
    const baseUrl = 'https://username.github.io/repository-name/images/'; // Replace with your GitHub Pages URL

    const images = [];
    for (let i = 1; i <= 24; i++) { // Adjust the range if you have more images
        images.push(`image${i}.jpg`); // Adjust the filename pattern if necessary
    }

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `${baseUrl}${image}`;
        imgElement.alt = image;
        imageContainer.appendChild(imgElement);
    });
});
