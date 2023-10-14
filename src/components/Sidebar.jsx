import Image from "next/image";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import image from "../assets/shorts.png";

export default function Sidebar() {
  const topLinks = [
    {
      title: "Home",
      icon: <GoHomeFill />,
    },
    {
      title: "Shorts",
      icon: <Image src={image} className="h-6 w-5" alt="logo" />,
    },
    {
      title: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const middleLinks = [
    "Library",
    "History",
    "Your videos",
    "Watch later",
    "Liked videos",
    "Show more",
  ];

  const lastLinks = [
    "Trending",
    "Shopping",
    "Music",
    "Movies",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Learnig",
    "Fashion & Beauty",
    "Podcasts",
  ];

  return (
    <>
      <div className="fixed top-14 h-screen w-60 pl-3 py-5 overflow-y-scroll bg-white remove-scrollbar">
        <ul className="mb-3">
          {topLinks.map((a, i) => {
            return (
              <li
                key={i}
                className={`flex gap-7 items-center ${
                  a.title === "Home" ? "bg-stone-100 font-semibold" : ""
                } hover:bg-stone-100 py-[0.6rem] px-3.5 rounded-xl text-sm`}
              >
                <p className="text-xl">{a.icon}</p>
                <p className="">{a.title}</p>
              </li>
            );
          })}
        </ul>
        <hr />
        <ul className="my-5">
          {middleLinks.map((a, i) => {
            return (
              <li
                key={i}
                className={`flex gap-7 items-center ${
                  a.title === "Home" ? "bg-stone-100 font-semibold" : ""
                } hover:bg-stone-100 py-[0.6rem] px-3.5 rounded-xl text-sm`}
              >
                <p className="text-xl">
                  <Image
                    src={`${"/2/" + i + ".png"}`}
                    height={100}
                    width={10}
                    alt="logo"
                    className="h-5 w-5"
                  />
                </p>
                <p className="">{a}</p>
              </li>
            );
          })}
        </ul>
        <hr />
        <p className="pt-3 ml-3 font-semibold">Explore</p>
        <ul className="my-5 mt-2">
          {lastLinks.map((a, i) => {
            return (
              <li
                key={i}
                className={`flex gap-7 items-center ${
                  a.title === "Home" ? "bg-stone-100 font-semibold" : ""
                } hover:bg-stone-100 py-[0.6rem] px-3.5 rounded-xl text-sm`}
              >
                <p className="text-xl">
                  <Image
                    src={`${"/3/" + i + ".png"}`}
                    height={100}
                    width={10}
                    alt="logo"
                    className="h-5 w-5"
                  />
                </p>
                <p className="">{a}</p>
              </li>
            );
          })}
        </ul>

        <hr />
      </div>
    </>
  );
}
