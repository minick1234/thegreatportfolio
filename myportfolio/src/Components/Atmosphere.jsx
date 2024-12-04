import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export const Atmosphere = () => {
    return (
        <div
            className="h-screen w-full, atmosphere"
        >
            <Canvas>
                <ambientLight intensity={0.3} />
                {/* Stars in the upper part of the atmosphere */}
                <Stars
                    radius={100}       // Size of the starfield sphere
                    depth={20}         // Confine stars to a shallow depth
                    count={1000}       // Reduce the number of stars for density
                    factor={4}         // Size multiplier for stars
                    saturation={0}     // No saturation for a neutral look
                    fade               // Fade effect near edges
                    position={[0, 25, 0]} // Move stars higher in the scene
                />
            </Canvas>
        </div>
    );
}
