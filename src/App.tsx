import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeContainer, TweetContainer } from "./components/pages";
import Header from "./components/ui/organisms/header/header";
import "./App.scss";

export default function App() {
  console.log(process.env.HOME_PAGE_TITLE);
  return (
    <>
      <Router>
        <Header title={process.env.HOME_PAGE_TITLE}></Header>
        <div className="base">
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/tweet" element={<TweetContainer />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
