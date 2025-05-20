import React from "react";
import styles from '../styles/deadlinebanner.module.css';

export default function DeadlineBanner() {
    return (
      <div className = {styles.deadlineBanner}>
        <div className = {styles.deadlineBanner__text}>
          <a href = "/LESShopSip" rel= "noreferrer">LES Shop & Sip is on June 21st 12pm - 6pm</a>
        </div>
      </div>
    );
  }
  