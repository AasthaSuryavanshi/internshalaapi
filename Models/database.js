const mongoose = require('mongoose');

exports.databaseConnection = async () =>{
try {
    await mongoose.connect(process.env.Mongodb_URL)
    console.log("database connection done");
} catch (error) {
    console.log(error.message);
}
}