var bodyparser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://test:test1234@todo-qqfes.mongodb.net/test?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true });

var signUpSchema = new mongoose.Schema({
  username: String,
  emailid: String,
  guid:String,
  attendance:[Date],
  latlong:[[Number]],
});

var signup = mongoose.model('signup',signUpSchema);

var urlencodedParser = bodyparser.urlencoded({extended: false});


module.exports=function(app){
    app.get('/signup',function(req,res){
        res.render('signup');
    });
    app.post('/signup',urlencodedParser,function(req,res){

        /*
            Export the SPEAKER-RECOGITION-API-CORE.js into this file and
            require it.
            Use 'enrollNewProfile' method which in turn calls 'enrollProfileAudio' from which
            profileid is generated and store this profileid along with username, email, password
            in the data-base
        */
        var a = {username:req.body.username};
        signup.find(a,function(err,data){
            if(err) throw err;
            else
            {
                if(data.length == 0)
                {
                    var newsignup = signup(req.body).save(function(err,data){
                        if(err) throw err;
                        res.json(data);
                    });
                }
                else
                res.status(404).end();
            }
        });
    });
};
