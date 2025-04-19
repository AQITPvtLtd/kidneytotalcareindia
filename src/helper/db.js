import mysql from "mysql2";

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "kidneytotalcare",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

