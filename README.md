## Clean Create-React-App
Clean Create-React-App is a script that removes unnecessary files that are generated when creating a React app using create-react-app. This package removes the following files:

``public/logo192.png``,
``public/logo512.png``,
``public/robots.txt``,
``src/logo.svg``,
``public/favicon.ico``,
``src/App.cs``,
  ``src/App.test.js``,
  ``src/index.css``,
  ``src/logo.svg``,
  ``src/reportWebVitals.js``,
  ``src/setupTests.js``

## Installation
To install Clean Create-React-App, run the following command:

``npm install clean-create-react-app``

## Usage
After installing the package, you can run the script manually by executing the following command in the terminal:

``npm run clean``

Alternatively, you can import the script into your app.js file (or any other file where you want to remove unnecessary files), and call the script like this:

``const fs = require("fs");``
``const clean = require("clean-create-react-app");``

``clean(fs);``  

This will remove the unnecessary files listed above.

## Important! Remember that you will also need to manually remove any references to the removed files in your code. For example, if you have imported the logo.svg file in your App.js file, you will need to remove the import statement after running the script, or your app will crash.

## License
Clean Create-React-App is licensed under the ISC License. See the LICENSE file for more information.