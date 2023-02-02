import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  password: "thien123",
  database: "blog",
});

// db.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!!!")
// });