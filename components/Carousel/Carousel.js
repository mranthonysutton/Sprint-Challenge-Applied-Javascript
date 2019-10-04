/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselComponent() {
  // Create Elements
  const carouselContainer = document.querySelector(".carousel-container"),
    carousel = document.createElement("div"),
    leftButton = document.createElement("div"),
    mountainImg = document.createElement("img"),
    computerImg = document.createElement("img"),
    treesImg = document.createElement("img"),
    turntableImg = document.createElement("img"),
    rightButton = document.createElement("div");

  // Add Classes
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  // Text Content
  leftButton.textContent = "<";
  rightButton.textContent = ">";
  mountainImg.src = "./assets/carousel/mountains.jpeg";
  computerImg.src = "./assets/carousel/computer.jpeg";
  treesImg.src = "./assets/carousel/trees.jpeg";
  turntableImg.src = "./assets/carousel/turntable.jpeg";

  // Img Styles
  mountainImg.style.display = "block";

  // Apend Items
  carouselContainer.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(mountainImg);
  carousel.appendChild(computerImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(turntableImg);
  carousel.appendChild(rightButton);

  return carousel;
}

carouselComponent();

let carouselImages = Array.from(document.querySelectorAll(".carousel img"));
let imageIndex = 0;
let leftArrow = document.querySelector(".left-button");
let rightArrow = document.querySelector(".right-button");

const slideLeft = () => {
  carouselImages[imageIndex].style.display = "none";

  // Check if the index is 0, and sets it to the last image in the array
  if (imageIndex === 0) {
    imageIndex = carouselImages.length - 1;
  } else {
    imageIndex--;
  }

  carouselImages[imageIndex].style.display = "inline";
};

const slideRight = () => {
  carouselImages[imageIndex].style.display = "none";

  // Check if the index is the last item in the array, and sets it to the first image in the array
  if (imageIndex === carouselImages.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }

  carouselImages[imageIndex].style.display = "inline";
};

leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);
