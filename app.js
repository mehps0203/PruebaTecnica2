const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3002;

const db = mysql.createConnection({
  host: 'precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com', 
  user: 'candidatoPrueba', 
  password: 'gaspre21.M', 
  database: 'pruebas'
});


app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
  });


app.get('/obtener-datos', (req, res) => {
  const query = 'SELECT a.cre_id_competitor, a.distance INTO  FROM stations_competitors a WHERE cre_id='+ req; 

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener datos de la base de datos:', err);
      res.status(500).json({ mensaje: 'Error al obtener datos de la base de datos' });
      return;
    }

    res.json(result);
  });
});

