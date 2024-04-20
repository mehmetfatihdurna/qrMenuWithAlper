import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import NoPage from './components/NoPage.jsx';
import './index.css'
import Admin from './components/Admin.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/*' element={<NoPage/>}/>
      <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
  </BrowserRouter>,
)
