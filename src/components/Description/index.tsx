import React from 'react';
import Style from './index.module.scss';

function Description() {
    return (
        <section className={Style.description__container}>
            <span className={`${Style.row} ${Style.title}`}>Classic Tee</span>
            <span className={`${Style.row} ${Style.price}`}>$75.00</span>
            <span className={`${Style.row} ${Style.text}`}>dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</span>
            <span className={`${Style.row} ${Style.size}`}>size</span>
            <ul className={Style.list}>
                <li className={Style.item}>S</li>
                <li className={Style.item}>M</li>
                <li className={Style.item}>L</li>
            </ul>
            <button className={`${Style.row} ${Style.add}`}>ADD TO CART</button>
        </section>
    )
}

export default Description;
