const fs = require("fs");

const filesToDelete = [
  "public/logo192.png",
  "public/logo512.png",
  "public/robots.txt",
  "public/favicon.ico",
  "src/logo.svg",
  "src/App.css",
  "src/App.test.js",
  "src/index.css",
  "src/logo.svg",
  "src/reportWebVitals.js",
  "src/setupTests.js",
];

filesToDelete.forEach((file) => {
  try {
    fs.unlinkSync(file);
    console.log(`Deleted ${file}`);
  } catch (err) {
    console.error(`Error deleting ${file}: ${err}`);
  }
});
