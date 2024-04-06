import React,{useState} from 'react'
import './Sidebar.css'
import { TfiAlignJustify, TfiPlus, TfiSettings } from "react-icons/tfi";
import { FiMessageCircle } from "react-icons/fi";
import { BsQuestionLg } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { useContext } from 'react';
import { Context } from '../context/Context';

const Sidebar = () => {
    const [extended,setExtended]=useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt=async(prompt)=>{
      setRecentPrompt(prompt) 
      await onSent(prompt)
    }

  return (
    
    <div className='Sidebar'>
        <div className='top'>
        <TfiAlignJustify onClick={()=>setExtended(prev=>!prev)} className='menu' size={20} />
          <div onClick={()=>newChat()} className='new-chat'>
          <TfiPlus />
          {extended?<p>New Chat</p>:null}
          </div>
          {extended 
           ?<div className='recent'>
            <p className='recent-tittle'>Recent</p>
            {prevPrompts.map((item,index)=>{
              return(
                <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                  <FiMessageCircle />
                  <p>{item.slice(0,18)}...</p>

                </div>
              )
            })} 
            
            </div>
            :null
            } 
          
        </div>
        <div className='bottom'>
          <div className='bottom-item recent-entry '>
          <BsQuestionLg />
          {extended?<p>Help</p>:null}

          </div>
          <div className='bottom-item recent-entry '>
          <AiOutlineHistory />
          {extended?<p>Activity</p>:null}

          </div>
          <div className='bottom-item recent-entry '>
          <TfiSettings />
          {extended?<p>Setting</p>:null}

          </div>


        </div>

    </div>
  )
}

export default Sidebar