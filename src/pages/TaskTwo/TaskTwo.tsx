import classNames from 'classnames';
import oldstyles from '../TaskOne/TaskOne.module.scss';
import  styles from './TaskTwo.module.scss';
import React, {useEffect, useState} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

import rp from '../../img/a2/RP@2048x.png';
import beigedot from '../../img/a2/beigedot@2048x.png';
import ImgTimerView from '../../components/ImgTimerView/ImgTimerView';


const TaskOne = () => {
    const [currentTask, setCurrentTask] = useState<number>(0);
    const [reactionTime, setReactionTime] = useState<number>(0);
    const imgs = [rp, beigedot];
    const task = ['Finde das P im folgenden Buchstabensalat.', 'Finde den beigen Dot']

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.code === 'Space') {
            event.preventDefault();
        }
    };

    const handleContinue = () => {
        setReactionTime(0);

        if(currentTask === imgs.length - 1) {
            setCurrentTask(0);
            return;
        }

        setCurrentTask(prevState => prevState + 1);

    }

    return (
        <div className={classNames(styles.TaskTwo)}>
            <div className={classNames(styles.TaskTwoRules)}>
                <h2>Regeln</h2>
                <p>TODO</p>
                <button className={styles.TaskTwoButton} onKeyDown={handleKeyDown} onClick={(handleContinue)}>Weiter</button>
                <h2>Aufgabe {currentTask + 1}</h2>
                <p>{reactionTime > 0 && reactionTime}</p>
            </div>
            <div className={classNames(styles.TaskTwoImg)}>
                {
                    imgs.map((img, index) => {
                        return (<ImgTimerView onChange={setReactionTime} state={currentTask} img={img} key={index} index={index} task={task[index]} />)
                    })
                }
            </div>
       </div>
    );
};

export default TaskOne;