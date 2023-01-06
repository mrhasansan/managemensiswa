import "./App.css";
import LoginAdmin from "./pages/LoginAdmin";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AttendanceList from "./pages/AttendanceList";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Times from "./pages/Times";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginStudents from "./pages/LoginStrudents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to={"/loginstudents"}> LoginSiswa || </Link>
          <Link to={"/loginadmin"}> LoginAdmin || </Link>
          <Link to={"/register"}> Register || </Link>
          <Link to={"/dashboard"}>Dashboard || </Link>
          <Link to={"/times"}>Times || </Link>
          <Link to={"/attendancelist"}> Attendance</Link>
          <Link to={"/listtotal"}> Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/loginstudents" element={<LoginStudents />} />
          <Route path="/listtotal" element={<Home />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/times" element={<Times />} />
          <Route path="/attendancelist" element={<AttendanceList />} />
          <Route path="*" element={<h1> YOU ARE NOT IN A PAGE OR PAGE NOT FOUND </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
