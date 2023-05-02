const fs = require("fs");

const filesToDelete = [
  "public/logo192.png",
  "public/logo512.png",
  "public/robots.txt",
  "src/logo.svg",
  "public/favicon.ico",
];

filesToDelete.forEach((file) => {
  try {
    fs.unlinkSync(file);
    console.log(`Deleted ${file}`);
  } catch (err) {
    console.error(`Error deleting ${file}: ${err}`);
  }
});
