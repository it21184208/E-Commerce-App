import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    return (
        <header className="w-full bg-pink-200 flex items-center justify-between fixed top-0 left-0 z-[100] drop-shadow p-5">
           {/* left header */}
           <div className="flex items-center">

            <IconButton>
            <MenuIcon
            sx={{
                color:'text-green-600',
            }}/>

            </IconButton>

            <h1 
            className=" font-semibold text-lg ml-2">
                AUK <span className="text-green-600">DEV</span></h1>
            <div 
            className="flex items-center rounded-full bg-slate-300 overflow-hidden ml-3">
                <input 
                type="text" 
                placeholder="Search"  
                className="outline-none p-2 w-[200px] bg-inherit rounded-full h-8 ml-1 hidden sm:inline-block"/>
                <IconButton>

                <SearchIcon/>
                </IconButton>
            </div>
           </div>


           {/* right header */}

                <IconButton>

                <ShoppingCartIcon/>
                </IconButton>

        </header>
    );
}

export default Header
