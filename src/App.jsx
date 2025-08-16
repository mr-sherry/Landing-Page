import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "./Components/Header/Header";
import Hero from "./Components/hero/Hero";
import ScrollImage from "./Components/movingImage/ScrollImage";
import SmartTech from "./Components/SmartTech/SmartTech";
import ExplodedView from "./Components/ExplodedView/ExplodedView";
import Lists from "./Components/list/Lists";
import AppIntegration from "./Components/AppInteger/AppIntegration";
import "./App.css";

function App() {
  const explodedRef = useRef(null);
  const listRef = useRef(null);
  const appRef = useRef(null);

  const explodedInView = useInView(explodedRef, {
    once: true,
    margin: "-100px",
  });
  const listInView = useInView(listRef, { once: true, margin: "-100px" });
  const appInView = useInView(appRef, { once: true, margin: "-100px" });

  return (
    <>
      <Header />
      <Hero />
      <ScrollImage />
      <SmartTech />

      <motion.div
        ref={explodedRef}
        initial={{ opacity: 0, y: 60 }}
        animate={explodedInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ExplodedView />
      </motion.div>

      <motion.div
        ref={listRef}
        initial={{ opacity: 0, y: 60 }}
        animate={listInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="listWrapper"
        style={{ overflow: "auto" }}
      >
        <Lists />
      </motion.div>

      <motion.div
        ref={appRef}
        initial={{ opacity: 0, y: 60 }}
        animate={appInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <AppIntegration />
      </motion.div>
    </>
  );
}

export default App;
