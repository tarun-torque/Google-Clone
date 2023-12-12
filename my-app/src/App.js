import { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import SearchPage from './SearchPage/SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
const[searchTerm,setSearchTerm] =useState();

const setSearch=(term)=>{
  setSearchTerm(term)
}

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home  setSearch={setSearch} />} />
           <Route path="search" element={<SearchPage searchTerm={searchTerm} />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}



export default App;