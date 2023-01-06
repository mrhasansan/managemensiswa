const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const PORT = 3002;
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  port: 3306,
  database: "management_siswa",
});

db.connect((err) => {
  if (err) {
    return console.log(`Error : ${err.message}`);
  }
  console.log(`CONNECT TO MYSQL`);
});

app.get("/", (req, res) => {
  res.status(200).send("<h1> HELO APP TRACKER </h1>");
});

app.post("/loginsiswa", (req, res) => {
  const nis = req.body.Nis;
  const password = req.body.Password;
  const sqlInsert = "INSERT INTO roleuser (nis,password) VALUES (?,?)";
  db.query(sqlInsert, [nis, password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("value Inserted");
    }
  });
});

app.post("/loginadmin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlInsert = "INSERT INTO roleadmin (username,password) VALUES (?,?)";
  db.query(sqlInsert, [username, password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("value Inserted");
    }
  });
});

app.post("/register", (req, res) => {
  const nis = req.body.nis;
  const fullName = req.body.fullName;
  const ttl = req.body.ttl;
  const cls = req.body.cls;
  const gender = req.body.gender;
  const address = req.body.address;
  const nohp = req.body.nohp;
  const email = req.body.email;
  const password = req.body.password;
  const sqlInsert = "INSERT INTO management_siswa (NIS, FullName, TTL, Class, Gender, Address, NoHp, Email, Password) VALUES (?,?,?,?,?,?,?,?,?)";
  db.query(sqlInsert, [nis, fullName, ttl, cls, gender, address, nohp, email, password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("values inserted");
    }
  });
});

app.get("/studentslist", (req, res) => {
  const nis = req.body.nis;
  const ttl = req.body.ttl;
  const fullName = req.body.fullName;
  const email = req.body.email;
  const nohp = req.body.nohp;
  const sqlget = "SELECT * FROM management_siswa";

  db.query(sqlget, [ttl, nis, fullName, email, nohp], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/totallist", (req, res) => {
  const nis = req.body.nis;
  const fullName = req.body.fullName;
  const ttl = req.body.ttl;
  const kelas = req.body.class;
  const gender = req.body.class;
  const address = req.body.address;
  const nohp = req.body.nohp;
  const sqlget = "SELECT * FROM management_siswa";
  db.query(sqlget, [nis, fullName, ttl, kelas, gender, address, nohp], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/chekin", (req, res) => {
  const tanggal = req.body.tanggal;
  const chekin = req.body.chekin;

  const sqlInsert = "INSERT INTO absensi (tanggal,chekin) VALUES (?,?)";
  db.query(sqlInsert, [tanggal, chekin], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("value Inserted");
    }
  });
});

app.post("/chekout", (req, res) => {
  const tanggal = req.body.tanggal;

  const chekout = req.body.chekout;

  const sqlInsert = "INSERT INTO absensi (tanggal,chekout) VALUES (?,?)";
  db.query(sqlInsert, [tanggal, chekout], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("value Inserted");
    }
  });
});

app.get("/attendancelist", (req, res) => {
  const tanggal = req.body.tanggal;
  const chekin = req.body.chekin;
  const chekout = req.body.chekout;
  const status = req.body.status;

  const sqlget = "SELECT * FROM absensi";
  db.query(sqlget, [tanggal, chekin, chekout, status], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => console.log("API RUNNING ON PORT", PORT));
