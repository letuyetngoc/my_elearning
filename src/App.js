import HomeTemplate from "./template/HomeTemplate";
import DashboardStudent from "./page/DashboardStudent/DashboardStudent";
import ListCourseItem from "./page/ListCourseItem/ListCourseItem"

//route
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//
//animaion aos
import AOS from 'aos';

import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Courses from "./page/Courses/Courses";
import Dashboard from "./page/Dashboard/Dashboard";
import Feature from "./page/Feature/Feature";

//aos
AOS.init(
  {
    once: true,
    offset: 0,
    duration: 1000,
    anchorPlacement: 'top-center',
  }
);
//

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeTemplate Component={<Home />} />} />
        <Route path="/dashboardStudent/*" element={<DashboardStudent />} />
        <Route path="/course:courseId" element={<HomeTemplate Component={<ListCourseItem />} />} />
        <Route path="/login/*" element={<Login />} />
        {/* <Route path="/feature/*" element={<HomeTemplate Component={<Feature />} />} />
        <Route path="/courses/*" element={<HomeTemplate Component={<Courses />} />} />
        <Route path="/dashboard/*" element={<HomeTemplate Component={<Dashboard />} />} /> */}
        <Route path="/register/*" element={<Register />} />
        <Route path="" element={<HomeTemplate Component={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
