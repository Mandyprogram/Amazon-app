import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';

function Header() {
    return (
      <>
        <div className="Header">
            <img className='logo' src='https://www.pinclipart.com/picdir/big/358-3584545_rolling-pin-clip-art.png' alt='amazon logo' />
          <div className='search'>
            <input className='searchInput' type='text' />
            <SearchIcon className='searchIcon'/>
          </div>
          <div className='headerNav'>
            <div className='headerOpt'>
                <span className='headerOptLineOne'>Hello Guest</span>
                <span className='headerOptLineTwo'>Sign In</span>
            </div>
            <div className='headerOpt'>
                <span className='headerOptLineOne'>Return</span>
                <span className='headerOptLineTwo'>& Orders</span> 
            </div>
            <div className='headerOpt'>
                <span className='headerOptLineOne'>Your</span>
                <span className='headerOptLineTwo'>Prime</span>
            </div>
            <div className='headerBasket'>
                <span className='headerOptTwo basketCount'>0</span>
                <ShoppingCartCheckoutSharpIcon />
            </div>
          </div>
        </div>
      </>
    );
}



export default Header;