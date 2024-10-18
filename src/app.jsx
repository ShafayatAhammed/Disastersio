import Navbar from "./components/navbar.jsx";
import Offcanvas from "./components/offcanvas.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Offcanvas />
      <Outlet />
    </>
  );
};

export default App;
