const express = require('express');
const path = require('path');
const bodyParser=require('body-parser');
const mongo =require('mongoose');

const db = mongo.connect("mongodb://localhost:27017/angularweb", function(err,response){
    if(err){ console.log(err);}
    else{console.log('Connect to ' +db, '+', response);}
});

const app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req , res , next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT ,PATH, DELETE')
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials',true)
});
const Schema = mongo.Schema;

const UserSchema = new Schema({
    name: {
        type: String
    },
    address : {
        type: String
    },
}, {versionKey:false})
const model =mongo.model('user',UserSchema,'user');

app.post("api/SaveUser",function(req,res){
    const mod = new model(req.body)
    if(req.body.model == "Save"){
        mod.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data: "Recorded has been inserted!!!"})
            }
        });
    }
})
app.get("/api/getUser", function(req,res){
    model.find({},function(err,data){
        if (err){
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
})
app.listen(4040, function(){
    console.log("App running in port 4040")
})
