# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

- _The DOM stands for Document Object Model. The DOM is an object representation of the HTML elements that are on the page. Also, it can be considered to be an Application Programming Interface (API). By using the DOM, we are able to add content, delete, and update / change content that appears on the page without changing the actual HTML in the file._

2. What is an event?

- _An event is something that happens to HTML elements. For example, a button was clicked, or the browser was resized is considered an event. We use events to watch for certain behaviors then we do something based upon that behavior._

3. What is an event listener?

- _While an event is something that happens to the HTML elements, the event listener is a method that you pass it to wait for that specific behavior. For example, when you 'click' on a button, you may console log something. When we 'resize' the window, we might want to change the background color._

4. Why would we convert a NodeList into an Array?

- _We would want to convert a NodeList into an array so we can use the array methods like .map() or .filter. With a NodeList, the only array method we can use is .forEach(). If we convert the NodeList to an array it will essentially behave the same, but extend is functionality. We can convert the NodeArray to an array using Array.from()._

5. What is a component?

- _A component is a singular, modular piece of code that is re-usable that will normally contain HTML, CSS, and JavaScript. We use components to help us rewrite code and not have to repeat ourselves. Also, components are stand alone which means they can also run apart from depending on other blocks of code._

### Git Set up

- [x] Fork the project into your GitHub user account
- [x] Clone the forked project into a directory on your machine
- [x] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
- [x] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

- [ ] Following the instructions in the `Header/index.js` file, create the Header component.

- [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

- [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

- [ ] Complete the carousel functionality in `Carousel.js`

- [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

- [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

- [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
