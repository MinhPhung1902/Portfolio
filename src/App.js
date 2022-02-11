import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import Home from './pages/Home'
import ExplorePage from './pages/ExplorePage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import './index.css'

const App = () => {
  return <div className='bg-black'>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Explore' element={<ExplorePage/>}></Route>
          <Route path='/Projects' element={<ProjectsPage />}></Route>
          <Route path='/Contact' element={<ContactPage />}></Route>
      </Routes>
  </div>;
};

export default App;
