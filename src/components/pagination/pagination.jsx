"use client";

import React from "react";
import styles from "./pardList.module.css";
import { useRouter } from "next/navigation";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button disabled={!hasNext}>Next</button>
    </div>
  );
};

export default Pagination;
