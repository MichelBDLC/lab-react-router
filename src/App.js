import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />}/>
        <Route path="/staff" element={<StaffList employees={employees} />}/>
        <Route path="/pets" element={<PetsList pets={pets} />}/>
        <Route path="/pets/:kind" element={<PetsList pets={pets} />}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;


