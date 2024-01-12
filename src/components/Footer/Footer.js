import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';



const FooterIcon = ({ Icon, Name }) => (
    <IconButton
        sx={{
            color: 'blueviolet',
            borderRadius: '5px',
            padding: '5px',
        }}
    >
        <div>
            <Icon />
            <p className="text-xs">{Name}</p>
        </div>
    </IconButton>
);


const Footer = () => {
    return (
        <footer className="w-full bg-pink-200 flex items-center justify-between fixed left-0 z-[100] drop-shadow bottom-0 py-3 px-2 hover:text-lime-300">
           

           <FooterIcon Icon={HomeIcon} Name="Home"/>
           <FooterIcon Icon={AppsIcon} Name="Category"/>
           <FooterIcon Icon={PersonIcon} Name="Profile"/>

        </footer>
    )
}

export default Footer
