import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import LaFirma from './sections/LaFirma';
import Servicios from './sections/Servicios';
import CasosDeExito from './sections/CasosExito';
import Articulos from './sections/Articulos';
import AreaClientes from './sections/AreaClientes';
import Talento from './sections/Talento';
import './App.css';
import { Articulo1 } from './sections/Articulo1';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AnimatedNavbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/la-firma" element={<LaFirma />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/casos-de-exito" element={<CasosDeExito />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/area-clientes" element={<AreaClientes />} />
          <Route path="/talento" element={<Talento />} />
          <Route path="/articulo1" element={<Articulo1 />} />
        </Routes>
      </div>
    </Router>
  );
};

const AnimatedNavbar = () => {
  const location = useLocation();
  return <Navbar key={location.pathname} />;
};

export default App;


