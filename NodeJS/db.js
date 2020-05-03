const mongoose = require('mongoose');

// mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
    if(!err){console.log('MongoDB Connection Succeded');}
    else
        console.log('Error in Database connection '+ JSON.stringify(err,undefined,2));
})
// { useCreateIndex: true },

module.exports = mongoose;