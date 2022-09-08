import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Room from "./components/Room";
import SingleRoom from "./pages/SingleRoom";
import Contact from "./pages/Contact";
import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
  <>
  <Navbar />
  <Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/rooms/" element={<Rooms/>} />
  <Route exact path="/rooms/:slug" element={<SingleRoom/>} />
  <Route exact path="/contact/" element={<Contact/>} />
  </Routes>
  </>
  );
}

export default App;
