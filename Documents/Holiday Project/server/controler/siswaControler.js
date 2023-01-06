// const { db } = require("../databases");

// module.exports = {
//   LoginStudent: (req, res) => {
//     const nis = req.body.inputNis;
//     const password = req.body.inputPassword;
//     const sqlInsert = "INSERT INTO roleuser (username,password) VALUES (?,?)";
//     db.query(sqlInsert, [nis, password], (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("values inserted");
//       }
//     });
//   },

//   getData: (req, res) => {
//     let scriptQuery = "SELECT * FROM absensi_siswa";
//     db.query(scriptQuery, (err, results) => {
//       if (err) res.status(500).send(err);
//       res.status(200).send(results);
//     });
//   },
//   addData: (req, res) => {
//     const nis = req.body.nis;
//     const fullName = req.body.fullName;
//     const ttl = req.body.ttl;
//     const cls = req.body.cls;
//     const gender = req.body.gender;
//     const address = req.body.address;
//     const nohp = req.body.nohp;
//     const email = req.body.email;
//     const password = req.body.password;
//     const sqlInsert = "INSERT INTO management_siswa (NIS, FullName, TTL, Class, Gender, Address, NoHp, Email, Password) VALUES (?,?,?,?,?,?,?,?,?)";
//     db.query(sqlInsert, [nis, fullName, ttl, cls, gender, address, nohp, email, password], (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("values inserted");
//       }
//     });
//   },
//   // editData: (req, res) => {
//   //   let dataUpdate = [];
//   //   for (let prop in req.body) {
//   //     dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
//   //   }
//   //   let updateQuery = `UPDATE karyawan set ${dataUpdate} where idkaryawan = ${req.params.id};`;
//   //   console.log(updateQuery);
//   //   db.query(updateQuery, (err, results) => {
//   //     if (err) res.status(500).send(err);
//   //     res.status(200).send(results);
//   //   });
//   // },
//   // deleteData: (req, res) => {
//   //   let deleteQuery = `DELETE from karyawan where idkaryawan =${db.escape(req.params.idkaryawan)}`;

//   //   db.query(deleteQuery, (err, results) => {
//   //     if (err) res.status(500).send(err);
//   //     res.status(200).send(results);
//   //   });
//   // },
// };
