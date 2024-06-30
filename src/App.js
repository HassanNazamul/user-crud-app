import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/user-crud-app" element={<Home />} />
        <Route path="/user-crud-app/all" element={<AllUser />} />
        <Route path="/user-crud-app/add" element={<AddUser />} />
        <Route path="/user-crud-app/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
