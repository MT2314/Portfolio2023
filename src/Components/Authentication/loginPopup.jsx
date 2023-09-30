import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { Button } from "react-bootstrap";

export const LoginPopup = ({ setUserVerified, userVerified }) => {
  // Login
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setUserVerified(true);
      console.log(tokenResponse);
    },
    onError: (errorResponse) => console.error(errorResponse),
  });
  // Logout
  const logout = () => {
    googleLogout(() => {
      setUserVerified(false);
      console.log("Logged out");
    }).catch((error) => {
      console.error("Logout failed: ", error);
    });
  };

  return (
    <>
      {!userVerified && (
        <Button onClick={() => login()} variant="success">
          Google Login{" "}
        </Button>
      )}
      {userVerified && (
        <Button onClick={() => logout()} variant="danger">
          Logout
        </Button>
      )}
    </>
  );
};

export default LoginPopup;
