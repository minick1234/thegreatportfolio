import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const ScalingStars = ({ density = 0.01, baseStars = 500, className = "absolute top-0 left-0 w-full h-full z-0 pointer-events-none" }) => {
    const containerRef = useRef(null);
    const [starCount, setStarCount] = useState(baseStars);

    useEffect(() => {
        const updateStars = () => {
            if (containerRef.current) {
                const height = containerRef.current.offsetHeight;
                const width = containerRef.current.offsetWidth;

                const area = height * width;
                const calculatedStars = Math.max(baseStars, Math.floor(area * density));
                setStarCount(calculatedStars);
            }
        };

        // Initial calculation
        updateStars();

        // Add a ResizeObserver to detect size changes
        const resizeObserver = new ResizeObserver(updateStars);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [density, baseStars]);

    return (
        <div ref={containerRef} className={className}>
            <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <Stars
                    radius={100}
                    depth={20}
                    count={starCount}
                    factor={4}
                    saturation={0}
                    fade
                />
            </Canvas>
        </div>
    );
};

export default ScalingStars;
