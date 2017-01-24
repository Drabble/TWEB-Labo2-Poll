# TWEB Labo 2 : Pollspeak - Interactive Poll application

This repository contains the result of the second lab session for Antoine Drabble and Guillaume Serneels in the TWEB Course 2016-2017 at HEIG-VD. 

The project is aimed at developing and deploying an AngularJS 1 web application allowing users to participate in **interactives polls**.

As they access our web app, users are directed to a landing page from where they can login, register and join Rooms. Only logged users can create rooms.
Inside a Room, users can create questions and post comments. Thumb up and thumb down buttons provide the polling functionnality, allowing the user to upvote and downvote each question.


## Getting started

Pollspeak is currently deployed on Heroku at the following URL:

https://tweb-interactive-polls.herokuapp.com/

To run this application preview locally, you must install the Node.js environment as well as the dependencies managers, npm and bower, according to the following version requirements:

node version 6.5.0

npm version 1.4.x

bower version 1.7.9

You must install [MongoDB](https://docs.mongodb.com/getting-started/shell/installation/) on your machine according to the following version requirements:

MongoDB version 3.4.0

You also need to set up two environement variables, the first one to point to your MongoDB instance, the second one is required as the secret used for generating the JWT (Json Web Token). This can be done:

For Mac/Linux users

```
export MONGODB_URI="mongodb://username:password@localhost:27017/poll"
export PASSPORT_SECRET="mySecretKeyPleaseChange"
```

For Windows users

```
set MONGODB_URI="mongodb://username:password@localhost:27017/poll"
set PASSPORT_SECRET="mySecretKeyPleaseChange"
```

From there you can clone this repo on your local machine and navigate to the root folder. Where you have to install grunt and the project dependencies (npm and bower):

```
npm install -g grunt
npm install
bower install
```

Finally you can start the project on localhost port 5000 with the following command:

```
grunt dev
```

## Poll web application

The **master branch** of this repository contains the source code of the Interactive Polls web app. It is currently deployed on [Heroku](www.heroku.com) and all the features are implemented (login, register, view your profile, create rooms, questions, comments, thumbs up and thumb down).

The structure of the front-end has been generated using the [AngularJS 1](https://angularjs.org) application generator [angm](https://github.com/newaeonweb/generator-angm) version 0.0.1. The application's navigation relies on the [UI-Router](https://github.com/angular-ui/ui-router) framework.

We used [NodeJS](https://nodejs.org/en/) 6.5.0, [Express.js](http://expressjs.com/) and [passport.js](http://passportjs.org/) for our REST backend.

We used [NPM](https://www.npmjs.com/) for the back-end dependencies and [Bower](https://bower.io/) for the front-end dependencies.

We use [Grunt](http://gruntjs.com/) for building the webapp. Only one task is defined for the moment: `grunt dev`. It allows dependency injection in the index.ejs file, less files compilation, live reload, uglify...

We use [Less](http://lesscss.org/) for the css.

The database has been modeled using [Mongoose](http://mongoosejs.com/) which is an ODM for MongoDB.

Our application is then deployed on Heroku, along with the [mLab MongoDB](https://elements.heroku.com/addons/mongolab) module.

We use [Socketio](http://socket.io/) for the room page. It allows you to see and update the rooms questions and comments in real time.

You can find most of the libraries/frameworks we used and their versions in the `bower.json` and `package.json` files. 

## Landing page

As they access Pollspeak, users are welcomed by the landing page of our application. From there, they don't need to register or login to join existing rooms and participate in poll creation and answering.

To join an existing room, the user can fill the **Join a room** text field, in the top left corner, with the id of the room and click on the appended button to join it. If no room name has been provided.

![Landing Page Preview](images/landing_page.png)

Users who want to create new rooms on the application need to create an account and login using the **Register** and **Login** buttons on the top right corner of the page.

The left part of the page displays a **Home** button and a **Help** button to access the help page. Once the user is logged in, two more contrals are displayed, a **My rooms** button and a **Create new room** button. He can click on the My rooms button to display a drop-down list with the different Rooms that he has already joined, each room has to be clicked in order to be displayed in the central part of the page. A click on the **Create new room** button redirects the user to the Room creation page.

![Landing Page Preview](images/landing_page_login.png)

## Features

### Feature 1 : Register and Login

Clicking on the **Register** and **Login** buttons, at the top right of the home page, redirects user to a form where they can fill their credentials in order to, respectively, create an account or log into their account. After a successfull, the user is redirected to his profile page.

![Preview Register](images/register.png)

![Preview Login](images/login.png)


### Feature 2 : Room creation

After clicking on the **Create new room** button, the Room creation page is displayed. It consits of a form allowing the user to fill in the room's name.

![Preview Room Creation](images/room_create.png)

### Feature 3 : Poll creation

Once the user has created a new Room or joined an existing Room, the Poll creation page is displayed. From there, the user has the opportunity of filling a form to ask a new question in the room.
The right part of the page shows every questions created in the Room so far.

![Preview Poll Creation](images/poll_create.png)

### Feature 4 : Poll usage

Inside a Room, each question is diplayed and users can comment, upvote or downvote each question using the appropriate buttons. As soon as the first Like/Dislike has been submitted, a pie chart appears under the question to show the proportion of Likes/Dislikes. 

![Preview Question](images/poll_usage.png)

### Feature 5 : Poll administration

When an user creates a room, he is the administrator of that room and is allowed to delete each question/comment by clicking on the red cross a the top left of it.

![Preview Question](images/admin.png)

### Feature 6 : User's profile page

As a logged in user, a click on the **Username** in the top right corner, displays two option: a **Sign Out** button, to log out of the application, and a **Profile** button which displays the detailed informations about the user's profile.

![Preview Account](images/profile.png)

### Feature 7 : Help Page

Inside the Main Navigation located on the left part of our display, right under the **Home** button, there is a **Help** button. Clicking on this button redirects the user to the Help page which is a guide explaining how every feature can be used through the visual interface.

![Preview Help](images/help.png)

### Feature 8 : Layout Customisation

By Clicking on the wheels on the top left corner it is possible to access the Layout customisation features of our application.

![Preview Help](images/custom.png)


## Automated testing

The **/specs** folder at the root of our repository contains automated tests to validate the behaviour of our api and socket.io.

These test are built using the javascript test framework for node.js **mocha** and the assertion library **chai**.

Here are the mocha and chai version requirements:

	mocha version 3.1.2
	chai version 3.5.0


To run the tests, you must go to the root of our repository and run:

```
npm test
```


## html template

The html template we're using is Alma Seed Studio from [adminlte](https://almsaeedstudio.com/) built on Bootstrap 3.


