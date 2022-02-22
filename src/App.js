import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Project from './Pages/Project';
import Courses from './Pages/Courses';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project" element={<Project />} />
            <Route path="course" element={<Courses />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;