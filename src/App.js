import HomeTemplate from "./template/HomeTemplate";
import DashboardStudent from "./page/DashboardStudent/DashboardStudent";
import ListCourseItem from "./page/ListCourseItem/ListCourseItem"

import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
//route
import {
  Routes,
  Route,

} from "react-router-dom";
//animaion aos
import AOS from 'aos';

import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Courses from "./page/Courses/Courses";
import Feature from "./page/Feature/Feature";
import Dashboard from "./page/Dashboard/Dashboard";
import CourseItemDetail from "./page/CourseItemDetail/CourseItemDetail";


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
export const history = createBrowserHistory({ window });
function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/home" element={<HomeTemplate Component={<Home />} />} />
        <Route path="/dashboardStudent/*" element={<DashboardStudent />} />
        <Route path="/course/:courseId" element={<HomeTemplate Component={<ListCourseItem />} />} />
        <Route path="/course-detail/:courseId" element={<HomeTemplate Component={<CourseItemDetail />} />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/courses" element={<HomeTemplate Component={<Courses />} />} />
        <Route path="/feature" element={<HomeTemplate Component={<Feature />} />} />
        <Route path="/dashboard" element={<HomeTemplate Component={<Dashboard />} />} />
        <Route path="" element={<HomeTemplate Component={<Home />} />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
