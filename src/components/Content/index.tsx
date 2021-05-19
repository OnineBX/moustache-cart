import React from 'react';
import Style from './index.module.scss';
import imgPath from './imgs/classic-tee.jpg'
import Description from '../Description';

function Content() {
    return (
        <section className={Style.content__container}>
            <img src={ imgPath } alt='' />
            <Description />
        </section>
    )
}

export default Content;
