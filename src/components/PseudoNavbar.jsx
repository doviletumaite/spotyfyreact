import { Container, Button, Navbar } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'

const PseudoNavbar = ({ history, location, match }) => {
  return (
    <Container>
     <Navbar>
     <div className="nav-artist">
        <div className="main-scroll">
          <div className="arrows">
         
            <Button type="button" className="btn btn-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 172 172"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path d="M120.26563,10.25281c-1.78719,0.05375 -3.48031,0.80625 -4.73,2.08281l-68.8,68.8c-2.6875,2.6875 -2.6875,7.04125 0,9.72875l68.8,68.8c1.72,1.80062 4.28656,2.52625 6.70531,1.89469c2.40531,-0.63156 4.28656,-2.51281 4.91813,-4.91813c0.63156,-2.41875 -0.09406,-4.98531 -1.89469,-6.70531l-63.93563,-63.93563l63.93563,-63.93562c2.02906,-1.97531 2.64719,-4.99875 1.54531,-7.61906c-1.11531,-2.60688 -3.70875,-4.27313 -6.54406,-4.1925z"></path>
                  </g>
                </g>
              </svg>
            </Button>

            <Button type="button" className="btn btn-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 172 172"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path d="M51.53281,10.25281c-2.80844,0 -5.32125,1.70656 -6.36938,4.3c-1.06156,2.59344 -0.43,5.56312 1.57219,7.51156l63.93562,63.93562l-63.93562,63.93563c-1.80063,1.72 -2.52625,4.28656 -1.89469,6.70531c0.63156,2.40531 2.51281,4.28656 4.91813,4.91813c2.41875,0.63156 4.98531,-0.09406 6.70531,-1.89469l68.8,-68.8c2.6875,-2.6875 2.6875,-7.04125 0,-9.72875l-68.8,-68.8c-1.30344,-1.33031 -3.07719,-2.08281 -4.93156,-2.08281z"></path>
                  </g>
                </g>
              </svg>
            </Button>
          </div>

<Link to="/album">
<Button variant="dark" className={location.pathname === '/album' ? 'nav-link active' : 'nav-link'}>album</Button>
</Link>
<Link to="/artist">
<Button variant="dark" className={location.pathname === '/artist' ? 'nav-link active' : 'nav-link'}>artist</Button>
</Link>
          <Button
            className="navbar-toggler my-2 mx-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <a className="navbar-brand" href="#">
              <img src="./covers/utent.png" height="40" />
            </a>
            <p>Name Surname</p>

            <span className="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 172 172"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path d="M86,131.86667c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-57.33333,-57.33333c-1.63973,-1.63973 -2.1328,-4.10507 -1.24413,-6.24933c0.88293,-2.14427 2.98133,-3.53747 5.2976,-3.53747h114.66667c2.31627,0 4.41467,1.3932 5.2976,3.53747c0.88867,2.14427 0.3956,4.6096 -1.24413,6.24933l-57.33333,57.33333c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987z"></path>
                  </g>
                </g>
              </svg>
            </span>
          </Button>
        </div>
      </div>

     </Navbar>
    </Container>
  );
};
export default withRouter(PseudoNavbar);
