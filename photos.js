const photos = [];

for (let i = 1; i <= 49; i++) {
  photos.push({
    id: i,
    photo: `./assets/${i}.jpg`,
  });
}

function renderPhotoGallery() {
  const galleryElement = document.getElementById("photoGallery");

  photos.forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.src = photo.photo;
    imgElement.alt = `Photo ${photo.id}`;

    galleryElement.appendChild(imgElement);
  });
}

renderPhotoGallery();
