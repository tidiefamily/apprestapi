var mysql = require("mysql");

//buat koneksi

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wafiqu",
  database: "dbrestapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql terkoneksi");
});

module.exports = conn;
