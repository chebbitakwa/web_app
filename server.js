const express = require('express')
const app = express()
const moment = require('moment')
function momentservice() {
    return moment().isBetween(moment('08:00', 'hh:mm'), moment('17:00', 'hh:mm'))
}

app.use((req, res, next) =>  {
if (momentservice()) {next ();}
else 
res.sendFile(__dirname + '/404.html')
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, (err) => {
    if (err) console.log("server is not running")
    else console.log("server is running")
})