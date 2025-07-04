import React from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import Button from "../BtnInput/Btn/Button";

const navItems = [
    "Product",
    "Solutions",
    "Resources",
    "Company",
];

export default function Header() {
    return (
        <motion.header
            className={styles.header}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>
                    <span className={styles.logoIcon}>V</span>
                    <span className={styles.logoText}>VOKO</span>
                </div>

                {/* Navigation pill */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item} className={styles.navItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right‑side actions */}
                <div className={styles.actions}>
                    <a href="#login" className={styles.login}>
                        Log In
                    </a>
                    <Button text={'Register'} />

                </div>
            </div>
        </motion.header>
    );
}
