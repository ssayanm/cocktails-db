import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
// import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Pagi from "./components/pagi";
import Filter from "./pages/Filter";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pagi" element={<Pagi itemsPerPage={6} />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
        <Route path="filter" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
