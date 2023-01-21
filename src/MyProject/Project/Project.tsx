import React from 'react';
import s from "./Project.module.css";

type ProjectProps = {
    title:string
    article:string
}


export const Project = ({title,article}:ProjectProps) => {
    return (
        <div className={s.project}>
            <h3 className={s.title}>{title}</h3>
            <button>Watch more</button>
            <div className={s.block}>
            <span className={s.description}>{article}</span>
            </div>
            </div>
    );
};
