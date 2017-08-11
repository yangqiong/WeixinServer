let express = require("express");
let router = require("./router");

let app = express();

app.use(router);

let port = 3000;
app.listen(port, function(){
	console.log(`server is listening on port: ${port}`)
})