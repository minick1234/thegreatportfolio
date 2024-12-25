import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import MotionSectionWrapper from './HigherOrderComponent/MotionSectionWrapper.jsx';

const Ground = () => {
    return (
        <div className="relative w-full">
            <div className="relative z-10 flex flex-col items-center w-full min-h-screen">
                <div className="flex flex-col items-center justify-center w-full">
                    <div>
                        <p>Shoot Me A Message</p>
                        <h1>Contact</h1>
                        <form>
                            <label>
                                <span>Your Name</span>
                                <input type="text" name="name" placeholder="What's your name?" value/>
                            </label>
                            <label>
                                <span>Your Email</span>
                                <input type="text" name="email" placeholder="What's your email?" value/>
                            </label>
                            <label>
                                <span>Your Message</span>
                                <input type="text" name="message" placeholder="What would you like to say?" value/>
                            </label>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotionSectionWrapper(Ground, "ground", "ground");
