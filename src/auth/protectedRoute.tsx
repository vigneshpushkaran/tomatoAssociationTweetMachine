import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import CircularProgress from '@mui/material/CircularProgress';
interface ProtectedRouteProps {
  component: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
       <CircularProgress/>
      </div>
    ),
  });

  return <Component />;
};

export default ProtectedRoute;
