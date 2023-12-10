import React, { useEffect, useState } from "react";
import './SearchPage.css'
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { IoSettings } from "react-icons/io5";
import axios from 'axios';



function SearchPage({searchTerm}){
// -------------------------Search from search Page------------------
    const [searchPage,setSearchPage] =useState();

    const searchOutput =()=>{
        setSearchPage(searchTerm)
    }
    console.log(searchPage)
    // ---------------------------------------------------

    // -----------------API call-------------------------------
 
    const apicall = async ()=>{
        try{
            const res =await axios.get("")



        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        apicall();
    })
    return(
        <>


    <div className="search__header">
        <div className="search__logo">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/>
        </div>

        <div className="search-input">
             <form id="secondForm" onSubmit={searchOutput}>
                <input type="text" value={searchTerm} onChange={(e)=>setSearchPage(e.target.value)} id="second-search"/>
             </form>
             <FaMicrophone/>
             <FaCamera />
             <FaSearch/>
            
        </div>


        <div className="icons">
            <IoSettings />
            <TbGridDots/>
            <RxAvatar />
        </div>


    </div>


    <div className="subHeader">
        <p>All</p>
        <p>images</p>
        <p>Videos</p>
        <p>News</p>
        <p>Shopping</p>
    </div>

    <hr/>
        </>
    )
}
export default SearchPage