
var express = require('express');
var eventRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [  {
    name: ' event-1',
    description:'the first event',
    date:'2017.05.05',
    time:'4:00 pm',
    duration:'4 hours',
    location:{
        streetAddr:'100 main',
        city:'kansas',
        state:'missouri',
        zip:'64111',
        lon:0,
        lat:0
    },
    capacity:100
},
    { name: ' event-2',
    description:'the second event',
    date:'2017.06.05',
    time:'7:00 pm',
    duration:'7 hours',
    location:{
        streetAddr:'102 main',
        city:'atlanta',
        state:'GA',
        zip:'30071',
        lon:0,
        lat:0
    },
    capacity:200
},
    {name: ' event-3',
    description:'the third event',
    date:'2017.09.05',
    time:'12:00 pm',
    duration:'5 hours',
    location:{
        streetAddr:'102 main',
        city:'kansascity',
        state:'missouri',
        zip:'64105',
        lon:0,
        lat:0
    },
    capacity:300
},
 {name: ' event-4',
    description:'the fourth event',
    date:'2017.05.01',
    time:'3:00 pm',
    duration:'6 hours',
    location:{
        streetAddr:'108 main',
        city:'WD',
        state:'iowa',
        zip:'64101',
        lon:0,
        lat:0
    },
    capacity:400
    }
    ];



eventRouter.route('/')
        .get(function(req,res){
         
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err,db){
            var collection = db.collection('events');
            collection.find({}).toArray(function(err,results){
           
           res.render('events',{
       list: ['first event','2nd event', '3rd event'],
       nav: [{ Link:'Services',Text:'Services'},
             {Link:'Portfolio',Text:'Portfolio'},
             {Link:'About',Text:'About'},
             {Link:'Team',Text:'Team'},
             {Link:'Contact',Text:'Contact'},
             {Link:'NewThing',Text:'NewThing'},
             {Link:'Events',Text:'Events'}],
             events: results
         
            });
        });
         
         
        });

  });
  
  eventRouter.route('/:id').
   get(function(req,res){
       var id=req.params.id;
       res.render('event',{
       list: ['first event','2nd event', '3rd event'],
       nav: [{ Link:'Services',Text:'Services'},
             {Link:'Portfolio',Text:'Portfolio'},
             {Link:'About',Text:'About'},
             {Link:'Team',Text:'Team'},
             {Link:'Contact',Text:'Contact'},
             {Link:'NewThing',Text:'NewThing'},
             {Link:'Events',Text:'Events'}],
             events:eventsData[id]
             });
   });
  
  module.exports=eventRouter;