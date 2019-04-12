# Spotify Client Demo

Web application that interacts with the Spotify API. Main technologies: React, Redux and Semantic UI.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing
`yarn install`


### Running the project on localhost

`yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Running the tests

`yarn test`
Runs the jest coverage tests and shows them on the console

`yarn coverage`
Runs the jest coverage tests and shows them on a [website](http://localhost:8500/)


## Deployment
### Building the app for production

`yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### Deploying the app on the Github page

`yarn predeploy`
Builds the app for production like `yarn build`

`yarn deploy`
Update the Github page [cfontana0.github.io](https://cfontana0.github.io/spotify-client/)

## Author
- [Carlos Fontana](https://github.com/cfontana0)

## License
This project is licensed under the MIT License
