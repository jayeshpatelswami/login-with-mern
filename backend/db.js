const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://jayu07498:9106073301@cluster0.61djowj.mongodb.net/login?retryWrites=true&w=majority"

function connnecttomongo(){
    mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Connected to mongo");
    }).catch((e)=>{console.log(e)});
}

module.exports = connnecttomongo;