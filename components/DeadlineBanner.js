import React from "react";
import styles from '../styles/deadlinebanner.module.css';

export default function DeadlineBanner() {
    return (
      <div className={styles.deadlineBanner}>
        <div className={styles.deadlineBanner__text}>
          LES June Vendor Application Deadline: May 18th
        </div>
      </div>
    );
  }
  