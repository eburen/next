import React from 'react';
import Logo from './logo';
import Search from './search';
import CardCount from './CardCount';
import User from './User';
import HamburgerMenu from './hamburgerMenu';
const Navbar = () => {
    return (
        <div className='flex items-center justify-between gap-3 md:gap:10 px-3 md:px:19 h-16 bg-orange-600'>
            <Logo />
            <Search />
            <CardCount />
            <User />
            <HamburgerMenu />
        </div>
    );
};

export default Navbar;
