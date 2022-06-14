// create array of images paths, further "images"
let images = ['./assets/1.jpeg', './assets/2.jpeg', './assets/3.jpeg', './assets/4.jpeg','./assets/5.jpeg',  './assets/6.jpeg'];
// create a global variable "currentImage" and assign to it 0
let currentImage = 0;
// select with document.querySelector element with class "image"
const image = document.querySelector(".image") //class aufruf with dot
// select with document.getElementById element with id "next-button" and element with id "prev-button"
const prevButton = document.getElementById("prev-button"); //# needed? weil id
const nextButton = document.getElementById("next-button");
// create function to go to next image:
goToNextImage = () => {
    if (currentImage === images.length - 1){
        currentImage = -1;
    }
    image.src = images[++currentImage]
}
goToPrevImage = () => {
    if (currentImage === 0){
        currentImage = images.length;
    }
    image.src = images[--currentImage]
}
// if statement: check if current image equals to "images" length - 1 and, if so, assign to "currentImage" value of -1
// set image src to the "images[++currentImage]"
// create function to go to prev image:
// if statement: check if current image equals to 0 and, if so, assign to "currentImage value" of length of "images"
// set image src to the "images[--currentImage]"
// add event listener to the next button for click event and to it the corresponding function
nextButton.addEventListener("click", goToNextImage)
// add event listener to the prev button for click event and to it the corresponding function
prevButton.addEventListener("click", goToPrevImage)















