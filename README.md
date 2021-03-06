# Z-article
This is a React and Node.js for demo purposes

## Set up
The application consists in two parts:
 * **backend** Implemented a RESTful API with Express.js to fullfill the requirements. Express.js is a wide used and convenient to build web application with Node.js
 * **frontend** The frontend is a standard React app created with the create-react-app scripts which simplifies the steps to build, deploy and dev the application.
There was added `concurrently` to run two processes together.

### Design patterns
Following the Redux patterns to implement the interaction in the application. Redux is Javascript library to manage the state of the application that plays well practically out-of-the box with React.

### CSS
Used standard CSS imported directly in the React components.So don't need of additional steps in the building tasks.

### Testing
Using Jest to test both backend and frontend. Added some configuration to do it on the `package.json` file. Jest works out of the box for any React project and includes assertion and mocking functionalities without adding other libraries to do that. Added `supertest` to test the application endpoints.

## TL; DR
Type 
```yarn install && yarn start```
or
```npm install && npm start```
 on your command line to run the project.

# The following documentation is mostly provided by the create-react-app generator with the exception of the concurrently execution to run the backend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

>Also runs `concurrently` a dummy backend endpoint to simulate the payment procedure.

>The backend runs on port 3001 by default and it is properly configured in the `package.json` file to be proxied by the React frontend app.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
