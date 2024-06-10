import classNames from 'classnames';
import styles from './TaskTwo.module.scss';
import React, {useState} from "react";

import hue from '../../img/a2/hue.png';
import opacity from '../../img/a2/opacity.png';
import line from '../../img/a2/line.png';
import size from '../../img/a2/size.png';
import blur from '../../img/a2/blur.png';
import shear from '../../img/a2/shear.png';
import shape from '../../img/a2/shape.png';
import shape_2 from '../../img/a2/shape_complex.png';
import shader from '../../img/a2/shader.png';

import reddot from "../../img/a2/reddot.png";
import colorshader from "../../img/a2/colorshader.png";
import linelength from "../../img/a2/linelength.png";
import winkel from "../../img/a2/winkel.png";

import triangle from "../../img/a2/triangle.png";
import opacitycolor from "../../img/a2/opacitycolor.png";


import ImgTimerView from '../../components/ImgTimerView/ImgTimerView';


const TaskOne = () => {
    const [currentTask, setCurrentTask] = useState<number>(0);
    const [reactionTime, setReactionTime] = useState<number>(0);
    // eslint-disable-next-line
    const [cooldown, setCooldown] = useState<number>(8);


    const imgs = [hue, opacity, line, size, blur, shear, shape, shape_2, shader, reddot, colorshader, linelength, winkel, triangle, opacitycolor];
    const task = [
        'Finde den grünen Punkt im folgenden Cluster.',
        'Finde den Punkt welcher durchsichtig ist.',
        'Finde die Linie welche dicker ist als die anderen.',
        'Finde den Punkt welcher am größten ist.',
        'Finde den Stern welcher verschwommen ist.',
        'Finde den Stern welcher sich schräg verzerrt ist.',
        'Finde das Quadrat unter den Punkten.',
        'Finde den Buchstaben "P" unter den "R"s.',
        'Finde den Punkt dessen Schattierung anderes ist.',
        'Finde den roten Punkt im Cluster.',
        'Finde den Punkt dessen Schattierung anderes ist.',
        'Finde die Linie, welche am längsten ist.',
        'Finde den zerbrochenen Winkel.',
        'Finde das gelbe Dreieck.',
        'Finde das rote Quadrat welches am kräftigsten erscheint.',
    ];

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.code === 'Space') {
            event.preventDefault();
        }
    };

    const handleContinue = () => {
        setReactionTime(0);

        if (currentTask === imgs.length - 1) {
            setCurrentTask(0);
            return;
        }

        setCurrentTask(prevState => prevState + 1);

    }

    const handleBack = () => {
        setReactionTime(0);

        if (currentTask === 0) {
            let temp = imgs.length - 1;
            setCurrentTask(temp);
            return;
        }

        setCurrentTask(prevState => prevState - 1);

    }

    return (
        <div className={classNames(styles.TaskTwo)}>
            <div className={classNames(styles.TaskTwoRules)}>
                <h2>Regeln</h2>
                <p>In diesem Experiment werden dir Bilder gezeigt, auf denen du ein bestimmtes Objekt finden sollst. Sobald das Bild erscheint, startet ein Timer. Hast du das Objekt gefunden, drücke sofort die Leertaste. Die benötigte Zeit wird dann angezeigt. Teile diese dem Spielleiter mit und klicke anschließend auf "Weiter", um zum nächsten Bild zu gelangen.</p>
               <div className={styles.TaskTwoButtonContainer}>
                   <button className={styles.TaskTwoButton} onKeyDown={handleKeyDown} onClick={(handleBack)}>Zurück
                   </button>
                   <button className={styles.TaskTwoButton} onKeyDown={handleKeyDown} onClick={(handleContinue)}>Weiter
                   </button>
               </div>
                <h2>Bild {currentTask + 1} / {imgs.length}</h2>
                <p>{reactionTime > 0 && reactionTime}</p>
            </div>
            <div className={classNames(styles.TaskTwoImg)}>
                {
                    imgs.map((img, index) => {
                        return (<ImgTimerView cooldown={cooldown} onChange={setReactionTime} state={currentTask} img={img}
                                              key={index} index={index} task={task[index]}/>)
                    })
                }
            </div>
        </div>
    );
};

export default TaskOne;