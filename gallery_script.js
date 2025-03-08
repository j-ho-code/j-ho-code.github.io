const imageGallery = [
    "https://cdn.pixabay.com/photo/2015/11/01/19/47/minecraft-1017471_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/03/02/12/11/minecraft-655908_1280.png",
    "https://cdn.pixabay.com/photo/2015/05/19/16/16/minecraft-773807_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/08/08/10/48/minecraft-1578075_1280.png",
    "https://cdn.pixabay.com/photo/2016/08/30/07/52/minecraft-1629979_1280.png"
]

const imageElement = document.getElementById("gallaery-image");
const prevButton = document.getElementById("priv-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;