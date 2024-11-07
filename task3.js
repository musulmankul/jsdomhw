function showImage(img) {
    const enlargedImage = document.getElementById('largeImage');
    enlargedImage.src = img.src;
    document.getElementById('largeImageContainer').style.display = 'block';
}
