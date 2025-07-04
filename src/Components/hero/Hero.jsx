import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Button from "../BtnInput/Btn/Button";


export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                {/* 🔹 Overlay Content */}
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className={styles.title}>Ride Smarter. Go Further. Charge Less.</h1>
                    <p className={styles.subtitle}>
                        Smart AI-Powered Electric Bike with 100km Range & App Sync.
                    </p>
                    <Button text={"Explore Features"} />
                </motion.div>

                {/* 🔸 Floating Bike Image */}
                <motion.div
                    className={styles.bikeImageDiv}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.img
                        src="/bike5.png"
                        alt="Floating Bike"
                        className={styles.bikeImage}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>

    );
}
