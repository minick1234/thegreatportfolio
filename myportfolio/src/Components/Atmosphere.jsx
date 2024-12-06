import React from 'react';
import ScalingStars from './ScalingStars';
import MotionSectionWrapper from './HigherOrderComponent/MotionSectionWrapper.jsx';

const Atmosphere = () => {
    return (
        <div className="relative w-full">
            <ScalingStars density={0.02} baseStars={500} />

            <div className="relative z-10 flex flex-col items-center w-full min-h-screen">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="py-8">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <React.Fragment key={idx}>
                                <h1 className="text-white text-4xl">Atmosphere</h1>
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

export default MotionSectionWrapper(Atmosphere, "atmosphere", "atmosphere");
