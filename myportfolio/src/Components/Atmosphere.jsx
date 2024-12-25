import React from 'react';
import ScalingStars from './ScalingStars';
import MotionSectionWrapper from './HigherOrderComponent/MotionSectionWrapper.jsx';

const Atmosphere = () => {
    return (
        <div className="relative w-full">
            <ScalingStars density={1000} />

            {/* Foreground Content */}
            <div className="relative z-10 flex-col items-center justify-center w-full min-h-screen">
                {/* Centered Box with 75% Width */}
                <div className=" w-4/5 max-w-4xl bg-black bg-opacity-50 rounded-lg">
                    <div className="flex items-center justify-center bg-blue-400 rounded-2xl">
                        <h1 className="text-white text-4xl m-2 text-center">Education</h1>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <h1 className="text-white text-lg">Honourary Bachelor of Computer Science - Specializing
                                    In Game Engineering</h1>
                                <p className="text-white text-lg">Sheridan College</p>
                                <p className="text-white text-lg">2024 - Present</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h1 className="text-white text-lg">Advanced Diploma - Software Development And Network
                                    Engineering</h1>
                                <p className="text-white text-lg">Sheridan College</p>
                                <p className="text-white text-lg">2021 - 2024</p>
                            </div>

                        </li>
                        <li>
                            <div>
                                <h1 className="text-white text-lg">High School Diploma</h1>
                                <p className="text-white text-lg">Jean Vanier Catholic Secondary School</p>
                                <p className="text-white text-lg">2014 - 2018</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className=" w-4/5 max-w-4xl bg-black bg-opacity-50 rounded-lg flex-col">
                    <div className="flex items-center justify-center bg-blue-400 rounded-2xl">
                        <h1 className="text-white text-4xl m-2 text-center">Education</h1>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <h1 className="text-white text-lg">Honourary Bachelor of Computer Science - Specializing
                                    In Game Engineering</h1>
                                <p className="text-white text-lg">Sheridan College</p>
                                <p className="text-white text-lg">2024 - Present</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h1 className="text-white text-lg">Advanced Diploma - Software Development And Network
                                    Engineering</h1>
                                <p className="text-white text-lg">Sheridan College</p>
                                <p className="text-white text-lg">2021 - 2024</p>
                            </div>

                        </li>
                        <li>
                            <div>
                                <h1 className="text-white text-lg">High School Diploma</h1>
                                <p className="text-white text-lg">Jean Vanier Catholic Secondary School</p>
                                <p className="text-white text-lg">2014 - 2018</p>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default MotionSectionWrapper(Atmosphere, "atmosphere", "atmosphere");
