import Header from "./components/header/header.jsx";
import Offcanvas from "./components/offcanvas/offcanvas.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Offcanvas />
      <Outlet />
    </>
  );
};

export default App;
