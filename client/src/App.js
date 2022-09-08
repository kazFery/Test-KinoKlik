import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PersonList from "./components/PersonList";
import PlanteList from "./components/PlanteList";
import StarshipList from "./components/StarshipList";
import Search from "./components/Search";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/people" element={<PersonList />} />
          <Route path="/planets" element={<PlanteList />} />
          <Route path="/starships" element={<StarshipList />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
