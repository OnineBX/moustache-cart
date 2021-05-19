import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context';
import { CartItemProps } from '../CartItem';
import Style from './index.module.scss';

function Description() {
    
    const [cartData, setCartData] = useState([] as CartItemProps[]);
    const [size, setSize] = useState('S');

    const handleSizeClick = (e: React.MouseEvent<HTMLLIElement>) => {
        e.stopPropagation();
        setSize(e.currentTarget.getAttribute('value') as string);
    }

    const handleClick = () => {
        setCartData([...cartData, {
            name: 'Classic Tee',
            size: size,
            price: '$75',
            count: 1,
            imgPath:'/imgs/classic-tee.jpg'
         }]);
    }
    return (
        <AppContext.Provider value={cartData}>
            <section className={Style.description__container}>
                <span className={`${Style.row} ${Style.title}`}>Classic Tee</span>
                <span className={`${Style.row} ${Style.price}`}>$75.00</span>
                <span className={`${Style.row} ${Style.text}`}>dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</span>
                <span className={`${Style.row} ${Style.size}`}>size</span>
                <ul className={Style.list}>
                    <li className={Style.item} value='S' onClick={handleSizeClick}>S</li>
                    <li className={Style.item} value='M' onClick={handleSizeClick}>M</li>
                    <li className={Style.item} value='L' onClick={handleSizeClick}>L</li>
                </ul>
                <button className={`${Style.row} ${Style.add}`}
                    onClick={handleClick}>ADD TO CART</button>
            </section>
        </AppContext.Provider>
    )
}

export default Description;
