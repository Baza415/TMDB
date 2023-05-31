import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header_Navbar from "./Header_Navbar";
import Movie from "./Movie";
import Home from "./Home";
import Serials from "./Serials";
import People from "./People";
import Card_Main from "./Card";
import Card_2 from "./Card_2";
import React, {useState} from "react";
export const MyContext = React.createContext(null) 


function App() {
    const [tv,setTv] = useState('tv')

    return (
    <>
        <MyContext.Provider value={{tv, setTv}}>
            <BrowserRouter>
                <Header_Navbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/movie'} element={<Movie/>}/>
                    <Route path={'/serial'} element={<Serials/>}/>
                    <Route path={'/people'} element={<People/>}/>
                    <Route path={'/Movie'} element={<Movie/>}/>
                    <Route path={'/card/:id'} element={<Card_Main/>}/>
                    <Route path={'/card_2/:id'} element={<Card_2/>}/>
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>

    </>
  );
}

export default App;
