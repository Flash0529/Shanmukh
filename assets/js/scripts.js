document.addEventListener('DOMContentLoaded', () => {
    const photoElements = document.querySelectorAll('.photo-grid img');

    const createImageViewer = (src, index) => {
        const viewer = document.createElement('div');
        viewer.classList.add('image-viewer');
        viewer.innerHTML = `
            <div class="overlay"></div>
            <img src="${src}" class="fullscreen-image">
            <button class="nav-button prev-button">⟵</button>
            <button class="nav-button next-button">⟶</button>
            <button class="close-button">✖</button>
        `;

        document.body.appendChild(viewer);

        const closeButton = viewer.querySelector('.close-button');
        const nextButton = viewer.querySelector('.next-button');
        const prevButton = viewer.querySelector('.prev-button');
        const images = Array.from(document.querySelectorAll('.photo-grid img'));

        const updateImage = (newIndex) => {
            const newSrc = images[newIndex].src;
            viewer.querySelector('.fullscreen-image').src = newSrc;
        };

        nextButton.addEventListener('click', () => {
            index = (index + 1) % images.length;
            updateImage(index);
        });

        prevButton.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            updateImage(index);
        });

        closeButton.addEventListener('click', () => {
            viewer.remove();
        });

        viewer.querySelector('.overlay').addEventListener('click', () => {
            viewer.remove();
        });
    };

    photoElements.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            createImageViewer(photo.src, index);
        });
    });
});
