# TWEB Labo 2 : Poll app

This repository contains the result of the second lab session for Antoine Drabble and Guillaume Serneels in the TWEB Course 2016-2017 at HEIG-VD. 

The project is aimed at developing and deploying an AngularJS 1 web application for making polls. The users are first welcomed by a landing page hosted on github pages from where the users can access the web app.

## Get started

To setup the development environment, you must install Node.js, setup a MongoDB database or use the mongoDB docker image provided inside the repo.

You must clone the repo on your local machine and go to the folder.

From there you have to install grunt and the project dependencies:

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


### branch master : Poll web application

The **master branch** of this repository contains the source code of the github explorer web app as deployed on [heroku](www.heroku.com).

To develop this project we have first created an [AngularJS](https://angularjs.org) application using the [angm](https://github.com/newaeonweb/generator-angm) generator. The application's navigation relies on the [UI-Router](https://github.com/angular-ui/ui-router) framework and the charts display is made possible by the [angular-chart.js](https://jtblin.github.io/angular-chart.js/) (based on [Chart.js](http://www.chartjs.org/)) module. 

The aplication's database has been created with [Mongoose](http://mongoosejs.com/).

This AngularJS application was then incorporated inside a simple Node.js app using Expess 4, Passport.js and deployed to heroku, along with the [mLab MongoDB](https://elements.heroku.com/addons/mongolab) module.

Here's the adress of the heroku deployement:

https://tweb-github-explorer.herokuapp.com/


### html template

The html template we're using is Future Imperfect from [adminlte](https://almsaeedstudio.com/).

## GitHub Explorer features

### Feature 1 : most starred repos

List the most starred repositories on GitHub. The data is fetched when the server starts and is stored in the MongoDB database.

### Feature 2 : repository commiters

See every user who commited to the repository of your choice and the percentages of their contribution.

See an historic of every request which were executed on this feature

### Feature 3 : user's repositories

List all the repositories of the user of your choice
