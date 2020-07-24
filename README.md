# Shelf-it 
Web app that lets you keep track of owned books<br />
You can find test cases [here](https://github.com/cmanage1/shelf-it/wiki/Test-cases) as well as diagrams

## Architecture 
Shelf-it uses the MVC architecture

Frameworks & Environments used:
* React framework for the FrontEnd
* Node.js to support the BackEnd
* Firebase for hosting it [live]( https://shelf-it.web.app/ )

API's used:
* Google Books API to fetch book searches
* Firebase Authentication to log users and manage states
* Firebase FireStore to store data

Most of the code in '/src' is written by me, there are some snippets of code that's not completely my work but they are credited to the Original Author in the respective JavaScript file (eg: '/src/SignUp.js'). <br />
I have written some code in '/public/index.html' & '/public/style.css' as well.

## New Features

I am planning on adding a function to add notes about a certain book (as seen in [issue]( https://github.com/cmanage1/shelf-it/issues/3 ) <br />
If you would like to add anything add them as a .js file in the '/src' directory. And reference that file into App.js and Nav.js. <br />
And if you have ideas for more features please open an Issue with the "enhancement" tag

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
