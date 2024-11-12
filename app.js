const mongoose = require('mongoose');
const Employee = require('./employee');

const uri = "mongodb://talal:zontalash@localhost:27017/employeeDB";

mongoose.connect(uri).then(() => {
    console.log("Connected to MongoDB");

    // Query to find all employees
    return Employee.find();
}).then((data) => {
    console.log("Employee Data:", data);
}).catch((err) => {
    console.error("Database connection or query error:", err);
}).finally(() => {
    // Close the connection without a callback
    mongoose.connection.close();
});
