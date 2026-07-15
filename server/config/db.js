import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  uri: process.env.DATABASE_URL,
  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true,
  },
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

export default db;