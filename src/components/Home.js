import {
  Navbar,
  NavbarBrand,
  NavDropdown,
  Container,
  NavLink,
  Nav,
} from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import MotorcycleOutlinedIcon from "@material-ui/icons/MotorcycleOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { Button } from "@material-ui/core";
import ColouredButton from "./ColouredButton";

const Home = () => {
  return (
    <section className="HomeSection" id="Home">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <span id="Hamb">☰</span>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <NavDropdown title="Special Dishes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Specialty1">
                  Malabar Fish Biryani
                </NavDropdown.Item>
                <NavDropdown.Item href="#Specialty2">
                  Tandoori Lamb Chops
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">
              <Navbar.Brand href="#Home">
                <img
                  src="/images/KCGLogo.jpg"
                  width="80"
                  height="80"
                  className="d-inline-block align-top"
                  alt="KCG Logo"
                />
              </Navbar.Brand>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#Menu">Menu</Nav.Link>
              <Nav.Link href="#Team">Team</Nav.Link>
              <Nav.Link href="#Form">Reservation</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <SearchIcon />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="HomeContainer">
        <div className="text">
          <h1>We Hate</h1>
          <h1>Delicioso Foods!</h1>
          <div className="btns">
            <ColouredButton text="Explore Menu" />
            <Button variant="outlined">
              <SlowMotionVideoIcon /> Play Video
            </Button>
          </div>
          <div className="logos">
            <div>
              <MotorcycleOutlinedIcon />
              <p>Fast Delivery</p>
            </div>
            <div>
              <FastfoodOutlinedIcon />
              <p>Fresh and Satisfying Food</p>
            </div>
            <div>
              <ChatBubbleOutlineOutlinedIcon />
              <p>Chat and Order</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Bhuna.jpg"></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
