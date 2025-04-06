import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";
import mohitImg from "../../img/mohit.jpg";

const BigNFTSilder = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Home NFT",
      id: 1,
      name: "Mohit Bajpai",
      collection: "GYm",
      price: "00664 ETH",
      like: 243,
      image: mohitImg,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Krish Bansal",
      collection: "Home",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];

  const [nftList, setNftList] = useState(sliderData);

  // Timer countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setNftList((prevList) => {
        const updatedList = [...prevList];
        const current = { ...updatedList[idNumber] };
        let { days, hours, minutes, seconds } = current.time;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0 || hours > 0 || days > 0) {
            seconds = 59;
            if (minutes > 0) {
              minutes--;
            } else {
              minutes = 59;
              if (hours > 0) {
                hours--;
              } else {
                hours = 23;
                if (days > 0) {
                  days--;
                }
              }
            }
          } else {
            seconds = 0;
          }
        }

        current.time = { days, hours, minutes, seconds };
        updatedList[idNumber] = current;
        return updatedList;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [idNumber]);

  const inc = useCallback(() => {
    if (idNumber + 1 < nftList.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, nftList.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{nftList[idNumber].title}</h2>

          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={nftList[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {nftList[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
              <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                <p>Collection</p>
                <h4>{nftList[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {nftList[idNumber].price} <span>$221,21</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon} />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{nftList[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{nftList[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{nftList[idNumber].time.minutes}</p>
                <span>Mins</span>
              </div>
              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{nftList[idNumber].time.seconds}</p>
                <span>Secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={dec}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={inc}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={nftList[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{nftList[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;
