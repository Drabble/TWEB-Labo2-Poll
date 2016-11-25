angular.module('githubexplorer').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('public/app/modules/gefeature1/gefeature1.html',
    "<div class=\"container\" ng-init=\"getMostStarredRepos()\">\n" +
    "	<h1>Content from: gefeature1 page</h1>\n" +
    "	<p>List of the most starred repos : </p>\n" +
    "	<table class=\"table\">\n" +
    "		<thead>\n" +
    "			<th>Name</th>\n" +
    "			<th>Forks</th>\n" +
    "			<th>Stars</th>\n" +
    "		</thead>\n" +
    "		<tbody>\n" +
    "			<tr ng-hide=\"reposFound\"><th>No repos!</th><td></td><td></td></tr>\n" +
    "			<div ng-show=\"reposFound\">\n" +
    "				<tr ng-repeat=\"repo in most_starred_repos\">\n" +
    "					<td><a href=\"{{repo.html_url}}\" target=\"_blank\"> {{repo.name}} </a></td>\n" +
    "					<td>{{repo.forks}}</td>\n" +
    "					<td>{{repo.stargazers_count}}</td>\n" +
    "				</tr>\n" +
    "			</div>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "</div>\n"
  );


  $templateCache.put('public/app/modules/gefeature2/gefeature2.html',
    "<div class=\"container\" ng-init=\"getRepoData()\">\n" +
    "    <div>\n" +
    "		<h1>{{username}}</h1>\n" +
    "		<p>Number of commits by contributor in the repo {{repoName}}</p>\n" +
    "        <h3>Username<br/>\n" +
    "        <input ng-model=\"username\" ng-change=\"getRepoData()\"/></h3><br/>\n" +
    "        <h3>Repository name<br/>\n" +
    "        <input ng-model=\"repoName\" ng-change=\"getRepoData()\"/></h3><br/>\n" +
    "		<canvas id=\"pie\" class=\"chart chart-pie\" chart-data=\"numberOfCommits\" chart-labels=\"authors\"><br/>\n" +
    "	</div><br/><br/>\n" +
    "</canvas>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('public/app/modules/gefeature3/gefeature3.html',
    "<div class=\"container\" ng-init=\"getUserData()\">\n" +
    "	<div class=\"repolist clearfix\">\n" +
    "		<h1>{{username}}</h1>\n" +
    "		<p>List of repos for the user {{username}}</p>\n" +
    "        <h3>Username<br/>\n" +
    "        <input ng-model=\"username\" ng-change=\"getUserData()\"/></h3><br/>\n" +
    "\n" +
    "		<h1><p ng-hide=\"reposFound\">No repos!</p></h1>\n" +
    "	\n" +
    "		<div ng-show=\"reposFound\">\n" +
    "			<strong>Repos List:</strong><br/>\n" +
    "			<div ng-repeat=\"repo in repos\">\n" +
    "				<a href=\"{{repo.html_url}}\" target=\"_blank\"> {{repo.name}} </a><br/>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div><br/><br/>\n" +
    "</div>\n"
  );


  $templateCache.put('public/app/modules/home/home.html',
    "<div class=\"container\">\n" +
    "	<br>\n" +
    "	<div class=\"well text-center\">\n" +
    "		<h1>{{ vm.title }}</h1>\n" +
    "		<h3>{{ vm.version }}</h3>\n" +
    "		<p>This is a template for a simple home screen website. Use it as a starting point to create something more unique.</p>\n" +
    "		<code>app/modules/home/home.html</code>\n" +
    "		<hr>\n" +
    "    <h1>Features</h1>\n" +
    "		<ul class=\"list-group\">\n" +
    "			<li class=\"list-group-item\" ng-repeat=\"item in vm.listFeatures\">{{item.feature}}</li>\n" +
    "		</ul>\n" +
    "		<p><a href=\"http://www.github.com/newaeonweb/generator-angm\" class=\"btn btn-primary\" role=\"button\">Learn more »</a></p>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('public/app/modules/layouts/nav-bar/navbar-tpl.html',
    "<nav class=\"navbar navbar-inverse\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "				<span class=\"sr-only\">Toggle navigation</span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "			</button>\n" +
    "			<a class=\"navbar-brand\" href=\"/#!/\">{{ brand }}</a>\n" +
    "		</div>\n" +
    "		<div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "			<ul class=\"nav navbar-nav\">\n" +
    "				<li ng-repeat=\"item in menus\" ng-class=\"{active:isActive('#/' + item.link)}\">\n" +
    "					<a ui-sref=\"{{ item.link }}\">{{ item.name }}</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div><!--/.nav-collapse -->\n" +
    "	</div>\n" +
    "</nav>\n"
  );


  $templateCache.put('public/app/modules/layouts/nav-bar/navbar.html',
    "<div ng-controller=\"NavBarCtrl as vm\">\n" +
    "    <nav-bar menus=\"vm.menu\" brand=\"vm.title\"></nav-bar>\n" +
    "</div>\n"
  );

}]);
