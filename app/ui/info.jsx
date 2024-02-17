"use client";

import React, { useEffect, useState } from 'react';
import styles from './info.module.css';

export default function Info() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(document.lastModified);
  }, []);

  return (
    <footer className={styles.footer}>
      <a
        className={styles.info}
        href="https://github.com/trevelling"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; {new Date().getFullYear()} Tev | Last updated:{" "}
        {new Date(document.lastModified).toLocaleDateString()}
      </a>
    </footer>
  );
}