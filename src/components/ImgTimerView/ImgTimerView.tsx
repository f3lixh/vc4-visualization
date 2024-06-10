import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './ImgTimerView.module.scss';

interface Props {
    img: string;
    task: string;
    index: number;
    state: number;
    cooldown: number;
    onChange: (n: number) => void;
}

const ImgViewTimer: React.FC<Props> = ({ img, task, index, state, onChange, cooldown }) => {
    const [visible, setVisible] = useState(false);
    const [countdown, setCountdown] = useState(cooldown);

    const [startReaction, setStartReaction] = useState(0);
    const [endReaction, setEndReaction] = useState(0);
    const [finalReaction, setFinalReaction] = useState(0);

    useEffect(() => {
        if (state === index) {
            setVisible(false);
            setCountdown(cooldown);
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            const timeout = setTimeout(() => {
                clearInterval(timer);
                setVisible(true);
            }, cooldown * 1000);
            return () => {
                clearInterval(timer);
                clearTimeout(timeout);
            };
        } else {
            setVisible(false);
            setCountdown(cooldown);
        }
    }, [state, index]);

    useEffect(() => {
        if(!visible) return;
        setStartReaction(Date.now());

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'Space' || event.key === ' ') {
                event.preventDefault();
                setEndReaction(Date.now());
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [visible]);

    useEffect(() => {
                if(endReaction > 0 && startReaction > 0 && finalReaction === 0) {
                    let value = (endReaction - startReaction) / 1000;
                    setFinalReaction(value);
                    if(onChange) onChange(value);
                    console.log(value);
                }
    }, [startReaction, endReaction, finalReaction]);


    return (
        <div key={index} className={classNames(styles.ImgTimerView, index === state && styles.active)}>
            {!visible && <div className={styles.ImgTimerViewTask}>
                <p>{task}</p>
                <span>{countdown}</span>
            </div>}
            <img className={classNames(styles.ImgTimerViewImg, visible && styles.ImgTimerViewImgActive)} src={img} alt={task} />
        </div>
    );
};

export default ImgViewTimer;
