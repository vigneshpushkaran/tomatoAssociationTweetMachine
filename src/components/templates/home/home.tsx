import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./home.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "../../ui/atoms/typography/typography";

export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    isAuthenticated ? (
      <>
        <img src={user?.picture} alt={user?.name} />
        <Typography variant="h6">Welcome to Demo, {user?.name}</Typography>
        <Typography>{user?.email}</Typography>
      </>
    ) : <></>
  );
}
