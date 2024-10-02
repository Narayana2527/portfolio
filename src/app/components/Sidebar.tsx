'use client'
import React, { useState } from 'react';
import  './sidebar.module.css';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

export default function Sidebar(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <nav  className={`p-3 sidebar ${isOpen ? 'open' : ''}`}>
            <div className='sidebar'>
                <div className="sidebar-header flex justify-between">
                    <div className="text-2xl font-bold">Portfolio</div>
                    <div className="me-2">
                        {isOpen ? (
                            <RxCross1 className="d-inline h-6 w-6" onClick={toggleSidebar} />
                        ) : (
                            <FiMenu className="w-6 h-6 d-inline" onClick={toggleSidebar} />
                        )}
                    </div>
                </div>  
                <ul  className={`sidenav-links ps-3 pt-2 ${isOpen ? 'block' : 'hidden'} `}>
                    <li><a href="#home">Home</a></li>
                    
                    <li><a href="#about">About Me</a></li>  
                    
                    <li><a href="#portfolio">Portfolio</a></li> 
                    
                    <li><a href="#services">Services</a></li> 
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li> 
                    
                </ul>
            </div>
            
        </nav>
    );
};
