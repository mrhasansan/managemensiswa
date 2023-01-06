import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Table, List, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import axios from "axios";
import { AiOutlineDashboard } from "@react-icons/all-files/ai/AiOutlineDashboard";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { GoGraph } from "@react-icons/all-files/go/GoGraph";
import { FaRegIdBadge } from "@react-icons/all-files/fa/FaRegIdBadge";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaSortAmountUp } from "@react-icons/all-files/fa/FaSortAmountUp";
import { FaFilter } from "@react-icons/all-files/fa/FaFilter";

function AttendanceList() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3002/studentslist");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Container color="secondary">
        <Row>
          <Col className="bg-light " xs="3">
            <Container color="light">
              <FaUserTie size={60} />
              <h6 className="mt-2 "> Admin</h6>
              <p className="mb-2 text-muted">Attandance Admin </p>
              <List type="unstyled" className="text-start fs-6 ">
                <li className="my-2 ">
                  <AiOutlineDashboard className="mx-3" />
                  Dasbord
                </li>
                <li className="my-2">
                  <GoGraph className="mx-3" />
                  Attandance List
                </li>
                <li className="my-2">
                  <CgProfile className="mx-3" />
                  My Profile
                </li>
                <li className="my-2">
                  <GoGraph className="mx-3" />
                  Students Attandance
                </li>
                <li className="my-2">
                  <FaRegIdBadge className="mx-3" />
                  Regist Student
                </li>
              </List>
            </Container>
          </Col>
          <Col className="bg-secondary-subtle text-center  ">
            <Row className="justify-content-around">
              <div className="d-flex justify-content-between">
                <h2>Students Attendance</h2>
                <div>
                  <Button>LOGOUT</Button>
                </div>
              </div>
            </Row>

            <Container className="border">
              <div className="d-flex justify-content-between my-4">
                <h4 className=""> Student List</h4>
                <div className="mb-2 text-muted d-flex justify-content-between">
                  <h6 className="mx-5">
                    <FaSortAmountUp /> Sort
                  </h6>
                  <h6>
                    <FaFilter /> Filter
                  </h6>
                </div>
              </div>
              <Table>
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>NIS</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>No telpon</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.NIS}</td>
                        <td>{item.FullName}</td>
                        <td>{item.Email}</td>
                        <td>{item.NoHp}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Pagination size="md" className="d-flex justify-content-end mx-2">
                <PaginationItem>
                  <PaginationLink href="#" previous />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" next />
                </PaginationItem>
              </Pagination>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AttendanceList;
