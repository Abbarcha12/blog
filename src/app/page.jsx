import Link from "next/link";
import Featured from "@/components/featured/featured";
import CardList from "@/components/cardList/cardList";
import CategoryList from "@/components/categoryList/categoryList";
import styles from "./homepage.module.css";
import Menu from "@/components/menu/Menu";
export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}> 
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
