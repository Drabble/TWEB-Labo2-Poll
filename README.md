# TWEB Labo 2 : Interactive Poll application

This repository contains the result of the second lab session for Antoine Drabble and Guillaume Serneels in the TWEB Course 2016-2017 at HEIG-VD. 

The project is aimed at developing and deploying an AngularJS 1 web application allowing users to participate in **interactives polls**.

As they access our web app, users are directed to a landing page from where they can login, register and join Rooms. Only logged users can create rooms.
Inside a Room, users can create questions and post comments. Thumb up and thumb down buttons provide the polling functionnality, allowing the user to upvote and downvote each question.


## Getting started

A preview version of our application is currently deployed on Heroku at the following URL:

https://tweb-interactive-polls.herokuapp.com/

To run this application preview locally, you must install the Node.js environment as well as the dependencies managers, npm and bower, according to the following version requirements:

node version 6.5.0
npm version 1.4.x
bower version 1.7.9

You must install [MongoDB](https://docs.mongodb.com/getting-started/shell/installation/) on your machine according to the following version requirements:

MongoDB version 3.4.0

You also need to set up two environement variables, the first one to point to your MongoDB instance, the second one is used as the secret used for generating the JWT (Json Web Token). This can be done:

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

The **master branch** of this repository contains the source code of the Interactive Polls web app. It is currently deployed on [Heroku](www.heroku.com) and you can already login, register, view your profile, create rooms, questions, comments, thumbs up and thumb down.

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

Our home page is the landing page of our application. From there, users can register, login and navigate to the Poll creation. The left part of the page displays, once the user is logged in, the different Rooms that the user has joined as well as a **Create new room** button. 

To join an existing room, the user can fill the **Join a room** text field, in the top left corner, with the name of the room and click on the appended button to join it. If no room name has been provided, a click on this button redirects the user to the Room creation section.

The page displays the current number of users, questions and temporary or persistent rooms created as well as a chart showing the amount of rooms created each month. Here is what it looks like in our current preview version.

![Landing Page Preview](images/preview1.png)

## Features

### Feature 1 : Register and Login

Clicking on the **Register** and **Login** buttons, at the top right of the home page, redirects user to a form where they can fill their credentials in order to, respectively, create an account or log into their account.

![Preview Register](images/preview_register.png)

![Preview Login](images/preview_login.png)


### Feature 2 : Room creation

After clicking on the **Create new room** button, the Room creation page is displayed. It consits of a form allowing the user to fill in the room's name along with a **Temporary** check box to determine if the room should be temporary or persistent.

![Preview Room Creation](images/preview_room_create.png)

### Feature 3 : Poll creation

Once the user has created a new Room or joined an existing Room, the Poll creation page is displayed. From there, the user has the opportunity of filling a form to ask a new question in the room.
The right part of the page shows every questions created in the Room so far.

![Preview Poll Creation](images/preview2.png)

### Feature 4 : Poll usage

Inside a Room, each question is diplayed and users can comment, upvote or downvote each question using the appropriate buttons.

![Preview Question](images/preview_question.png)

### Feature 5 : Account management

As a logged in user, a click on the **Username** in the top right corner, displays two option: a **Sign Out** button, to log out of the application, and a **Profile** button which displays the detailed informations about the user's account.

![Preview Account](images/preview_account.png)




### html template

The html template we're using is Alma Seed Studio from [adminlte](https://almsaeedstudio.com/) built on Bootstrap 3.


