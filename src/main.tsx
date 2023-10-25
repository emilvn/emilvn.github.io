import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import './styles/index.css';
import Layout from "./layout/Layout.tsx";
import Projects from "./pages/Projects.tsx";
import ReactGA from 'react-ga';

const trackingId = "G-CQ9XS5M7DS";
ReactGA.initialize(trackingId);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
            </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
