import React from 'react';
import style from './index.module.scss';

function Header() {
    return (
        <header>
            <nav>
                <div className={style.header}>
                    <span>My Cart( 4 )</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;
