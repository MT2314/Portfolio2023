import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Container, Navbar, Nav, NavDropdown, Row } from "react-bootstrap";
import LoginPopup from "./Components/Authentication/loginPopup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import routes from "./routes";

// Navigation
export const Navigation = () => {
  // Authentication
  const [userVerified, setUserVerified] = useState(false);
  // Use the useLocation hook to get the current location
  const location = useLocation();
  // Use the useOutlet hook to get the current outlet
  const currentOutlet = useOutlet();
  // Find the route that matches the current location and get its nodeRef
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <GoogleOAuthProvider clientId="900944504878-7ao7scmu0bg2ciggua360q4bi8joetn9.apps.googleusercontent.com">
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {routes.map((route) => (
                <Nav.Link
                  key={route.path}
                  as={NavLink}
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "active nav-item" : "nav-item"
                  }
                  end
                >
                  {route.name}
                </Nav.Link>
              ))}
              <NavDropdown title="Dev Tools" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <Container fluid="true">
                  <Row>
                    <LoginPopup
                      setUserVerified={setUserVerified}
                      userVerified={userVerified}
                    />
                  </Row>
                </Container>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nav-bar"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-item">
            {routes.map((route) => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                className={({ isActive }) =>
                  isActive ? "active nav-item" : "nav-item"
                }
                end
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <div className="App">
        <Container className="container" fluid>
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              {(state) => (
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </div>
    </GoogleOAuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
