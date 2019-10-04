// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function TabComponent(tabLink) {
  // Add Elements
  const tab = document.createElement("div"),
    tabContainer = document.querySelector(".tabs .topics");

  // Add Class
  tab.classList.add("tab");

  // Add Content
  tab.textContent = tabLink;

  // Append Item
  tabContainer.appendChild(tab);

  return tab;
}

const topicAxios = axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // console.log(response);
    topics = response.data.topics;

    topics.forEach(topic => {
      TabComponent(topic);
    });
  })
  .catch(error => {
    console.log(error);
  });
