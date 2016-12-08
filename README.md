# TWEB Labo 2 : Interactive Poll application

This repository contains the progres of the second lab session for Antoine Drabble and Guillaume Serneels in the TWEB Course 2016-2017 at HEIG-VD. 

The project is aimed at developing and deploying an AngularJS 1 web application allowing users to participate in interactives polls. The application is currently under developement and the available version 1.0.0 consists of a preview.

As they access the release version of the web app, users will be directed to a landing page from where they can create and join Rooms. 
Inside a Room, every user can create questions and post comments. Thumb up and thumb down buttons provide the polling functionnality, allowing the user to upvote and downvote each question.


## Getting started

A preview version of our application is currently deployed on Heroku at the following URL:

https://tweb-interactive-polls.herokuapp.com/

To run this application preview locally, you must install the Node.js environment according to the following version requirements:

node version 5.9.1
npm version 1.4.x

You must also install [MongoDB](https://docs.mongodb.com/getting-started/shell/installation/).

And set up an environement variable to point to your MongoDB instance, this can be done:

For Mac/Linux users

```
export MONGOLAB_URI="mongodb://example:example@ds053312.mongolab.com:53312/database"
```

For Windows users

```
SET MONGOLAB_URI="mongodb://example:example@ds053312.mongolab.com:53312/database"
```

From there you can clone this repo on your local machine and navigate to the root folder. Where you have to install grunt and the project dependencies:

```
npm install -g grunt
npm install
```

Finally you can start the project on localhost port 5000 with the following command:

```
grunt dev
```

## Poll web application

The **master branch** of this repository contains the source code of the Interactive Polls web app. The current version 1.0.0, as deployed on [heroku](www.heroku.com), is a preview version, allowing the user to visualize the visual interfaces of the different features which will be implemented.

The structure of this app has been generated using the [AngularJS 1](https://angularjs.org) application generator [angm](https://github.com/newaeonweb/generator-angm)version 0.0.1. The application's navigation relies on the [UI-Router](https://github.com/angular-ui/ui-router) framework.

The database has been modeled using [Mongoose](http://mongoosejs.com/) above MongoDB.

Our application is then deployed to Heroku, along with the [mLab MongoDB](https://elements.heroku.com/addons/mongolab) module.

### Feature 1 : Home page

The landing page of our application is the Home Page where users can register, login and navigate to the Poll creation. The left part of the page, which is shared among every pages of our apllication, displays the different Rooms that the user has joined as well as a "Create new room button". 

To join an existing room, the user can click ont the top left "Join a room" button.

The page displays the current number of users, questions and temporary or persistent rooms created as well as a chart showing the amount of rooms created each month. Here is what it looks like in our current preview version.

![Preview 1](preview1.png)

### Feature 2 : Room creation

After clicking on the "Create new room button", the Room creation page is displayed. It consits of a form allowing the user to fill in the room's name along with a "Temporary" check box to determine if the room should be temporary or persistent.

![Preview Room Creation](preview_room_create.png)

### Feature 3 : Poll creation

Once the user has created a new Room or joined an existing Room, the Poll creation page is displayed. From there, the user has the opportunity of filling a form to ask a new question in the room.
The right part of the page shows every questions created in the Room so far. The user can comment, upvote or downvote each question using the appropriate button.

![Preview 2](preview2.png)

### Feature 4 : Account management

...

### Feature 5 : Poll usage

...

### html template

The html template we're using is Alma Seed Studio from [adminlte](https://almsaeedstudio.com/).

## Detailed information about the module's version used



...
