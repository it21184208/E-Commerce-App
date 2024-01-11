import React from 'react'
import menu from '../../images/menu.svg'
import search from '../../images/search.svg'
import cart from '../../images/cart.svg'

const Header = () => {
    return (
        <header className="w-full p-5 bg-pink-200 flex items-center justify-between fixed top-0 left-0 z-[100] drop-shadow">
           {/* left header */}
           <div className="flex items-center">
            <img src={menu} alt='menu' className="w-6 h-6 object-contain cursor-pointer"/>
            <h1 className="text-sm font-semibold text-lg ml-2">AUK <span className="text-green-600">DEV</span></h1>
            <div className="flex items-center rounded-full bg-slate-300 ml-[10px] overflow-hidden ml-3">
                <input type="text" placeholder="Search"  className="outline-black p-2 w-[200px] bg-inherit rounded-full h-8 ml-1"/>
                <img src={search} alt="search" className="w-6 h-6 object-contain cursor-pointer mr-3" />
            </div>
           </div>
           {/* right header */}
                
                <img src={cart} alt="cart" className="w-6 h-6 object-contain cursor-pointer mr-8"/>

        </header>
    );
}

export default Header
