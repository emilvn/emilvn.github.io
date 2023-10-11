import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio.tsx';
import './styles/index.css';
import Layout from "./components/Layout/Layout.tsx";
import Projects from "./components/Projects/Projects.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Portfolio />} />
                <Route path="projects" element={<Projects />} />
            </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
