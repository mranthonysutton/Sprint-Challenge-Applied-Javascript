// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(item) {
  // Create Elements
  const cardContainer = document.querySelector(".cards-container"),
    card = document.createElement("div"),
    headline = document.createElement("div"),
    authorContainer = document.createElement("div"),
    imageContainer = document.createElement("div"),
    cardImage = document.createElement("img"),
    authorName = document.createElement("span");

  // Add Classes
  card.classList.add("card");
  headline.classList.add("headline");
  authorContainer.classList.add("author");
  imageContainer.classList.add("img-container");

  // Text Content
  headline.textContent = item.headline;
  cardImage.src = item.authorPhoto;
  authorName.textContent = item.authorName;

  // Append Items
  cardContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imageContainer);
  imageContainer.appendChild(cardImage);
  authorContainer.appendChild(authorName);

  return card;
}

const articleAxios = axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // Convert the object key into an array of value pairs
    const keys = Object.values(response.data.articles);

    // Providing an array of single key values
    keys.forEach(key => {
      // Loops through each article in the array, and obtains it's data attributes
      key.forEach(article => {
        createCard(article);
      });
    });
  })
  .catch(error => {
    return error;
  });
