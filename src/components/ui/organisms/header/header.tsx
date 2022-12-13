import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "../../atoms/typography/typography";
import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
interface headerProps {
  title?: string;
}

const Header = ({ title = "Welcome Page" }: headerProps) => {
  let navigate = useNavigate();
  const { loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className="nav-bar">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {!user ? (
            <Button
              onClick={(_e) => loginWithRedirect()}
              sx={{ color: "#fff" }}
            >
              Login
            </Button>
          ) : (
            <>
              <Button onClick={(_e) => navigate("/")} sx={{ color: "#fff" }}>
                Home
              </Button>
              <Button
                onClick={(_e) => navigate("/tweet")}
                sx={{ color: "#fff" }}
              >
                Tweet
              </Button>
              <Button
                onClick={(_e) => logout({ returnTo: window.location.origin })}
                sx={{ color: "#fff" }}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
