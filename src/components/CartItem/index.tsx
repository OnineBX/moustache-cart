import React from 'react';
import Style from './index.module.scss';

export interface CartItemProps {
    name: string;
    size: string;
    price: string;
    imgPath: string;
    count:number;
}

function CartItem(props: CartItemProps) {
    const {name, size, price, count, imgPath} = props;
    return (
        <div className={Style.container}>
            <img src={imgPath} alt=''/>
            <div className={Style.text__container}>
                <span className={Style.cartitem__text}>{name}</span>
                <span className={Style.cartitem__text}>{`${count} x `} <b>{price}</b></span>
                <span className={Style.cartitem__text}>{`Size: ${size}`}</span>
            </div>
        </div>
    )
}

export default CartItem;
