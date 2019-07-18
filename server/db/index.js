const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'host.docker.internal',
  user: 'root',
  password: '',
  database: 'related_listings',
  port: '3306'
});

connection.connect((err) => {
  if(err){
    console.log(err);
    return;
  }
});

module.exports = connection;