import React, { useEffect, useRef } from "react";
import ScalingStars from "./ScalingStars";
import MotionSectionWrapper from "./HigherOrderComponent/MotionSectionWrapper.jsx";

const Space = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const phrases = [
            "Software Developer",
            "Network Engineer",
            "Game Developer",
            "Passionate Game Developer",
            "Crafting Interactive Worlds",
            "Innovating in Software Design",
            "Turning Ideas into Reality",
            "Game Development Enthusiast",
            "Code Architect & Gamer",
            "Exploring the Intersection of Art and Technology",
            "Problem Solver, Level Builder",
            "Empowering Creativity through Code",
        ];

        // Function to shuffle the phrases
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        };

        shuffleArray(phrases);

        const fx = new TextScrambler(textRef.current);

        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 3000);
            });
            counter = (counter + 1) % phrases.length;

            // If we've cycled through all phrases, reshuffle
            if (counter === 0) shuffleArray(phrases);
        };

        next();
    }, []);

    return (
        <div className="space-container">
            {/* Background Stars */}
            <ScalingStars density={450} />

            {/* Foreground Content */}
            <section className="intro">
                <h1>WELCOME TO MY PORTFOLIO</h1>
                <h2>Dominik Ziolkowski</h2>
                <p>
                    Hi there! I'm a passionate <strong>Game Developer</strong>,{" "}
                    <strong>Software Creator</strong>, and{" "}
                    <strong>Technology Enthusiast</strong>. I love crafting interactive
                    worlds, solving complex problems, and pushing the boundaries of
                    creativity through code. Dive into my work and discover my journey in
                    game design, software development, and beyond.
                </p>
                <div className="text" ref={textRef}></div>
            </section>
        </div>
    );
};

export default MotionSectionWrapper(Space, "space", "space");

class TextScrambler {
    constructor(el) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}
