// stackModule.js

// "client_id": XX,
// "client_secret": "XX(("
// "key": "XX(("
// "redirect_uri": "XX"

var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

var filter = {
  key: 'QZM9sJ9hrP4Fj1a3GF4FzQ((',
  pagesize: 50,
  tagged: 'node.js',
  sort: 'activity',
  order: 'asc'
};

// Get all the questions (http://api.stackexchange.com/docs/questions)
// context.questions.questions(filter, function(err, results){
//   if (err) throw err;

//   console.log(results.items);
//   console.log(results.has_more);
// });



module.exports = function (app) {
    app.get('/stack', function (req, res) {
    	context.

        // use mongoose to get all nerds in the database
        Subjects.find(function (err, subjectDetails) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(subjectDetails); // return all nerds in JSON format
        });
    });
}
