import { Row, Col } from "react-bootstrap";
import Home from "./Home";
import Player from "./Player";
import PseudoNavbar from "./PseudoNavbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Row>
      <Col lg={3}>
        <Sidebar />
      </Col>
      <Col lg={9}>
        <PseudoNavbar />
        <Home/>
      </Col>
     <Player/>
    </Row> 
    
  );
};
export default Layout;
