# Rancid Tomatillos

## Overview
Rancid Tomatillos is a web app that retrieves API data and displays recent and upcoming movies for a user to browse through. 

Deployed Link - https://tomatillos.vercel.app/

## Project Goals
* Learn how to create a functional app with React 
* Create multipage functionality with Router
* Use Cypress for testing app functionality and user stories 
* Make network requests to API endpoints (GET and POST)
* Ensure app is responsive and accessible 
* Understand and create a controlled form with React 
* Proper error handling

## Technologies Used
1. React
2. React Router
3. JavaScript
4. WebPack
5. Cypress testing
6. HTML5
7. CSS3

## Functionality
Upon visiting the app the user will see a home page that displays the cover art for a list of movies. 
![main scroll](https://github.com/percworld/tomatillos/blob/main/img/mainScroll.gif)

The user can click on a movie and they will be taken to a new page showing all the details for the relevant movie. From this view the user can click either the 'HOME' button or the 'GO BACK' button to return to the main page. Additionally, the user can click the 'back arrow' on their browser to return to the home page. 

![details view](https://github.com/percworld/tomatillos/blob/main/img/detailsView.gif)

The user is given the option to filter movies by the title at the top of the app. Once the user types in a movie title and clicks submit the app will return all the movie titles with the key words the user typed in. 
![search bar](https://github.com/percworld/tomatillos/blob/main/img/searchBar.gif)

If the user types in a movie title that doesn't exist or they leave the input field blank then the app will display an error message encouraging the user to try again.

![error message](https://github.com/percworld/tomatillos/blob/main/img/errorMessage.gif)


## Responsiveness 
**DESKTOP** 
![desktop](https://github.com/percworld/tomatillos/blob/main/img/desktop.png)

**TABLET**
![tablet](https://github.com/percworld/tomatillos/blob/main/img/tablet.png)

**MOBILE**
![mobile](https://github.com/percworld/tomatillos/blob/main/img/mobile.png)

## Installation

```bash
git clone git@github.com:percworld/tomatillos.git
cd tomatillos
npm i
npm start
```

## Contributors 
* [Julia Iwinski ](https://github.com/jgiwinski)
* [Chuck Morris ](https://github.com/percworld)


"We set out to enjoy the experience of approaching react cautiously enough to have fun doing it and in doing so, garner strength in the fundamentals of component lifecycle, property, and state. Being new to React Router 5, this has been a big leap in our progression as product developers. Working to produce dynamic lifestyle-related rendering with components has been very eye-opening. We now know when state is necessary and how to efficiently work with prototypes of our properties. We also used Cypress testing and implemented fixtures to intercept requests. This is a huge win for stubbing potential response errors and for testing in the field without racking up fees on the job."
