import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./Footer.module.css";
import FinalLogo from "../../img/FInalLogo.png";
import { Discover, HelpCenter } from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          {/* <Image src={images.logo} alt="footer logo" height={100} width={100} /> */}
          <a href="/">
           <Image
            src={FinalLogo}
            alt="footer logo"
            width={50}
            height={45}
             className={Style.footer_box_social_logo}
           />
          </a>

          <p>
          Discover a new way to mint and trade NFTs — fast, simple, and built to explore what’s possible.
          </p>

          <div className={Style.footer_social}>
           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <TiSocialFacebook />
           </a>
           <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <TiSocialLinkedin />
           </a>
           <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <TiSocialTwitter />
           </a>
           <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <TiSocialYoutube />
           </a>
           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <TiSocialInstagram />
           </a>
        </div>

        </div>

        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
