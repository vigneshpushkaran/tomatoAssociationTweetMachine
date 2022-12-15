import * as React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <Auth0Provider
    domain="dev-ccl69nx0.auth0.com"
    clientId="cAItSQllt3xEq5Y6zQJMH7C7AgFswOue"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
