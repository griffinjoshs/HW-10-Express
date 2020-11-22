const fs = require('fs')
    const note = require('../db/db.json')


module.exports = function(app) {
    // GET Method
    app.get("/api/notes", function(req, res) {
        res.json(note)
    });

// POST Method
    app.post("/api/notes", function(req, res) {
        if (note.length < 5) {
            note.push(req.body);
            res.json(true);
        }
        else {
            
        }
    })
}
