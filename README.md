# Audio Transcription Project

This project implements an audio transcription application using React, Deepgram SDK, and other libraries. The application allows users to record audio, transcribe it in real-time, and display the transcription on the UI.

## Features

- Real-time audio recording
- Transcription of audio using Deepgram
- Responsive and intuitive user interface
- Customizable styles using Tailwind CSS

## Technologies Used

- React
- Deepgram SDK
- Express.js
- Axios
- Tailwind CSS
- Jest and React Testing Library for testing

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arun02DS/AudiotoText.git
   ```
2. **Install Dependencies:**
   ```bash
   npm install @deepgram/sdk axios cors dotenv express multer react react-dom react-scripts web-vitals
   ```
   ```bash
   npm install @testing-library/jest-dom @testing-library/react identity-obj-proxy jest tailwindcss --save-dev
   ```

# How to run

## First start the server 

```bash
   node server.js
```

## start the react app

```bash
 npm start
 ```

## For testing 

```bash
npm test
```

# Workflow

1. Recording Audio: Users can start recording audio through the microphone component.
2. Transcription: The recorded audio is sent to the Deepgram API for transcription.
3. Displaying Transcription: The transcribed text is displayed in real-time on the UI.
4. Styling: The application is styled using Tailwind CSS for a clean and responsive layout.
5. Testing: Tests are written using Jest and React Testing Library to ensure the functionality of components.


######################################################################################################

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
