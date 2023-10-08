const fs = require("fs");

const path = "file_path";
// Read the existing JSON file
const rawData = fs.readFileSync(`${path}.json`);
const jsonData = JSON.parse(rawData);

// Filter objects,e.g. by popularity greater than or equal to 30
const filteredData = jsonData.filter((item) => item.popularity >= 30);

// Write the filtered data to a new JSON file
fs.writeFileSync(`output.json`, JSON.stringify(filteredData, null, 2));

console.log(`Filtered data written to output.json`);
