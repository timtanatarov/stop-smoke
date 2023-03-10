import React from 'react';
import {useState, useEffect} from "react";
import s from './Facts.module.css'

const Facts = (props) => {
    const factsData = props.factsData;
    const factsList = factsData.map((value) => <h2 key={value.toString()}>{value}</h2>);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            tick();
        }, 3000);
        return () => clearTimeout(timer);
    });

    const tick = () => {
        if (counter > factsData.length - 2) {
            return setCounter(0);
        }
        return setCounter(counter + 1);
    };

    return (
        <div>
            <div className={s.list}>
                <h2>
                    Some facts for you today:
                </h2>
                {factsList[counter]}
            </div>
        </div>
    );
};


export default Facts;