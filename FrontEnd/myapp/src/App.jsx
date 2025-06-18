import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import EnrollStudent from "./Component/EnrollStudent";
import AllStudent from "./Component/AllStudent";
import About from "./Component/About";
import EditStudent from "./Component/EditStudent";
import SearchStud from "./Component/SearchStud";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="home" element={<Home></Home>}></Route>
        <Route
          path="addstudent"
          element={<EnrollStudent></EnrollStudent>}
        ></Route>
        <Route path="allstudent" element={<AllStudent></AllStudent>}></Route>
        <Route
          path="/editstudent/:enrollID"
          element={<EditStudent></EditStudent>}
        ></Route>
        <Route
          path="/search/:enrollID"
          element={<SearchStud></SearchStud>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
