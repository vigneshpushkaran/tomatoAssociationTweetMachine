import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "../../atoms/typography/typography";
import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";

interface headerProps {
  title?: string;
}

const Header = ({ title = "Welcome Page" }: headerProps) => {
  let navigate = useNavigate();

  return (
    <div className="nav-bar">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button onClick={(_e) => navigate("/")} sx={{ color: "#fff" }}>
            Home
          </Button>
          <Button onClick={(_e) => navigate("/tweet")} sx={{ color: "#fff" }}>
            Tweet
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
