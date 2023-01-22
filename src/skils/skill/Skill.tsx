import React from 'react';
import s from './Skill.module.css'

type SkillProps = {
    title:string
    article:string
}


export const Skill = (props:SkillProps) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.article}</p>
        </div>
    );
};
