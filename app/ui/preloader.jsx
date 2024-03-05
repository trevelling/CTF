"use client";

import React, { useState, useEffect } from "react";
import styles from "./preloader.module.css";
import { RxReload } from "react-icons/rx";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className={styles.preloader}>
          <div className={styles.loader}><RxReload /></div>
        </div>
      )}
    </>
  );
};

export default Preloader;