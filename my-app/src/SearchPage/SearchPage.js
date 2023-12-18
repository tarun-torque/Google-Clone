import React, { useEffect, useState } from "react";
import './SearchPage.css'
import { RxCross1 } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { IoSettings } from "react-icons/io5";
import axios from 'axios';
import Loading from "../Loading/Loading";
import Mic from '../Home/Mic.png'
import { Link } from "react-router-dom";
import { recognition } from "../VoiceSearch/voiceFxn";




function SearchPage({searchTerm}){
// loading--------------------

// const [isLoading ,setIsLoading] = useState(false);




// -------------------------Search from search Page------------------
const [newTerm,setNewTerm] =useState(searchTerm);

console.log(newTerm);


const searchAgain =()=>{
    
}
    
// ---------------------Clear Term------------------------------


const clearTerm=()=>{
    setNewTerm('')
}



// -----------------API call----------------------

const[apidata, setApidata] = useState({})
    const  apicall = async ()=>{
        try{
            
            const res= await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDJrS5nV9N15ILC-6uALB_acL-_cKCeMDs&cx=12c1cda0e02534ff9&q=${newTerm}`);

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

    },[newTerm])

    
    
    return(
        <>

   




    <div className="search__header">
        <div className="search__logo">
        <Link to="/">   <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/> </Link> 
    </div>

        <div className="search-input">
             <form id="secondForm" onSubmit={searchAgain} >
                <input type="text" value={newTerm}  onChange={(e)=>setNewTerm(e.target.value)} id="second-search"/>
                
                {
                    newTerm && <RxCross1 onClick={clearTerm} />
                }
             </form>
            
             <img src={Mic} alt=""  />
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png" alt="" />
             
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

        

  {
    !apidata ? <div className="about-result">
    <p>About {apidata ?.searchInformation ?.formattedTotalResults} results({apidata ?.searchInformation ?.formattedSearchTime} seconds) </p> 
</div>  : <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" ,fontWeight:900 , backgroundColor:"yellow"}}>
    <p>Dailt limit of search queryies is exhausted try later </p>
    <p>{apidata?.error?.message}</p>
    </div>
  }
        


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