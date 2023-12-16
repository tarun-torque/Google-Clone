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
import Loading from "../Loading/Loading";
import Mic from '../Home/Mic.png'



function SearchPage({searchTerm}){
// loading--------------------

// const [isLoading ,setIsLoading] = useState(false);




// -------------------------Search from search Page------------------
    
// ---------------------Clear Term------------------------------

const [clear,setClear] =useState('');

const clearTerm=()=>{
    setClear('')
}



// -----------------API call----------------------

const[apidata, setApidata] = useState({})
    const  apicall = async ()=>{
        try{
            const res= await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDJrS5nV9N15ILC-6uALB_acL-_cKCeMDs&cx=12c1cda0e02534ff9&q=${searchTerm}`);
           
            setApidata(res.data)
            console.log(res.data)
            console.log(res.data.searchInformation.totalResults)
            // console.log(res.data.items[0].title)

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

    {
        !apidata && <Loading />
    }




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
             {/* <FaMicrophone/> */}
             <img src={Mic} alt="" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png" alt="" />
             
             {/* <FaCamera /> */}
             
            
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
            <p>About {apidata ?.searchInformation ?.formattedTotalResults} results({apidata ?.searchInformation ?.formattedSearchTime} seconds) </p> 
        </div>


     <div className="data">

    {
        apidata?.items?.map((item)=>{
            return(

                <div className="results">
                     <div className="title"> {item?.displayLink}</div>
                     <div className="link"><a href={item?.link}>{item?.title}</a></div>
                     <p className="snippet" dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}    /> 
                     <p>{item?.formattedUrl}</p>
                </div>
            )
        })
    }
     </div>

        

     </div>


        </>
    )
}
export default SearchPage