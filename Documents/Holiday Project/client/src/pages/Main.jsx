import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
function Main() {
  const [role, setRole] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3002/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      <h1>Users</h1>
    </div>
  );
}

export default Main;
