import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './ContactForm.module.css'

export const ContactForm = () => {
    return (
        <div className={styleContainer.container}>
            <div className={s.block}>
                <div className={s.form}>
                <input type={'text'} placeholder={'write down'}/>
                <input type={'text'} placeholder={'write down'}/>
                <textarea placeholder={'The same instructions'} className={s.textArea}></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

