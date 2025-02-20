# BMI Calculator

A simple React app that allows users to calculate their Body Mass Index (BMI) efficiently.

## Features

- Enter height and weight to calculate BMI.
- Displays BMI category (Underweight, Normal, Overweight, or Obese).
- Responsive UI with simple styling.

## Technologies Used

- **React**: Frontend JavaScript library for building UI components.
- **CSS**: Used for styling the application.

## Structure

The basic structure of the app:

/BMI_CALCULATOR ├── /node_modules # Project dependencies ├── /public # Public assets and static files │ ├── index.html # HTML template for the app ├── /src # Source code for the application │ ├── /components # Contains React components for the app │ │ ├── BMI.jsx # Component for BMI calculation │ │ └── BMI.css # Styles for the BMI component │ ├── App.js # Main App component integrating all features │ ├── App.css # Global styling for the app │ ├── index.js # Entry point for the React app │ ├── index.css # Base styles for the app ├── .gitignore # Git ignore file to exclude unnecessary files ├── package.json # Contains project dependencies and scripts ├── package-lock.json # Auto-generated file for package versions └── README.md # This file, containing project details and instructions

## Explanation

- **/BMI_CALCULATOR**: Root folder containing all source files.
- **/node_modules**: Contains installed dependencies (automatically generated).
- **/public**: Stores static files such as `index.html`.
- **/src**: Main source folder containing all React code.
  - **/components**: Holds reusable React components.
    - `BMI.jsx`: Component for handling BMI calculation.
    - `BMI.css`: Styling for the BMI component.
  - `App.js`: The root component integrating everything.
  - `App.css`: Global styling for the app.
  - `index.js`: The entry point for the React application.
  - `index.css`: Base styles for the app.
- **.gitignore**: Specifies which files to ignore in version control.
- **package.json**: Defines project dependencies and scripts.
- **package-lock.json**: Records exact versions of installed dependencies.
- **README.md**: This documentation file.
