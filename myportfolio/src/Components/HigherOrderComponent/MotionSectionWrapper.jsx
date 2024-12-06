import {motion,} from 'framer-motion';
import {staggerContainer} from "../../Utilities/MotionUtils.js";

// eslint-disable-next-line react/display-name
//This just simplifies this as we dont need to have a display name
//the display name just helps with debugging to assign a display name 
// its as simple as chaning it to be const StarWrapper = (Component, componentIdName) => HOC(props) => {
const StarWrapper = (Component, componentIdName, customClassName) => {
    const WrappedComponent = (props) => {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`relative w-full ${customClassName}`}
                style={{minHeight: '75vh'}}
            >
                <Component {...props} />
            </motion.section>
        );
    };

    WrappedComponent.displayName = `StarWrapper(${Component.displayName || Component.name || 'Component'})`;

    return WrappedComponent;
};


export default StarWrapper;