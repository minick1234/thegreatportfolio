import React from 'react';
import ScalingStars from './ScalingStars';
import MotionSectionWrapper from './HigherOrderComponent/MotionSectionWrapper.jsx';

const Atmosphere = () => {
    return (
        <div className="relative w-full">
            <ScalingStars density={0.01} baseStars={500} />

            {/* Foreground Content */}
            <div className="relative z-10 flex items-center justify-center w-full min-h-screen">
                {/* Centered Box with 75% Width */}
                <div className=" w-4/5 max-w-4xl">
                    <h1 className="text-white text-4xl mb-4 text-center">Education</h1>
                    <p className="text-white text-lg">
                        Bachelor of Science in Computer Science
                    </p>
                    <p className="text-white text-lg mt-2">
                        XYZ University, 2022 - Present
                    </p>
                  
                    <p className="text-white text-lg">
                        High School Diploma
                    </p>
                    <p className="text-white text-lg mt-2">
                        ABC High School, 2018 - 2022
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MotionSectionWrapper(Atmosphere, "atmosphere", "atmosphere");
