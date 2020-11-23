const fs = require('fs');
const note = require('../db/db.json')
var app = require('express')

module.exports = function (app) {
    // GET Method
    // fs.readFile("./db.json", "utf8", function (error, data) {
    //     data = JSON.parse(data);
    //     //console.log(data);
    //     res.json(data);
    // });
    app.get('/api/notes', function (req, res) {
        res.json(notes);
    })
    // app.get("/api/notes", function (req, res) {
    //     fs.readFile(); {
    //         res.json(note)
    //     } 
    // });

    // POST Method
    app.post("/api/notes", function(req, res){
        let Notes = req.body;
        console.log(Notes) 
        fs.writeFile("./db/db.json", Notes)
      })

    // app.post("/api/notes", function (req, res) {
    //     var parsedData = JSON.parse(data);
    //     note.push(req.body);
    //     res.json(true);
    //     fs.readFile(); {
    //         console.log(data);
    //         console.log(parsedData)
    //         fs.writeFile()
    //     }

        var data = fs.writeFileSync('../db/db.json')
    };

// app.post("/api/clear", function (req, res) {
//     // Empty out the arrays of data
//     note.length = 0;
//     note.length = 0;

//     res.json({ ok: true });
// });
