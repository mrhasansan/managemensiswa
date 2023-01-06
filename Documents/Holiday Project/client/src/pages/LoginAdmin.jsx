import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import Axios from "axios";
import { Button, Container, Form, FormGroup, Label } from "reactstrap";

function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const navigate = useNavigate();

  const Login = () => {
    Axios.post("http://localhost:3002/loginadmin", {
      username: username,
      password: password,
    }).then((response) => {
      alert("input Sukses");
    });
  };

  const onBtnVisible = () => {
    if (inputType == "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <Container className="bg-light border">
      <div className="  d-flex align-items-center justify-content-center ">
        <Form
          onSubmit={() => {
            navigate("/register");
          }}
        >
          <h1 className="text-center">LOGIN</h1>
          <FormGroup className="d-flex flex-column ">
            <Label className="text-start">USERNAME</Label>
            <input type="text" onChange={(element) => setUsername(element.target.value)} />
          </FormGroup>
          <FormGroup className="d-flex flex-column ">
            <Label className="text-start">PASSWORD</Label>
            <div className="input-grup">
              <input type={inputType} onChange={(element) => setPassword(element.target.value)} />
              <span className="'input-grup-text bg-transparant border-0" onClick={onBtnVisible}>
                <AiOutlineEye />
              </span>
            </div>
          </FormGroup>
          <Button type="submit" className="mb-5 w-100 bg-primary p-2 text-white bg-opacity-75" onClick={Login}>
            LOG IN
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default LoginAdmin;
