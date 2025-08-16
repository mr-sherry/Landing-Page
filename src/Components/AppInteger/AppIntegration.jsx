// src/components/AppIntegration/AppIntegration.jsx
import React from "react";
import styles from "./AppIntegration.module.css";
import { Bike, Lightbulb, Lock, LocateFixed } from "lucide-react";

const features = [
  {
    title: "Track rides",
    description: "Monitor distance, speed, and ride stats in real time.",
    icon: <Bike size={28} />,
  },
  {
    title: "AI suggestions",
    description: "Get smart route and battery-saving tips via AI.",
    icon: <Lightbulb size={28} />,
  },
  {
    title: "Remote lock/unlock",
    description: "Secure your e-bike remotely with one tap.",
    icon: <Lock size={28} />,
  },
  {
    title: "Live location",
    description: "Track your e-bike’s real-time location on the map.",
    icon: <LocateFixed size={28} />,
  },
];

const AppIntegration = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Mobile App Integration</h2>
        <p className={styles.subheading}>Show app screens.</p>
        <div className={styles.mainGridDiv}>
          <div className={styles.grid}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.icon}>{feature.icon}</div>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.desc}>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.grid1}>
            <img src="/mockup.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntegration;
