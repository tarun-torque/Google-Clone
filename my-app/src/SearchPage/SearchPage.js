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
    
// ---------------------Clear Term------------------------------

const [clear,setClear] =useState('');

const clearTerm=()=>{
    setClear('')
}


const[apidata, setApidata] = useState({})

// -----------------API call----------------------
 
    const  apicall = async ()=>{
        try{
            const res= await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA_toGoJ9frU-FekmkTcqx1hV7AJDXxV9I&cx=f4f6068be7b934d41&q=${searchTerm}`);
            setApidata(res.data)
            console.log(res)
            console.log(res.data)
            console.log(res.data.searchInformation.totalResults)
            console.log(res.data.items[0].title)
            
            
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        apicall();
    },[])
    return(
        <>

    <div className="search__header">
        <div className="search__logo">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/>
        </div>

        <div className="search-input">
             <form id="secondForm" >
                <input type="text" value={searchTerm} onChange={(e)=>setClear(e.target.value)} id="second-search"/>
                {
                    clear && <RxCross1 onClick={clearTerm} />
                }
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




     <div className="show-data">
        <div className="about-result">
            <p>About {apidata.searchInformation.searchTime} </p> 
        </div>
     </div>


        </>
    )
}
export default SearchPage