import React from 'react';
import {motion,} from 'framer-motion';
import {ContainerStagger} from "../Utilities/MotionUtils";
import {styles} from '../styles';

// eslint-disable-next-line react/display-name
//This just simplifies this as we dont need to have a display name
//the display name just helps with debugging to assign a display name 
// its as simple as chaning it to be const StarWrapper = (Component, componentIdName) => HOC(props) => {
const StarWrapper = (Component, componentIdName) => {
    const WrappedComponent = (props) => {
        return (
            <motion.section
                variants={ContainerStagger()}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}>

                <Component {...props}/>
            </motion.section>
        );
    };

    WrappedComponent.displayName = `StarWrapper(${Component.displayName || Component.name || 'Component'})`

    return WrappedComponent;

};

export default StarWrapper;