# THE MOVIE SAGAS
## Description

This app is designed to allow users to select a movie from the database and access additional content pertaining to the selected movie. This additional content includes a description from the same database as the movie and a list of genres from a joined database.
## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Select a movie from the Movie List view to navigate to the Movie Details view,  
the details of the movie you selected will be displayed.
2. Click the 'back' button to navigate back to the Movie List view.
## Built With

HTML, CSS, JS, Node.js, Express, Axios, React, Redux, Redux Saga, Postgres, Sass 
