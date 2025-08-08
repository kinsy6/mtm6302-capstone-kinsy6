## Student Information

Name: Kinsy Nyahim Awassume 
Student Number: 041159991  
Project: Pokedex – A web app using the PokeAPI to display a gallery of Pokémon, view details, and mark them as caught.

Design Information

Layout: I designed it simple to make it easy to navigate across the devices using flexbox and grid principles

Color Palette: I used these colors through out my mockup #FFFFFF, #EC7148, #0F125D, #FFCB05 to stay in the pokedex context.

User Interaction: I used buttons, hover states and forms to help guide the users

# Capstone Project – Part 3: Pokedex Web App Prototype

## Overview
This project is a responsive web-based Pokedex prototype created as part of Capstone Project – Part 3. It allows users to view Pokémon, read their descriptions in a modal popup, and add/remove them from a personal "Caught" (Collections) list.

---

## Steps Taken to Create the Prototype

1. **Setup Git Workflow**
   - Created a new branch `part-3` from `part-2`
   - Initialized HTML, CSS, and JavaScript files

2. **Built HTML Structure**
   - Created a semantic structure using `<header>`, `<section>`, and `<div>`
   - Included a header with a logo, search bar, and a "Caught" link
   - Created a main Pokémon gallery and a hidden Collections section

3. **Designed Layout with CSS**
   - Used Flexbox and CSS Grid for responsive layouts
   - Styled cards, buttons, and modal popup to match the Figma design
   - Ensured responsiveness for mobile, tablet, and desktop screens

4. **Added Interactivity with JavaScript**
   - Clicking “View Details” opens a modal with the Pokémon's image and description
   - Clicking “Select” adds the Pokémon to the Collections page and updates the "Caught" count
   - Clicking “Remove” deletes Pokémon from the Collections list
   - “Add More” navigates back to the gallery
   - “Load More” dynamically adds 20 more Pokémon to the gallery

## Resources Used

- Pokémon images: [https://pokemondb.net](https://pokemondb.net)
- Fonts and layout inspiration: Figma mockup
- HTML/CSS/JS validation: W3C Validator tools

---

## Challenges Faced

- Ensuring that the modal worked dynamically across all Pokémon and that only valid data appeared
- Managing DOM updates when adding/removing Pokémon from the Collection list without refreshing the page
- Maintaining responsiveness and accessibility across different breakpoints


# Capstone Project – Part 4: Final Functional Pokedex Web App

1. Overview

This is the final functional version of the Pokedex web application built using HTML, CSS, and JavaScript. It allows users to view Pokémon, check their details, add them to a collection, and remove them all without page reloads.

2. Steps Taken

- Branched from `part-3` to create `part-4`
- Refactored HTML structure for simplicity and accessibility
- Converted all inline events to JavaScript `addEventListener` functions
- Managed state entirely in JavaScript with `const` and `let`
- Styled layout using CSS Grid and Flexbox
- Made layout fully responsive for mobile, tablet, and desktop


3. Challenges Faced

- Preventing page refresh while managing multiple UI states
- Updating the DOM dynamically with clean reusable functions
- Maintaining state (caught Pokémon) without a database or backend
- Ensuring accessibility and mobile responsiveness

---

4. Final Result

All functionality is done with one HTML, one CSS, and one JS file.  
No page refreshes occur.  
The code follows modern best practices (no `var`, no inline events, uses `fetch()`).


