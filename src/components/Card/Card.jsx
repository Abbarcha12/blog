import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container} >
  
        <div className={styles.imageContainer}>
          <Image src= "/p1.jpeg" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
           11-dec-2019
          </span>
          <span className={styles.category}>Category</span>
        </div>
          <h3>Top 5 Frontend Languages: A Comprehensive Guide for Developers</h3>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia quos maxime voluptates! Placeat tenetur voluptatum temporibus officiis nemo saepe qui esse pariatur, quos alias cupiditate ab voluptates quas, consectetur at distinctio iusto ipsam ex veniam impedit eligendi! Eveniet a tempora alias placeat recusandae maxime harum quam voluptatibus quasi molestiae.</p>
   
        <Link href="#"  className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;