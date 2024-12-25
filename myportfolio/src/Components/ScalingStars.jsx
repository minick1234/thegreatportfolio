import React, { useRef, useEffect } from 'react';

const ScalingStars = ({ density = 1000, className = "absolute top-0 left-0 w-full h-full z-0 pointer-events-none" }) => {
    const canvasRef = useRef(null);
    const parentRef = useRef(null);
    const animationRef = useRef(null);
    const stars = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!canvas || !ctx) {
            console.error('Canvas or context not initialized.');
            return;
        }

        const colourChangeRate = 16;

        const randI = (min, max = min + (min = 0)) => (Math.random() * (max - min) + min) | 0;
        const rand = (min, max = min + (min = 0)) => Math.random() * (max - min) + min;

        const star = {
            draw() {
                this.count += 1;

                if (this.count % colourChangeRate === 0) {
                    const starColors = [
                        [255, 255, 255],  // White
                        [255, 244, 232],  // Soft white
                        [255, 215, 190],  // Yellowish
                        [209, 235, 255],  // Pale blue
                        [255, 165, 130],  // Orange
                    ];

                    const baseColor = starColors[Math.floor(Math.random() * starColors.length)];
                    const c = () => Math.max(0, Math.min(255, baseColor[0] + Math.random() * 30 - 15));
                    this.col = `rgb(${c()}, ${c()}, ${c()})`;
                }

                ctx.fillStyle = this.col;

                const ox = (Math.random() - 0.5) * 0.5;
                const oy = (Math.random() - 0.5) * 0.5;

                ctx.beginPath();
                ctx.arc(this.pos.x + ox, this.pos.y + oy, this.size, 0, Math.PI * 2);
                ctx.fill();
            },
        };

        function createStar(pos) {
            return {
                ...star,
                pos,
                col: "rgb(255, 255, 255)", // Default white
                count: randI(colourChangeRate),
                size: rand(1) * rand(1) * 2 + 0.5,
            };
        }

        const resizeCanvas = () => {
            const parent = parentRef.current;

            if (!parent) return;

            const { width, height } = parent.getBoundingClientRect();

            canvas.width = width;
            canvas.height = height;

            stars.current = [];

            const starCount = Math.floor((width * height) / density);

            console.log(`Parent size: ${width}x${height}, Density: ${density}, Stars: ${starCount}`);

            for (let i = 0; i < Math.min(starCount, 50000); i++) {
                stars.current.push(createStar({ x: randI(width), y: randI(height) }));
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.current.forEach((star) => star.draw());

            animationRef.current = requestAnimationFrame(render);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        animationRef.current = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [density]);

    return (
        <div ref={parentRef} className={className}>
            <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
    );
};

export default ScalingStars;
