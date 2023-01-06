import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Button } from "reactstrap";

function Times() {
  const [time, setTime] = useState();
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 100);
  }, [time]);

  const showdate = new Date();
  const namabulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const namahari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const displayTodayDate = ` ${namahari[showdate.getDay()]},  ${showdate.getDate()} ${namabulan[showdate.getMonth()]} ${showdate.getFullYear()}`;
  const waktu = `${showdate.getHours().toString().padStart(2, "0")} : ${showdate.getMinutes().toString().padStart(2, "0")} : ${showdate.getSeconds().toString().padStart(2, "0")}`;

  const chekin = waktu;
  const chekout = waktu;
  const tanggal = displayTodayDate;
  const SubmitChekin = () => {
    Axios.post("http://localhost:3002/chekin", {
      tanggal: tanggal,
      chekin: chekin,
    }).then((response) => {
      alert("chekin berhasil");
    });
  };

  const SubmitChekout = () => {
    Axios.post("http://localhost:3002/chekout", {
      tanggal: tanggal,
      chekout: chekout,
    }).then((response) => {
      alert("chekout berhasil");
    });
  };

  return (
    <>
      <Container>
        <h1>{time}</h1>

        <h1>{displayTodayDate}</h1>
        <h1> {waktu}</h1>
        <Button className="bg-primary mx-5" onClick={SubmitChekin}>
          Check In
        </Button>
        <Button className="bg-danger mx-5" onClick={SubmitChekout}>
          Check Out
        </Button>
      </Container>
    </>
  );
}

export default Times;
