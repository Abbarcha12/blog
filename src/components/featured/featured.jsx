import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to TechVistaHub</b>
        
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
          Unveiling the Top 5 Frontend Languages: A Comprehensive Guide for Developers
          </h1>
          <p className={styles.postDesc}>
            In the fast-paced world of web development, choosing the right
            frontend language is pivotal for creating seamless and user-friendly
            interfaces. Developers, both seasoned and aspiring, often find
            themselves at a crossroads when it comes to selecting the most
            suitable language for their projects. In this comprehensive guide,
            we'll delve into the top 5 frontend languages that are currently
            dominating the scene, providing valuable insights to help you make
            informed decisions and stay at the forefront of web development
            trends.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
