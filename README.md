How to Run This Project Locally?

Prerequisites:
Git: Used to clone the project repository.
Download and install Git here: https://git-scm.com/downloads

XAMPP: A local web server package that includes Apache (web server) and MySQL (database server), used to run your WordPress + WooCommerce backend locally.
Download and install XAMPP here: https://www.apachefriends.org/index.html

Node.js(v22) and npm (v10.9): Required to run Angular commands and install dependencies.
Download and install Node.js here: https://nodejs.org/

Angular CLI(v16.2.16): Command line interface for Angular projects.
Install globally by running this command in your terminal or command prompt and run npm install -g @angular/cli@16.2.16

Steps to Run:
1- Set up backend server (WooCommerce API):

Open XAMPP and start Apache and MySQL modules.

Install WordPress and WooCommerce on your local server (usually under htdocs).

Make sure WooCommerce REST API keys are created and configured.

2- Clone this project repository:

open your terminal or command prompt and run : https://github.com/alikhalifehh/ecommerce-frontend.git

then run: cd ecommerce-frontend

3- Install project dependencies by running : npm install

4- Run the Angular application by running : ng serve

5- Navigate in the browser to http://localhost:4200 to see the application running.
