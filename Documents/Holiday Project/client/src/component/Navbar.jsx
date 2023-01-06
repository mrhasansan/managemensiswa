import React from "react";
import { Button, Container, Nav } from "reactstrap";

function Navbar() {
  return (
    <Nav>
      <Container>
        <Button className="text-end">LOG OUT</Button>
      </Container>
    </Nav>
  );
}

export default Navbar;
