import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroTitleWrapper}>
            <div className={styles.heroTitle}>
              <h1>Thoba</h1>
              <h1>Chembeni</h1>
            </div>
            <span className={styles.heroSpan}>Presents</span>
          </div>
          <div className={styles.heroImage}>
            <Image src="/BerryTreeesLogoBW.png" fill />
          </div>
        </section>
        <section className={styles.subSection}>
          <h1 className={styles.subSectionTitle}>Berry Tree3s</h1>
          <h3>18:fifty3</h3>
          <h4>TD Chembeni Apparel/Art est 2021</h4>
        </section>
        {/* <div className={styles.divider} /> */}
        <section className={styles.copySection} id="about">
          <h2 className={styles.copyTitle}>What is Berry Treees?</h2>
          <div className={styles.contentWrapper}>
            <p>
              Consectetur occaecat magna in amet commodo adipisicing magna sint.
              Ipsum eiusmod exercitation magna aliquip cupidatat id laborum
              exercitation nisi. Ut consectetur ipsum irure incididunt ex
              excepteur in adipisicing quis exercitation ullamco excepteur.
              Nostrud do sint veniam excepteur enim consequat anim laborum
              pariatur. Nostrud incididunt pariatur aute aliqua consequat sit
              quis. Elit reprehenderit in excepteur nostrud est nostrud quis
              cupidatat.
            </p>
            <p>
              Tempor id qui irure ipsum consequat sunt. Sint dolor officia
              adipisicing pariatur ea culpa labore nostrud laboris duis non. In
              magna aute irure ea incididunt reprehenderit. Laborum velit do sit
              Lorem culpa consectetur nisi excepteur sunt do laboris. Irure id
              dolore officia nostrud elit sint non et et. Nisi deserunt Lorem
              exercitation ut aliqua est deserunt officia cillum et culpa.
            </p>
            <p>
              Laborum est veniam amet nisi cillum nisi officia culpa. Aliquip
              exercitation ullamco quis ad ipsum ad dolor tempor in laboris
              officia laborum tempor aliquip. Eu sunt dolor nisi reprehenderit
              sit cupidatat enim ex sit. Commodo pariatur sunt anim dolor Lorem
              do voluptate non minim dolor anim.
            </p>
          </div>
        </section>
      </main>
  );
}
