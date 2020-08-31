# CodeIgniter 4 + React
This project is an attempt to create a template for a CodeIgniter 4 project that serves a React frontend.  
It uses [create-react-app](https://create-react-app.dev) for the React frontend.  
Supports PHP 7, ES6, JSX, and SCSS.

## Requirements
1. XAMPP (on Windows or Mac) or Apache (on Linux)
2. PHP
3. Composer
4. Node.js

## Setup and Installation
1. Clone this repository.
2. Install the PHP dependencies: `composer install`
3. Configure a virtual host for this CodeIgniter project (in XAMPP or Apache).
4. Setup the React project:
	- Install NPM dependencies: `npm run install`
	- In the `package.json` in the **`/frontend` folder**, set the `proxy` to the URL of the virtual host of this project (e.g. `http://ci-react.local`).
5. Rename `env` to `.env` and set the needed variables.

## Development
Developing the CodeIgniter parts of the project goes normally as it should.  
However, when developing the frontend (which is the React app), **`npm run dev`** must be ran first.

After executing the above commands, the development server will run and `http://localhost:3000` should be opened in the browser by default.

## Production
The React frontend should be built to see how it will work in production.  
To do this, run **`npm run build`**.
Make sure to check the `/public` folder if there are any duplicate or unnecessary static files (for example, the `precache-manifest` JS script).
