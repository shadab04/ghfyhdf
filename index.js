const express = require('express');
//const ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');
//const obj=require('./obj.js')
//const cur = require("./db.js");
//const { response } = require('express');
//const monmodel = require('./db.js');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.set('view engine', 'ejs');

app.get('/login', (req,res)=> {
    res.sendFile(path.join(__dirname,"login.html"));
    });

app.get('/reg', (req,res)=> {
     res.sendFile(path.join(__dirname,"register.html"));
    }); 

app.post('/insert', (req,res)=> {
        //res.send(req.body.nm);
        sname=req.body.fname;
        lname=req.body.lname;
        const obj1 = new cur({
        firstname:sname,
        lastname: lname
        });
        obj1.save()
        console.log('regitration successful')
        //res.render('index.ejs',{f_Name:sname,l_Name:lname });
    });
        

    app.listen(3000);
    
