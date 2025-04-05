import React, { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { DiJqueryLogo } from "react-icons/di";
import FinalLogo from "../../img/FinalLogo.png"
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

// INTERNAL IMPORT
import Style from "./NavBar.module.css";
import {
  Discover,
  HelpCenter,
  Notification,
  Profile,
  SideBar,
  AIMentor,
} from "./index";
import { Button, Error } from "../componentsindex";
import images from "../../img";

// SMART CONTRACT CONTEXT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NavBar = () => {
  // Menu toggle states
  const [aiMentor, setAiMentor] = useState(false);
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();

  // Smart contract context
  const { currentAccount, connectWallet, openError } = useContext(
    NFTMarketplaceContext
  );

  // Handlers
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    setDiscover(btnText === "Discover");
    setHelp(btnText === "Help Center");
    setAiMentor(false);
    setNotification(false);
    setProfile(false);
  };

  const openAIMentor = () => {
    setAiMentor((prev) => !prev);
    setDiscover(false);
    setHelp(false);
    setNotification(false);
    setProfile(false);
  };

  const openNotification = () => {
    setNotification(!notification);
    setDiscover(false);
    setHelp(false);
    setProfile(false);
    setAiMentor(false);
  };

  const openProfile = () => {
    setProfile(!profile);
    setDiscover(false);
    setHelp(false);
    setNotification(false);
    setAiMentor(false);
  };

  const openSideBar = () => setOpenSideMenu(!openSideMenu);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* LEFT SECTION */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo} onClick={() => router.push("/")}>
            <Image
              src={FinalLogo}
              alt="Logo"
              width={60}
              height={50}
              className={Style.logoImage}
            />
          </div>

          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={Style.navbar_container_right}>
          {/* AIMentor Button */}
          <div className={Style.navbar_container_right_mentor}>
            <p onClick={openAIMentor}>BlockBuddy</p>
            {aiMentor && (
              <div className={Style.navbar_container_right_mentor_box}>
                <AIMentor />
              </div>
            )}
          </div>

          {/* Discover */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* Help Center */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={openNotification}
            />
            {notification && <Notification />}
          </div>

          {/* Wallet / Create Button */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount === "" ? (
              <Button btnName="Connect" handleClick={connectWallet} />
            ) : (
              <Button
                btnName="Create"
                handleClick={() => router.push("/uploadNFT")}
              />
            )}
          </div>

          {/* Profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={openProfile}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile currentAccount={currentAccount} />}
            </div>
          </div>

          {/* Side Menu Button */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={openSideBar}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}

      {/* Error Handler */}
      {openError && <Error />}
    </div>
  );
};

export default NavBar;
