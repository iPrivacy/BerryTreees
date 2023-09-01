import styles from "@/app/apparel/apparel.module.css";
import ImageList from "../../../components/ImageList";

export default function page() {
   return (
    <main className={styles.mainWrapper}>
      <section className={styles.imageGrid}>
        <ImageList/>
      </section>
    </main>
  );
}
