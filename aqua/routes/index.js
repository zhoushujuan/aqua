var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'aqua首页',cssPath:"/stylesheets/home.css",type1:'active',type2:'',type3:'',type4:'',type5:''});
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' ,cssPath:"/stylesheets/test.css",type1: '',type2:'',type3:'',type4:'',type5:'active'});
});


router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' ,cssPath:"/stylesheets/reg.css",type1:'',type2:'',type3:'active',type4:'',type5:''});
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '联系我们',cssPath:"/stylesheets/contact.css",type1:'',type2:'',type3:'',type4:'active',type5:''});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: '关于我们',cssPath:"/stylesheets/about.css",type1:'',type2:'active',type3:'',type4:'',type5:''});
});

router.get('/html?*',function (req,res,next) {
  var username = req.query.username;
  var password = req.query.password;
  var filePath = 1;
  fs.readFile("./public/db/data.json",function (err,data) {
    if(err){
      return;
    }
    var data = JSON.parse(data.toString());
    for(var i = 0;i<data.data.length;i++){
      if(data.data[i].username === username && data.data[i].password === password){
        filePath = 0;
        break;
      }else {
        filePath = 1;
      }
    }
    if(filePath == 0){
      res.render('index', { title: 'aqua首页',cssPath:"/stylesheets/home.css",type1:'active',type2:'',type3:'',type4:'',type5:''});
    }else {
      res.render('reg', { title: '注册' ,cssPath:"/stylesheets/reg.css",type1:'',type2:'',type3:'active',type4:'',type5:''});
    }
  })

});

router.post('/html',function (req,res,next) {
  var shuju = req.body;
  fs.readFile("./public/db/data.json",function (err,data) {
    if(err){
      return;
    }
    var data = JSON.parse(data.toString());
    data.data.push(shuju);
    fs.writeFile("./public/db/data.json",JSON.stringify(data),function (err) {
      if(err){
        return;
      }
      res.render('login', { title: '登录' ,cssPath:"/stylesheets/test.css",type1: '',type2:'',type3:'',type4:'',type5:'active'});
    })
  })
});


module.exports = router;
