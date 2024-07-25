import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Earth() {
    const earthRef = useRef();
    
    useFrame(() => {
        earthRef.current.rotation.y += 0.001;
      });

    return (
        <>
            <mesh ref={earthRef} position={[0, 0, 0]}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshStandardMaterial
                    map={new THREE.TextureLoader().load('/earth.jpg')}
                    normalMap={new THREE.TextureLoader().load('/earth_normal.jpg')}
                    roughness={1}
                    metalness={0}
                />
            </mesh>
        </>
    );
}

export default function EarthCanvas() {
    return (
        <div className="h-screen w-full">
            <Canvas>
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1.5}
                    castShadow
                />
                <Earth />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
}
