import React from 'react';
import Logo from './../assets/react.svg';

const Header = ({count,handlePopup,cardlist}) => {
    return (
        <div className='header flex flex-wrap justify-between py-4'>
            <img src={Logo} alt="" />
            <div className='' onClick={handlePopup}>
                <span>Cart{cardlist.length}</span>
            </div>
        </div>
    );
};

export default Header;