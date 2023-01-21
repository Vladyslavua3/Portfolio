import React from 'react';
import s from "./MyProject.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";

export const MyProject = () => {
    return (
            <div className={s.block}>
                <div className={`${styleContainer.container}  ${s.projectContainer}`}>
                    <h2 className={s.title}>My Project</h2>
                    <div className={s.project}>
                        <Project title={'Samurai Way'} article={'lalalallalalal'}/>
                        <Project title={'ToDo List'} article={'lalalallalalala'}/>
                    </div>
                </div>
            </div>
    );
};
