import classNames from 'classnames';
import styles from './TaskThree.module.scss';
import React, {useEffect, useState} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

import stacked from '../../img/a31/stacked.png';
import beside from '../../img/a31/beside.png';
import table from '../../img/a31/table.png';



import ImgTimerView from '../../components/ImgTimerView/ImgTimerView';


const TaskOne = () => {


    return (
        <div className={classNames(styles.TaskThree)}>
            <img src={stacked} alt="stacked"/>
            <img src={beside} alt="beside"/>
            <img src={table} alt="table"/>
        </div>
    );
};

export default TaskOne;