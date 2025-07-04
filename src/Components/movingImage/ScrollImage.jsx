import React, { useEffect, useRef } from "react";
import styles from "./ProductFeatures.module.css"; // ← merged CSS‑module
import { motion } from "framer-motion";
import { Zap, MapPin, Lock, Smartphone } from "lucide-react";

export default function ScrollImage() {
    // refs
    const imageRef = useRef(null);
    const maskRef = useRef(null);
    const prevScroll = useRef(window.scrollY);

    /*─── CSS‑module class tokens ───*/
    const moveRight = styles["move-right"];
    const moveLeft = styles["move-left"];
    const moveRightBlack = styles["move-right-black"];
    const moveLeftBlack = styles["move-left-black"];

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            if (current > prevScroll.current) {
                // scrolling down
                imageRef.current.classList.add(moveRight);
                imageRef.current.classList.remove(moveLeft);

                maskRef.current.classList.add(moveRightBlack);
                maskRef.current.classList.remove(moveLeftBlack);
            } else {
                // scrolling up
                imageRef.current.classList.add(moveLeft);
                imageRef.current.classList.remove(moveRight);

                maskRef.current.classList.add(moveLeftBlack);
                maskRef.current.classList.remove(moveRightBlack);
            }
            prevScroll.current = current;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [moveRight, moveLeft, moveRightBlack, moveLeftBlack]);

    /*─── feature cards (unchanged) ───*/
    const features = [
        {
            icon: <Zap size={32} />, title: "100km Range",
            desc: "Go the distance on a single charge with smart battery optimization."
        },
        {
            icon: <Smartphone size={32} />, title: "AI App Sync",
            desc: "Control and monitor your bike with real‑time AI through the mobile app."
        },
        {
            icon: <Lock size={32} />, title: "Smart Lock & Anti‑Theft",
            desc: "Remote lock, motion detection & GPS alerts if tampered."
        },
        {
            icon: <MapPin size={32} />, title: "Live GPS Tracking",
            desc: "Navigate smartly and track every ride with precision."
        }
    ];

    return (
        <div className={styles["image-wrapper"]}>
            {/* masking panel that slides with scroll */}
            <div ref={maskRef} className={styles["scroll-black"]}></div>

            {/* bike image that slides with scroll */}
            <img
                ref={imageRef}
                src="/bike4.png"
                alt="scrolling bike"
                className={styles["scroll-img"]}
            />

            {/* feature reveal content */}
            <div className={styles["reveal-section"]}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Smart Tech Features
                </motion.h2>

                <div className={styles.grid}>
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <div className={styles.icon}>{feat.icon}</div>
                            <h3>{feat.title}</h3>
                            <p>{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
