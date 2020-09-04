const mongodb = require('mongodb');

const mongoclient = mongodb.MongoClient;

var mydb;

const mongoconnect = (callback) => {
    mongoclient.connect('mongodb+srv://kartik:kartiksaxena@cluster0.nervh.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then((client)=>{
        console.log("connected!!");
        mydb = client.db;
        callback();
    })
    .catch((err)=>{
        console.log("Sorry, can't connect!! \n",err);
        throw err;
    });
};

const getdb = () => {
    if(mydb){
        return mydb;
    }
    throw 'No database found !!!';
};

exports.mongoconnect = mongoconnect;
exports.getdb = getdb; 

// Add it as second parameter
// {useNewUrlParser: true, useUnifiedTopology: true}