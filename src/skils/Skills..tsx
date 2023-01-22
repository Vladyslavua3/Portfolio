import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.block}>
            <div className={`${styleContainer.container}  ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} article={'lalalallalalal'}/>
                    <Skill title={'CSS'} article={'lalalallalalala'}/>
                    <Skill title={'JS/TS'} article={'lalalallalalala'}/>
                    <Skill title={'JS/TS'} article={'lalalallalalala'}/>
                    <Skill title={'JS/TS'} article={'lalalallalalala'}/>

                </div>
            </div>
        </div>
    );
};

