import React, { useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

// Component for displaying welcome message

const ALLOWED_USERS = ["tkachuk2314@gmail.com"];

const WelcomeMessage = () => <span className="message">Welcome</span>;

// Component for displaying unauthorized message
const UnauthorizedMessage = () => <span className="message">Unauthorized</span>;

const getUserInfo = async (accessToken) => {
  const response = await axios.get(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
  const user = response.data;

  if (ALLOWED_USERS.includes(user.email)) return user;
  return null;
};

// Main component for login
export const Login = ({ setUserVerified, userVerified }) => {
  // State for handling invalid user
  const [invalidUser, setInvalidUser] = useState(false);

  // Function to handle login
  const handleLogin = (tokenResponse) => {
    const { access_token } = tokenResponse;
    getUserInfo(access_token).then((userInfo) => {
      if (!userInfo) handleLoginError("NOT AUTHORIZED");
      else {
        setUserVerified(true);
        setInvalidUser(false);
      }
    });
  };

  // Function to handle login error
  const handleLoginError = (errorResponse) => {
    setUserVerified(false);
    setInvalidUser(true);
    console.error(errorResponse);
  };

  // Google login hook
  const login = useGoogleLogin({
    onSuccess: handleLogin,
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
    <Container fluid="true" className="login-container">
      <Row className="login-row">
        {(userVerified || invalidUser) && (
          <Col xs="6" md="6" lg="6">
            {userVerified && <WelcomeMessage />}
            {invalidUser && <UnauthorizedMessage />}
          </Col>
        )}

        <Col
          xs={userVerified || invalidUser ? "6" : "12"}
          md={userVerified || invalidUser ? "6" : "12"}
          lg={userVerified || invalidUser ? "6" : "12"}
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
