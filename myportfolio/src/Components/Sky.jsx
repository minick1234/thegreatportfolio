import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import MotionSectionWrapper from './HigherOrderComponent/MotionSectionWrapper.jsx';

const Sky = () => {
    return (
        <div className="relative w-full">
            <div className="relative z-10 flex flex-col items-center w-full min-h-screen">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="py-8">
                        {Array.from({ length: 50 }).map((_, idx) => (
                            <React.Fragment key={idx}>
                                <h1 className="text-white text-4xl">Sky</h1>
                                <p className="text-white text-lg mt-4">
                                    This is some additional content to test the height of the motion section.
                                </p>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotionSectionWrapper(Sky, "sky", "sky");
