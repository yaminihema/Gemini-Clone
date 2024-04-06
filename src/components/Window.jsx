import React, { useContext, useState } from 'react'
import './Window.css'
import { FaCompass,FaLightbulb, FaCode,FaMicrophone,FaUserCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { GiGemini } from "react-icons/gi";
import { IoSend } from "react-icons/io5";
import { Context } from '../context/Context';

const Window = () => {
    const{onSent,recentPrompt,prevPrompts, showResult,loading,resultData,setInput,input}=useContext(Context)


    console.log(recentPrompt)
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src="https://pbs.twimg.com/media/FjLZiZ_acAIq-lf.jpg" alt=" "/>


        </div>
        <div className='main-container'>
            {!showResult
            ?<>
            
            <div className='greet'>
                <p><span>Hello, Yamini</span></p>
                <p>How can I help you today? </p>

            </div>
            <div className='cards'>
                <div className='card'>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <FaCompass size={25} className="img"  />
                </div>

            
                <div className='card'>
                <p>Briefly summarise this concept: urban planning</p>
                <FaLightbulb size={25} className="img" />

                </div>
                <div className='card'>
                <p>Brainstrom team bonding activities for our work planning</p>
                <AiFillMessage size={25} className="img" />

                </div>
                <div className='card'>
                <p>Improve the readability of the following code</p>
                <FaCode size={25} className="img" />

                </div>
            </div>
            </>
            :<div className='result'>
                <div className='result-tittle'>
                  <img src="https://pbs.twimg.com/media/FjLZiZ_acAIq-lf.jpg" alt=''/>
                   <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                <img src='gemini_icon.png' alt=''/>
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
}
                </div>
              </div> 
}  
            
            <div className='main-bottom'>
                <div className='search-box'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                    <GrGallery className='gallery'/>
                    <FaMicrophone className='gallery' />
                    {input?<IoSend onClick={()=>onSent(input)}  />:null}



                    </div>

                </div>
                <p className='bottom-info'>
                 Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.   
                </p>

            </div>

           
        

    </div>
    </div>
  )
}

export default Window