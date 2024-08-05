import { Avatar, Badge, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import gsap from 'gsap';

function Navbar() {

    useEffect(() => {
        gsap.to("#box", { x: 50, duration: 1 });  // Corrected the selector
      }, []);
    useEffect(() => {
        gsap.to("#box2", { x: -50, duration: 1 });  // Corrected the selector
      }, []);
  return (
    <div className='px-5 z-50 py-[0.8rem] bg-orange-800 lg:px-20 flex justify-between shadow-sm'>
        
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <span id='box' className='logo font-semibold text-gray-300 text-2xl'>
                    Foodies
                </span>
            </div>

            
        

        <div id='box2' className='flex items-center space-x-2 lg:space-x-10'>
            <div>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            <div className=''>
                <Avatar sx={{bgcolor:"white",color:pink.A400}}>M</Avatar>
            </div>
            <div className=''>
                <Badge color='blue' badgeContent={3}>
                <LunchDiningIcon sx={{fontSize:"1.5rem"}}>M</LunchDiningIcon>
                </Badge>
            </div>
        </div>

    </div>
  )
}

export default Navbar