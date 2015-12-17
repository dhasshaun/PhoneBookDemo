var models = require('../../app/config/database.js');
var obj = {
  resCode: 0,
  resDesc: 'success'
}
module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index');
  });
  app.get('/getAllContact', function (req, res){
    models.contact.find().exec(function (err, contact){
      if(err){
        console.log(err);
        obj.resCode = 1;
        obj.resDesc = 'ERROR';
      }else{
        obj.data = contact;
        res.json(obj);
      }
    })
  });
  app.post('/addContact', function(req, res){
    var contact = new models.contact({
      contactName: req.query.contactName,
      contactNo: req.query.contactNo,
      contactEmail: req.query.contactEmail
    });
    contact.save(contact, function(err, contact){
      if(err){
        console.log(err);
        obj.resCode = 1;
        obj.resDesc = 'ERROR';
      }else{
        res.json(obj);
      }
    });
  });
  app.get('/editContact', function(req, res){
    var update = {
      contactName : req.query.contactName,
      contactNo : req.query.contactNo,
      contactEmail : req.query.contactEmail
    }

    models.contact.findOneAndUpdate({_id: req.query._id}, update, function(err, contact){
      if(err){
        console.log(err);
        obj.resCode = 1;
        obj.resDesc = 'ERROR';
      }else{
        res.json(obj);
      } 
    });
  });
  app.get('/getContact', function(req, res){
    models.contact.findOne({_id: req.query._id}, function(err, contact){
      if(err){
        console.log(err);
        obj.resCode = 1;
        obj.resDesc = 'ERROR';
      }else{
        obj.data = contact;
        res.json(obj);
      } 
    });
  });
};
