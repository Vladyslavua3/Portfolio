import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import s from './Footer.module.css'
export const Footer = () => {
    return (
        <div className={styleContainer.container}>
           <div className={s.container}>
               <h3>Vladyslav Gershman</h3>
               <div className={s.mainBlock}>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
               </div>
           </div>
        </div>
    );
};

