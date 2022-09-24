import React from 'react';
import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate";
import DashboardStudent from "./page/DashboardStudent/DashboardStudent";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Courses from "./page/Courses/Courses";
import Feature from "./page/Feature/Feature";
import Dashboard from "./page/Dashboard/Dashboard";
import CourseItemDetail from "./page/CourseItemDetail/CourseItemDetail";
import Profile from "./page/DashboardStudent/Profile";
import InrollCourses from "./page/DashboardStudent/InrollCourses";
import UpdateInfo from "./page/DashboardStudent/UpdateInfo";
import DashboardAdmin from "./page/DashboardAdmin/DashboardAdmin";
import ListCourseItem from "./page/ListCourseItem/ListCourseItem"
import Home from "./page/Home/Home"
import ListUsers from "./page/DashboardAdmin/ListUsers";
import Modal from './components/Modal';
import { ToastContainer } from 'react-toastify';
import AddUser from './page/DashboardAdmin/AddUser';
import AllCourses from './page/DashboardAdmin/AllCourses';
import AddCourse from './page/DashboardAdmin/AddCourse';
import ActiveCourse from './page/DashboardStudent/ActiveCourse';

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
      <ToastContainer position="top-center"
        autoClose={5000}
        closeButton={false}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: '15px' }}
      />
      <Modal />
      <Routes>
        <Route path="/home" element={<HomeTemplate Component={<Home />} />} />

        <Route path="/courses" element={<HomeTemplate Component={<Courses />} />} />
        <Route path="/feature" element={<HomeTemplate Component={<Feature />} />} />
        <Route path="/dashboard" element={<HomeTemplate Component={<Dashboard />} />} />

        <Route path="/course/:courseId" element={<HomeTemplate Component={<ListCourseItem />} />} />
        <Route path="/course-detail/:courseId" element={<HomeTemplate Component={<CourseItemDetail />} />} />

        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />


        <Route path="/dashboardStudent/*" element={<DashboardStudent />} />
        <Route path="/dashboardStudent/profile" element={<DashboardStudent Component={<Profile />} />} />
        <Route path="/dashboardStudent/inroll-courses" element={<DashboardStudent Component={<InrollCourses />} />} />
        <Route path="/dashboardStudent/updateInfo" element={<DashboardStudent Component={<UpdateInfo />} />} />
        <Route path="/dashboardStudent/active-course" element={<DashboardStudent Component={<ActiveCourse />} />} />

        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/dashboardAdmin/listUsers" element={<DashboardAdmin Component={<ListUsers />} />} />
        <Route path="/dashboardAdmin/addUser" element={<DashboardAdmin Component={<AddUser />} />} />
        <Route path="/dashboardAdmin/allCourses" element={<DashboardAdmin Component={<AllCourses />} />} />
        <Route path="/dashboardAdmin/addCourse" element={<DashboardAdmin Component={<AddCourse />} />} />

        <Route path="" element={<HomeTemplate Component={<Home />} />} />

      </Routes>
    </HistoryRouter>
  );
}

export default App;
