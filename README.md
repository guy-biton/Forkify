# Forkify

A modern recipe search and bookmarking application built with
JavaScript, using the MVC architecture and the Forkify API. Users can
search for recipes, view detailed instructions, adjust servings, and
save favorites directly in their browser.

Live Demo:\
https://guy-forkify.netlify.app/

------------------------------------------------------------------------

## Features

### Recipe Search

Search for any ingredient or dish and instantly receive recipes fetched
from the Forkify API.

### Detailed Recipe View

View full cooking instructions, ingredients, cooking time, servings, and
publisher information.

### Servings Adjustment

Increase or decrease servings, and ingredient quantities update
automatically.

### Bookmark Recipes

Save your favorite recipes. Bookmarks persist using local storage.

### Upload Your Own Recipes

Add custom recipes through a built-in upload form. Submitted recipes
appear instantly and are stored via the API.

### Smooth UI Behavior

Includes loading states, error messages, and clear visual feedback for
every action.

------------------------------------------------------------------------

## Tech Stack

-   Vanilla JavaScript (ES6+)
-   MVC Architecture (Model--View--Controller)
-   Parcel Bundler
-   HTML5 and SCSS
-   Forkify API
-   Local Storage API
-   Netlify (deployment)

------------------------------------------------------------------------

## Project Structure

    forkify/
    │
    ├── src/
    │   ├── js/
    │   │   ├── model.js
    │   │   ├── controller.js
    │   │   ├── config.js
    │   │   ├── helpers.js
    │   │   ├── views/
    │   │   │   ├── recipeView.js
    │   │   │   ├── resultsView.js
    │   │   │   ├── bookmarksView.js
    │   │   │   ├── searchView.js
    │   │   │   └── paginationView.js
    │   ├── sass/
    │   └── index.html
    │
    └── package.json

------------------------------------------------------------------------

## How to Use

1.  Visit the live app:\
    https://guy-forkify.netlify.app/

2.  Enter an ingredient in the search bar (for example: chicken, pasta,
    salad).\

3.  Choose a recipe from the search results.\

4.  Adjust servings using the control buttons.\

5.  Bookmark your favorite recipes.\

6.  Upload your own recipe using the upload button.

------------------------------------------------------------------------

## Local Installation

If you want to run the project locally:

    git clone https://github.com/guy-biton/Forkify
    cd Forkify
    npm install
    npm start

Parcel will launch a development server with hot reloading.

------------------------------------------------------------------------

## API

This project uses the Forkify API provided in Jonas Schmedtmann's
JavaScript course.\
It supports:

-   Searching recipes\
-   Fetching recipe details\
-   Uploading new recipes

Your API key is managed inside the configuration file.

------------------------------------------------------------------------

## Status

The project is complete and fully deployed.\
Created as part of an advanced JavaScript learning journey, focusing on
architecture and real-world app structure.

------------------------------------------------------------------------

## Author

Created by Guy Biton\
GitHub: https://github.com/guy-biton\
Live Website: https://guy-forkify.netlify.app/
