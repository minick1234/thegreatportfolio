import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

function AnimatedEarth({ opacity }) {
    const earthRef = useRef();

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.001; // Slow rotation
        }
    });

    return (
        <mesh ref={earthRef} position={[0, 0, 0]}>
            <sphereGeometry args={[2.5, 64, 64]} />
            <animated.meshStandardMaterial
                color="blue"
                transparent
                opacity={opacity} // Apply animated opacity
            />
        </mesh>
    );
}

function CameraController({ zoom }) {
    const { camera } = useThree();

    useEffect(() => {
        camera.position.z = zoom; // Update camera position
        camera.updateProjectionMatrix();
    }, [camera, zoom]);

    return null;
}

export const EarthCanvas = () => {
    const [scrollEnabled, setScrollEnabled] = useState(false); // Control when scrolling is allowed
    const [progress, setProgress] = useState(0); // Track manual scroll progress

    const [springProps, api] = useSpring(() => ({
        zoom: 10, // Initial camera zoom
        opacity: 1, // Initial opacity
        config: { mass: 1, tension: 150, friction: 25 }, // Smooth spring easing
    }));

    const lerp = (start, end, alpha) => start + (end - start) * alpha; // Helper for smooth interpolation

    const handleWheel = (e) => {
        e.preventDefault(); // Prevent default scrolling

        const deltaY = e.deltaY;
        const viewportHeight = window.innerHeight;

        const scrollSensitivity = 1.5; // Adjust scroll sensitivity

        setProgress((prevProgress) => {
            const rawProgress = prevProgress + deltaY / (viewportHeight * scrollSensitivity);
            const clampedProgress = Math.min(Math.max(rawProgress, 0), 1); // Clamp between 0 and 1
            const smoothProgress = lerp(prevProgress, clampedProgress, 0.1); // Smoothly interpolate progress
            console.log('Progress:', smoothProgress);

            // Trigger animations based on smoothed progress
            api.start({
                zoom: 10 - smoothProgress * 8, // Zoom from z=10 to z=2
                opacity: 1 - smoothProgress, // Fade from opacity=1 to opacity=0
            });

            if (smoothProgress >= 1) {
                setScrollEnabled(true); // Allow scrolling after animations complete
            }

            return smoothProgress;
        });
    };

    useEffect(() => {
        if (!scrollEnabled) {
            console.log('Adding scroll lock');
            document.body.style.overflow = 'hidden';
            window.addEventListener('wheel', handleWheel, { passive: false });
        } else {
            console.log('Removing scroll lock');
            document.body.style.overflow = 'auto';
            window.removeEventListener('wheel', handleWheel);
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollEnabled]);

    return (
        <>
            {/* Canvas for the Earth */}
            <div className="h-screen w-full" style={{ background: 'black' }}>
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 5, 5]} intensity={2} />
                    <CameraController zoom={springProps.zoom.get()} />
                    <AnimatedEarth opacity={springProps.opacity.get()} />
                </Canvas>
            </div>

            {/* Page Content */}
            <div style={{ height: '300vh', background: 'white' }}>
                <h1 style={{ paddingTop: '200vh', textAlign: 'center' }}>
                    Welcome to the Rest of the Page
                </h1>
            </div>
        </>
    );
};
