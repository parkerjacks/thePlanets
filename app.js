let express = require("express")


let app = express() 
let port = 8000; 

app.get('/', function(req, res){ 
    res.sendFile(__dirname +'/nav.html')
})

app.listen(port, ()=> console.log(`Listening on port http://localhost:${port}`))

