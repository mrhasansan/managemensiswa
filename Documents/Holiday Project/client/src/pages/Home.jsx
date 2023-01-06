import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "reactstrap";
function Home() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3002/totallist");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <h1>Halaman List semua</h1>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>NIS</th>
              <th>Full Name</th>
              <th>TTL</th>
              <th>Class</th>
              <th>Gender</th>
              <th>Address</th>
              <th>NoHP</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.NIS}</td>
                  <td>{item.FullName}</td>
                  <td>{item.TTL}</td>
                  <td>{item.Class}</td>
                  <td>{item.Gender}</td>
                  <td>{item.Address}</td>
                  <td>{item.NoHp}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Home;
