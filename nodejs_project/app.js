
var express = require("express");
var app =express();

var port = process.env.PORT;
var eventRouter =require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRouter');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine','ejs');


   app.use('/Events',eventRouter);
   app.use('/db',dbRouter);
   
app.get('/', function(req,res){
   /* res.send('Hello world!');
   */
   res.render('index', {
       list: ['first val','2nd val', '3rd val'],
       nav: [{ Link:'Services',Text:'Services'},
             {Link:'Portfolio',Text:'Portfolio'},
             {Link:'About',Text:'About'},
             {Link:'Team',Text:'Team'},
             {Link:'Contact',Text:'Contact'},
             {Link:'NewThing',Text:'NewThing'},
             {Link:'Events',Text:'Events'}]
       
       
   });
});



app.get('/routing', function(req,res){
    res.send('routing world!');
});

app.listen(port, function(err){
   console.log('The server is running on port: ' +port); 
});

module.exports=eventRouter;