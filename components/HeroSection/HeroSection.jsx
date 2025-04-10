import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();

  const images = [
    "https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?q=80&w=3033&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593073862407-a3ce22748763?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1635396259299-2eb9a880075a?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={Style.heroSection}>
      <div
        className={Style.heroSection_box_right}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentImage]})`
        }}
      >
        {/* Arrows */}
        <button className={Style.arrowLeft} onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className={Style.arrowRight} onClick={handleNext}>
          <FaArrowRight />
        </button>

        {/* Content */}
        <div className={Style.heroContent}>
          <h1 className={Style.h1_druve}>Dive into the world of NFTs.</h1>
          <hr className={Style.divider} />
          <div className={Style.heroButtons}>
            <button
              className={Style.exploreBtn}
              onClick={() => router.push("/searchPage")}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
