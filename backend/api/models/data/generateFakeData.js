//Randomly generate a fake allTables JSON file

const fs = require("fs");
const numTables = Math.floor(math.random() * 10) + 16;

let fakeTables = [];
for(i=1; i< numTables; i++) {
    const chairs = Math.floor(Math.random() * 6) + 2;
    const name = `Table ${i}`
    const location = ["Patio", "Inside", "Bar"] [math.floor(Math.random() * 3)]
    fakeTables.push(
        {
            name:name,
            capacity: chairs,
            isAvailable: true,
            location: location
        }
    )
}

let data = JSON.stringify({
    tables:fakeTables
});
fs.writeFileSync(__dirname + "/allTables.json", data);