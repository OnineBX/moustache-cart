import React, { useState } from 'react';
import Cart from '../Cart';
import style from './index.module.scss';

function Header() {

    const [showCart, setShowCart] = useState(false);

    const handleOver = () => {
        setShowCart(true);
    }

    const handleLeave = () => {
        setShowCart(false);
    }

    return (
        <header>
            <nav>
                <div className={style.header}>
                    <span className={style.header__text}
                        onMouseOver={handleOver}
                        onMouseLeave={handleLeave}>
                            My Cart( 4 )
                    </span>
                    {showCart ? <Cart data={[
                        {
                            name: 'Classic Tee',
                            size: 'S',
                            price: '$75.00',
                            count: 1,
                            imgPath:'/imgs/classic-tee.jpg'
                        },
                        {
                            name: 'Classic Tee',
                            size: 'L',
                            price: '$75.00',
                            count: 3,
                            imgPath:'/imgs/classic-tee.jpg'
                        }
                        
                    ]}/> : <> </>}
                </div>
            </nav>
        </header>
    )
}

export default Header;
