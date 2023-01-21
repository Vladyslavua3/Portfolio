import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './RemoteWork.module.css'

export const RemoteWork = () => {
    return (
        <div className={styleContainer.container}>
            <div className={s.block}>
            <h3>Looking for Remote work</h3>
            <button>Contact me</button>
            </div>
        </div>
    );
};

