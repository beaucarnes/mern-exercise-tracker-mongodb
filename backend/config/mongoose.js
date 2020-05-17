const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exotrack');

const db= mongoose.connection;

db.on('error', console.error.bind(console, "error connecting mongodb"));

db.once('open', function(){
    console.log('connected to database');
});


module.exports=db;