// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  // Create elements
  const headingContainer = document.querySelector(".header-container"),
    header = document.createElement("div"),
    date = document.createElement("span"),
    headingTitle = document.createElement("h1"),
    temperature = document.createElement("span");

  // Add Classes
  header.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  // Add Content
  date.textContent = "March 28, 2019";
  headingTitle.textContent = "Lambda Times";
  temperature.textContent = "98°";

  // Append Items
  headingContainer.appendChild(header);
  header.appendChild(date);
  header.appendChild(headingTitle);
  header.appendChild(temperature);

  return header;
}

Header();
