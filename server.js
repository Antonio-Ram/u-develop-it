//import mysql - modularized the code to connection.js
//import connection.js
const db = require('./db/connection');

//import apiRoutes
const apiRoutes = require('./routes/apiRoutes');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Use apiRoutes
app.use('/api', apiRoutes);

//Connect to database - modularized the code to connection.js

//GET all candidates - modularized the code to candidateRoutes.js
//app.get('/api/candidates', (req, res) => {
//});

//GET a single candidate - modularized the code to candidatedRoutes.js
//app.get('/api/candidate/:id', (req, res) => {
//});
/*db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});*/

//Delete a candidate - modularized the code to candidateRoutes.js
//app.delete('/api/candidate/:id', (req, res) => {
//});
/*db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});*/

//Create a candidate - modularized the code to candidateRoutes.js
//app.post('/api/candidate', ({ body }, res) => {
//});
/*const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
    VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});*/

//Update a candidate's party - modularized the code to candidateRoutes.js
//app.put('/api/candidate/:id', (req, res) => {
//});

//GET all parties - moved to partyRoutes.js
//app.get('/api/parties', (req, res) => {
//});

 //GET a single party - moved to partyRoutes.js
// app.get('/api/party/:id', (req, res) => {
// });


 //Delete a party - moved to partyRoutes.js
 //app.delete('/api/party/:id', (req, res) => {
// });

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Databaseconnected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
/*app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});*/
