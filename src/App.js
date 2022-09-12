import HomeTemplate from "./template/HomeTemplate";
import DashboardStudent from "./page/DashboardStudent/DashboardStudent";

//route
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//
//animaion aos
import AOS from 'aos';

// font awesomIcon
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
library.add(fab, faHouse, faUser)
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
        <Route path="" element={<HomeTemplate Component={<Home />} />} />
        <Route path="/dashboardStudent/*" element={<DashboardStudent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
