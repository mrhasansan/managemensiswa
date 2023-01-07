import React from "react";
import { Form, Row, Col, FormGroup, Label, Button, Input, Container, List } from "reactstrap";
import { AiOutlineDashboard } from "@react-icons/all-files/ai/AiOutlineDashboard";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { GoGraph } from "@react-icons/all-files/go/GoGraph";
import { FaRegIdBadge } from "@react-icons/all-files/fa/FaRegIdBadge";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { useState } from "react";
import Axios from "axios";

function Register() {
  const [nis, setNis] = useState("");
  const [fullName, setFullname] = useState("");
  const [ttl, setTtl] = useState("");
  const [cls, setCls] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddres] = useState("");
  const [nohp, setNohp] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastid, setLastID] = useState(0);

  const generateSandi = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sandilength = 5;
    let password = "";

    for (let i = 0; i <= sandilength; i++) {
      let randomsandi = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomsandi, randomsandi + 1);
    }

    setPassword(password);
  };

  const renderGenerate = () => {
    const d = new Date();
    const tahun = d.getFullYear().toString();
    const bulan = (d.getMonth() + 1).toString().padStart(2, "0");

    Axios.get("http://localhost:3002/totallist")
      .then((res) => {
        console.log(res.data);
        setLastID(res.data[res.data.length - 1].id + 1);
      })
      .catch();
    // const pilihKelas = () => {
    //   if (cls == "Science") {
    //     return "PA";
    //   } else {
    //     return "PS";
    //   }
    // };
    // return `${tahun}${bulan}${lastid + 1}${pilihKelas}`;

    setNis(tahun + bulan + lastid + cls);
  };

  const registStudent = () => {
    Axios.post("http://localhost:3002/register", {
      nis: nis,
      fullName: fullName,
      ttl: ttl,
      cls: cls,
      gender: gender,
      address: address,
      nohp: nohp,
      email: email,
      password: password,
    }).then(() => {
      alert(" Registrasi successs");
    });
  };

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
                <h2>Regis Students</h2>
                <div>
                  <Button>LOGOUT</Button>
                </div>
              </div>
            </Row>

            <Container className="border">
              <Form className="text-start m-2">
                <Container className="bg-light border ">
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>NIS</Label>
                        <Input
                          placeholder="input NIS "
                          type="text"
                          onChange={(event) => {
                            setNis(event.target.value);
                          }}
                          value={nis}
                          disabled
                        />
                        <Button onClick={renderGenerate}>GenerateNIS</Button>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Address</Label>
                        <Input
                          placeholder="Input Adress"
                          type="text"
                          onChange={(event) => {
                            setAddres(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Full Name</Label>
                        <Input
                          placeholder="input full name "
                          type="text"
                          onChange={(event) => {
                            setFullname(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Class</Label>
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(event) => {
                            setCls(event.target.value);
                          }}
                        >
                          <option>Science</option>
                          <option>Social</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Email</Label>
                        <Input
                          placeholder="input email "
                          type="email"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>Phone</Label>
                        <Input
                          placeholder="input phone number"
                          type="number"
                          onChange={(event) => {
                            setNohp(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="exampleCity">Birthday</Label>
                        <Input
                          id="exampleCity"
                          name="city"
                          md={3}
                          onChange={(event) => {
                            setTtl(event.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label md={3}>Gender</Label>
                        <Form md={5}>
                          <FormGroup>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="male"
                                onChange={(event) => {
                                  setGender(event.target.value);
                                }}
                              />
                              <label class="form-check-label" for="inlineRadio1">
                                Male
                              </label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="female"
                                onChange={(event) => {
                                  setGender(event.target.value);
                                }}
                              />
                              <label class="form-check-label" for="inlineRadio2">
                                Female
                              </label>
                            </div>
                          </FormGroup>
                        </Form>
                      </FormGroup>
                    </Col>
                    <Col md={5}>
                      <Button className="w-100" onClick={registStudent}>
                        Register
                      </Button>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Row>
                      <Col md={5}>
                        <Label>Password</Label>
                        <FormGroup className="d-flex justify-content-between ">
                          <Input
                            placeholder="password"
                            md={3}
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                            disabled
                            value={password}
                          />
                          <Button className="mx-1" onClick={generateSandi}>
                            Generate
                          </Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </Container>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
