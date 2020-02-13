var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://test:test1234@todo-qqfes.mongodb.net/test?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true });
var login = mongoose.model('signup');
var a;
var d=[];

var urlencodedParser = bodyparser.urlencoded({extended: false});

module.exports=function(app){
  app.get('/',function(req,res){
    login.find({},function(err,data){
        if(err) throw err;
        else
          res.render('index',{p:{}});
    });
  });

  app.get('/login',function(req,res){
    res.render('login',{p:{}});
  });

  app.get('/getGUID',function(req,res){
    res.render('login',{p:a});
  });
  app.post('/getGUID',urlencodedParser,function(req,res){
        login.find(req.body,function(err,data){
          if(err) throw err;
          else{
          a=data[0];
          res.json({});
        }
      });
  });
    app.post('/',urlencodedParser,function(req,res){
        login.find(req.body,function(err,data){
            if(err) throw err;
            else
            {
              if(data.length == 0)
                res.status(404).end();
              else
              {
                res.json({x:""});
              }
            }
        });
    });
    app.get('/status',function(req,res){
      res.render('status');
    });

    app.get('/pa',function(req,res){
      login.find(a,function(err,data){
        if(err) throw err;
        else
        {
          var f = new Date();
          login.update(a,{$push:{attendance:f}},function(err,result){
              if(err) throw err;
              else
              res.render('sucess.ejs');
          });
        }
    });
  });

  app.get('/attt',function(req,res){
    res.render('attt');
  });
  app.get("/attendance",function(req,res){
    res.render("pdatt",{d:d});
  });
  app.post('/attendance',urlencodedParser,function(req,res){
    d=[];
    login.find({},function(err,data){
        if(err) throw err;
        else
        {
          var k=0;
          var x=new Date(Date.parse(req.body.d));
          for(var i=0;i<data.length;i++)
          {
              for(var j=0;j<data[i].attendance.length;j++)
              {
                var e = data[i].attendance[j];
                if(x.getFullYear()==e.getFullYear() && x.getMonth()==e.getMonth() && x.getDate()==e.getDate())
                {
                  d.push(data[i]);
                }
              }
          }
          if(d.length>0)
          {
            res.json({p:""});
          }
          res.status(404).end();
        }
    });
  });
};
