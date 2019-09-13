var express = require('express');
var soap = require('soap');

var app = express()
var PORT = 3000;

app.get('/', function(req, res) {

    var url = 'http://xxx.loc/path/to/webserviceserver.php?wsdl';
    var args = {param1: 'allen',param2:'eben'};

    soap.createClient(url, function(err, client) {
        
        client.methodFromEndPoint(args,function(err,result) {
            console.log(result);  
        })
            
    })

    res.status(200).send('Hello world');
});




app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});