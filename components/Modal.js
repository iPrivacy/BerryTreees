import React from "react";
import styles from "@/app/modal.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Modal({open, closeModal, imageSrc, imageAlt}) {
  if (!open) return null;
  return (
    <main className={styles.modalContainer}>
      <button className={styles.closeModal} onClick={closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </button>
      <section className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={imageSrc} fill />
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            <h2>Berry Treees</h2>
            <p>
              Cupidatat fugiat ex proident velit aliqua eiusmod nulla
              adipisicing duis deserunt excepteur fugiat. Labore anim quis
              veniam in et irure sit sit consectetur enim esse nulla nostrud
              eiusmod. In minim occaecat laborum labore nulla Lorem aliquip
              aliquip veniam.
            </p>
            <h4>Zar 2000</h4>
          </div>
          <div className={styles.thumbnailsWrapper}>
            <div className={styles.thumbnail}>
              <Image src={imageSrc} alt={imageAlt} fill />
            </div>
            <div className={styles.thumbnail}>
              <Image src={imageSrc} alt={imageAlt} fill />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
