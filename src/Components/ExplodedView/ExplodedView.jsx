// components/ExplodedView.jsx
import React from 'react';
import styles from './ExplodedView.module.css';

const ExplodedView = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.videoCard}>
                <video
                    className={styles.video}
                    // src="/bikeVid.mp4"
                    poster="/preview.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                {/* Repel Corner Elements */}
                <div className={styles.cornerTopLeft}></div>
                <div className={styles.cornerTopRight}></div>
                <div className={styles.cornerBottomLeft}></div>
                <div className={styles.cornerBottomRight}></div>

                {/* Tags */}
                <div className={`${styles.tag} ${styles.topLeft}`}>
                    <span>🔍 Motor Assist</span>
                </div>
                <div className={`${styles.tag} ${styles.bottomLeft}`}>
                    <span>🌀 Rechargeable Battery</span>
                </div>
                <div className={`${styles.tag} ${styles.bottomRight}`}>
                    <span>Throttle Mode 🌈</span>
                </div>
            </div>
        </section>
    );
};

export default ExplodedView;
