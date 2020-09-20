let express = require('express');
let app = express();

app.use(express.static("public"));

console.log("listening on 8080");
app.listen(8080);