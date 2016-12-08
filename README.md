# TWEB Labo 2 : Poll app

This repository contains the result of the second lab session for Antoine Drabble and Guillaume Serneels in the TWEB Course 2016-2017 at HEIG-VD. 

The project is aimed at developing and deploying an AngularJS 1 web application allowing users to participate in interactives polls. As they access the web app, users will be directed to our landing page from where they can create rooms and join Rooms. 
Inside a Room, every user can create questions and post comments. Thumb up and thumb down buttons provide the polling functionnality, allowing the user to upvote and downvote each question.

![Preview 1](preview1.png)

![Preview 2](preview2.png)

## Getting started

A preview version of our application is currently deployed on Heroku at the following URL:

https://tweb-interactive-polls.herokuapp.com/

To run the application locally, you must install the Node.js environment according to the following version requirements:

node version 5.9.1
npm version 1.4.x

The structure of this app has been generated using the AngularJS 1 application generator [angm](https://github.com/newaeonweb/generator-angm) version 0.0.1

You must also install MongoDB [MongoDB](https://docs.mongodb.com/getting-started/shell/installation/).

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

## Project structure

### branch gh-pages : Landing Page

The **gh-pages** branch of this repository contains the landing page of the poll web app.

The landing page is made available using GitHub Pages an can be accessed at the following URL:

https://gsern1.github.io/TWEB-Labo1-GithubExplorer/
[MongoDB](https://docs.mongodb.com/getting-started/shell/installation/
)

### branch master : Poll web application

The **master branch** of this repository contains the source code of the github explorer web app as deployed on [heroku](www.heroku.com).

To develop this project we have first created an [AngularJS](https://angularjs.org) application using the [angm](https://github.com/newaeonweb/generator-angm) generator. The application's navigation relies on the [UI-Router](https://github.com/angular-ui/ui-router) framework and the charts display is made possible by the [angular-chart.js](https://jtblin.github.io/angular-chart.js/) (based on [Chart.js](http://www.chartjs.org/)) module. 

The aplication's database has been created with [Mongoose](http://mongoosejs.com/).

This AngularJS application was then incorporated inside a simple Node.js app using Expess 4, Passport.js and deployed to heroku, along with the [mLab MongoDB](https://elements.heroku.com/addons/mongolab) module.

Here's the adress of the heroku deployement:

https://tweb-github-explorer.herokuapp.com/


### html template

The html template we're using is Alma Seed Studio from [adminlte](https://almsaeedstudio.com/).

## Poll web app features

### Feature 1 : Home page

...

### Feature 2 : Poll creation

...

### Feature 3 : Account management

...

### Feature 4 : Poll usage

...
