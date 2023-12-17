import React, { useState } from 'react'
import './Home.css'
import { TbGridDots } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import Mic from './Mic.png'
import { FaCamera } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Navigate, useNavigate } from 'react-router-dom';
import Phone from '../VoiceSearch/Phone';









 function Home({setSearch}){

    const[term ,setTerm] = useState('');
    const[voice,setVoice] = useState(false);

    const clearTerm=()=>{
        setTerm('');
    }
    
    const Open_voice =()=>{
        setVoice(!voice);
    }


    const navgate =useNavigate();

    const gotoSearch =(e)=>{
        e.preventDefault();
        setSearch(term);
        navgate("/search")
    }

    return(
        <>
  
          {voice && <Phone />}

  


        <div className='header'>
            <div>Gmail</div>
            <div>Images</div>
            <div><TbGridDots /></div>
            <div><RxAvatar /> </div>
        </div>


         
        




    <div className='home__content'>

        <div className='logo__Home'>
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
        </div>

        <div className='search-bar'>
            <form id="form" onSubmit={gotoSearch}>
                <FaSearch   className='icons' / >
                <input type='text' id="search" value={term} onChange={(e)=>setTerm(e.target.value)} required/>
                {
                    term && <RxCross1 onClick={clearTerm} />
                }
                <img src={Mic} style={{height:"32px"}} id="mic"className='icons' onClick={Open_voice}  />
                <FaCamera  className='icons' /> 
            </form>
        </div>

       


        <div className='btns'>
            <button className='btn'>Google Search</button>
            <button className='btn'>I'm feeling lucky</button>
        </div>



    </div>


    


        </>
    )

 }
 export default Home