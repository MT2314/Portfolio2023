import React, { useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { Container, Row, Col, Button } from "react-bootstrap";

// Component for displaying welcome message
const WelcomeMessage = () => (
  <span className="message">
    Welcome
  </span>
);

// Component for displaying unauthorized message
const UnauthorizedMessage = () => (
  <span className="message">
    Unauthorized
  </span>
);

// Main component for login
export const Login = ({ setUserVerified, userVerified }) => {
  // State for handling invalid user
  const [invalidUser, setInvalidUser] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = (tokenResponse) => {
    setUserVerified(true);
    console.log(tokenResponse);
  };

  // Function to handle login error
  const handleLoginError = (errorResponse) => {
    setUserVerified(false);
    setInvalidUser(true);
    console.error(errorResponse);
  };

  // Google login hook
  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  });

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await googleLogout();
      setUserVerified(false);
      console.log("Logged out");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  // Render login popup
  return (
    <Container
      fluid="true"
      className="login-container"
    >
      <Row className="login-row">
        {(userVerified || invalidUser) && (
          <Col xs="6" md="6" lg="6">
            {userVerified && <WelcomeMessage />}
            {invalidUser && <UnauthorizedMessage />}
          </Col>
        )}

        <Col
          xs={userVerified ? "6" : "12"}
          md={userVerified ? "6" : "12"}
          lg={userVerified ? "6" : "12"}
          className="login-col"
        >
          {!userVerified ? (
            <Button
              onClick={login}
              variant="success"
              size="lg"
              className="login-button"
              disabled={userVerified && true}
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={handleLogout}
              variant={"danger"}
              size="lg"
              className="logout-button"
              disabled={!userVerified && true}
            >
              Logout
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

// Export default login popup
export default Login;
