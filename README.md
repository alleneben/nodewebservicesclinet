# Node Express Webservices Client
This node express project comsumes any soap enpoint
 


## Instructions

1. Replace the url with your prescribed webservice endpoint
```js
var url = 'http://xxx.loc/path/to/webserviceserver.php?wsdl';
```

2. Create your argument or parameter set as follows
```js
var args = {param1: 'allen',param2:'eben'};
```

3. Replace `methodFromEndPoint` with the method from your endpoint in
```js
    client.methodFromEndPoint(args,function(err,result) {
        console.log(result);  
    })
```


## Installation

1. Clone the repository
2. Change Directory into the project root folder
3. Run `npm install`
4. Run `node server.js`

