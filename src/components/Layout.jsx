import { Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import Player from "./Player";
import PseudoNavbar from "./PseudoNavbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <Sidebar />

      <PseudoNavbar />

      <Player />
    </div>
  );
};
export default Layout;
