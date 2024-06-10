import classNames from 'classnames';
import styles from './TaskOne.module.scss';
import React from "react";
import {NavLink, Outlet} from "react-router-dom";

const TaskOne = () => {
    return (
        <div className={classNames(styles.TaskOne)}>
           <div className={classNames(styles.TaskOneList)}>
               <NavLink
                   to="/aufgabe-1/teil-1"
                   className={({ isActive }) => isActive ? styles.TaskOneActive : undefined}
               >
                   Frauenanteil
               </NavLink>
               <NavLink
                   to="/aufgabe-1/teil-2"
                   className={({ isActive }) => isActive ? styles.TaskOneActive : undefined}
               >
                   Inflationsrate
               </NavLink>
               <NavLink
                   to="/aufgabe-1/teil-3"
                   className={({ isActive }) => isActive ? styles.TaskOneActive : undefined}
               >
                   Videospielindustrie
               </NavLink>
           </div>
            <div className={classNames(styles.TaskOneChart)}>
               <div className={classNames(styles.TaskOneCanvas)}> <Outlet /></div>
            </div>
            <div></div>
       </div>
    );
};

export default TaskOne;