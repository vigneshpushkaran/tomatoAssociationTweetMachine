import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";

interface ProtectedRouteProps {
  component: ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        whdwdjiowjdijwiodiiwhdoiw
      </div>
    ),
  });

  return <Component />;
};

export default ProtectedRoute;
