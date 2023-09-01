"use client";
import React from "react";
import { useState } from "react";
import styles from "@/app/apparel/apparel.module.css";
import Modal from "./Modal";
import Image from "next/image";

const imageData = [
  {
    id: 1,
    imgSrc: "/abstract.png",
    alt: "Logo",
    divId: "image1",
  },
  {
    id: 2,
    imgSrc: "/BerryTreeesLogo.png",
    alt: "Logo",
    divId: "image2",
  },
  {
    id: 3,
    imgSrc: "/faceGlasses.png",
    alt: "Logo",
    divId: "image3",
  },
  {
    id: 4,
    imgSrc: "/ladyBlueDenim.png",
    alt: "Logo",
    divId: "image4",
  },
  {
    id: 5,
    imgSrc: "/bwJacket.png",
    alt: "Logo",
    divId: "image5",
  },
  {
    id: 6,
    imgSrc: "/musicFuture.png",
    alt: "Logo",
    divId: "image6",
  },
];

export default function ImageList() {
  const imageList = imageData.map((imgs) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <div id={imgs.divId} className={styles.imageWrapper}>
          <Image
            src={imgs.imgSrc}
            key={imgs.id}
            fill
            alt={imgs.alt}
            onClick={() => setShowModal(true)}
          />
        </div>
        <Modal open={showModal}
        closeModal={() => setShowModal(false)} imageAlt={imgs.alt} imageSrc={imgs.imgSrc} />
      </>
    );
  });

  return <>{imageList}</>;
}
