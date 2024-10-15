import Header from "./components/header/header.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
