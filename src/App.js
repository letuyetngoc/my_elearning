import HomeTemplate from "./template/HomeTemplate";
import AOS from 'aos';
// font awesomIcon
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faHouse)
//aos
AOS.init(
  {
    once: true,
    offset: 0,
    duration: 1000,
    anchorPlacement: 'top-center',
  }
);

function App() {
  return (
    <div>
      <HomeTemplate />
    </div>
  );
}

export default App;
