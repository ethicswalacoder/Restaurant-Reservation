//processes allTables JSON file into Mongo Table Object

const mongoose = require("mongoose");
const Table = require("../../models/Table").model;
const fs = require("fs");

let tableData = fs.readFileSync(_dirname + "/allTables.json");
tableData = JSON.parse(tableData).tables;

let allTables = [];
tableData.forEach(table => {
    allTables.push(new Table(table));
});
