var app         = express();

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});