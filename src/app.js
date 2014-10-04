var express = require('express'),
    router = express.Router(),
    app = express(),
    path = require('path'),
    errorHandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    questions = require('./routes/questions'),
    groups = require('./routes/groups');


app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

app.use(express.static(path.join("./", 'public')));
app.use('/api/qa', questions);
app.use('/api/groups', groups);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});