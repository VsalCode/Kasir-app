import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar.jsx";
import { Home, Succes } from "./pages/index.jsx";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/succes" element={<Succes />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}