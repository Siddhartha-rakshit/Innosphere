import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import IdeaPage from './components/IdeaPage';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Dashboard from './components/Dashboard';
import TodoList from './components/TodoList';
import Homepage from './pages/Homepage';
import Ideapage from './pages/Ideapage';

const App = () => {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/idea" element={<Ideapage />} />
      </Routes>
    </Router>
  )
}

export default App;
