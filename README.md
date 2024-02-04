
# Weather App with Firebase Integration

This is a simple web application that provides weather information and user management functionalities. The app is built using React, Firebase for authentication and database, and Axios for fetching weather data from an API.

## Features

1.Login (with Firebase Auth): Users can log in using their email and password. Firebase authentication is used for secure login.

2.Homepage with Weather Information: The homepage displays weather information for a specified city using the OpenWeatherMap API.

## User Management:

- Table displaying active users with columns (Username, Added Date, Status, Actions).
- Users can be added, deleted, and their status changed to inactive.
- Table supports filtering, sorting, and date picking.
- User Session Management: User sessions are maintained using Firebase authentication.

## Prerequisites
Before running the application, make sure you have the following dependencies installed:

-[Node.js](https://nodejs.org/en)
-[npm](https://www.npmjs.com/)
## Installation
1.Clone the repository:

```bash
git clone https://github.com/Satyaswarup11/Weather_app.git
```
2. Navigate to the project directory:

```bash
cd Weather-app
```
3.Install the required npm packages:

```bash
npm install
```

```bash
npm install react-router-dom
```

```bash
npm install firebase
```

```bash
npm install axios
```

## Configuration
1.Firebase Configuration:

 -Create a Firebase project on the Firebase Console.
 -Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.).
 -Update the src/firebase.js file with your Firebase configuration.

2.OpenWeatherMap API Key:

 -Obtain an API key from OpenWeatherMap.
 -Update the src/components/Weather.js file with your API key.

## Usage
Run the application locally:

```bash
npm start
```
Open your browser and navigate to http://localhost:3000.

## Dependencies
 -axios: Used for making HTTP requests.
 -firebase: Firebase SDK for authentication and Firestore.
 -react-router-dom: Library for declarative routing in React.
## Contributing
Feel free to contribute by opening issues or submitting pull requests.

License
This project is licensed under the MIT License.
