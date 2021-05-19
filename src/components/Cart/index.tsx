import React from 'react'
import CartItem, { CartItemProps } from '../CartItem';
import Style from './index.module.scss';

interface CartProps {
    data: CartItemProps[]
}

function Cart(props: CartProps) {
    const {data} = props;
    return (
        <div className={Style.container}>
            {data.map((e,i) => 
                <CartItem {...e} />
            )}
        </div>
    )
}

export default Cart;
