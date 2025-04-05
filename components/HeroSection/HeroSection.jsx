import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>

      <div className={Style.heroSection_box_right}>
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
