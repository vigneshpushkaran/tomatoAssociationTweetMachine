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
    domain={process.env.DOMAIN as string}
    clientId={process.env.CLIENTID as string}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
