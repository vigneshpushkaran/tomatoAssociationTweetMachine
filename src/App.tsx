import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeContainer, TweetContainer } from "./components/pages";
import Header from "./components/ui/organisms/header/header";
import ProtectedRoute from "./auth/protectedRoute";
import "./App.scss";
import { withAuth0 } from "@auth0/auth0-react";

function App() {
  console.log(process.env.HOME_PAGE_TITLE);
  return (
    <>
      <Router>
        <Header title={process.env.HOME_PAGE_TITLE}></Header>
        <div className="base">
          <Routes>
            <Route path="/" element= {<ProtectedRoute component={HomeContainer}/>}/>
            <Route path="/tweet" element={<TweetContainer />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default withAuth0(App);
