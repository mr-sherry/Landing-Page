import React from "react";
import styles from "./SmartTech.module.css";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Sync with App",
        description: "Connect instantly with our mobile app to monitor battery, mileage, and AI suggestions.",
        icon: "/icons/sync.svg",
    },
    {
        title: "Smart AI Optimization",
        description: "Our real-time algorithm adapts your ride for max distance, speed, and terrain.",
        icon: "/icons/ai.svg",
    },
    {
        title: "Ride Visualizer",
        description: "Live map tracking, dynamic ride data, and smart alerts for your journey.",
        icon: "/icons/ride.svg",
    },
];

export default function SmartTech() {
    return (
        <section className={styles.tech}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                How It Works
            </motion.h2>

            <div className={styles.grid}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <div className={styles.iconBox}>
                            <img src={step.icon} alt={step.title} className={styles.icon} />
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
