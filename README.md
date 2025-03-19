# StarWars Ships - Angular Project

## Project Overview
This project is based on a technical test from a major e-commerce company looking for front-end developers. The goal is to create a web application that consumes data from the Star Wars API, displays it in a list, and shows detailed information about each item.

## Technologies Used
Knowledge that will help you complete this project:
- Angular 19
- HTML5
- CSS
- Tailwind CSS

## API Information
The application consumes data from the Star Wars API. Here are the relevant documentation and endpoints:

- API Documentation: https://swapi.dev/documentation
- API Testing Tool: https://swapi.dev/

## Features

### Starships List
This is the component for the main view, it displays the list of ships. The list only shows the most important information for each ship:
- Ship name
- Model
Clicking on a ship shows a mor detailed view

### Starship Details View
This component shows a more detailed view for each ship. Users should be able to access the details of each ship by clicking on them in the list.

### Infinite Scrolling
While on the starships list view, the user can keep scrolling down and the application will make an API call to load up more ships each time the scroll reaches the end of the screen untill all ships are loaded.

### Intro Screen
Welcome page that mimics the intros of the movies. Each time the user enters the page it will show a random text crawl from one of the 9 films. A button then appears to go to the starships list page. Route changes accordingly

### Login and Registration
Login and Registration screens.
- Users cannot register with the same email
- Once registered, the user appears logged in

### Login Protected Routes
The starships list is only visible to registered users.

When an unregistered user tries to get to the starships list view, they are redirected to the login page. Once they log in correctly, they are able to see that page.

### Pilots and Films
Two components that show detailed information on the ships' pilots and the movies the ship appears in.

## Installation and Setup
You can open the app by following this link:
```bash
https://s7-star-wars-flax.vercel.app
```
Or you can:

1. Clone the repository:

```bash
git clone https://github.com/oscarrep/S7-Star-Wars
```
2. Navigate to the project folder:
```bash
cd s6-budget-angular
```
3. Install dependencies:
```bash
npm install
```
4. Install Firebase and Tailwind CSS:
```bash
npm i @angular/fire
```
```bash
npm i tailwindcss @tailwindcss/postcss postcss --force
```
5. Start the development server:
```bash
ng serve -o
```
6. Open in browser:
```bash
http://localhost:4200
```
