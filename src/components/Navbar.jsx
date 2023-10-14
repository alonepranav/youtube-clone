"use client";

import Image from "next/image";
import React from "react";
import image from "../assets/navbar_image.png";
import image1 from "../assets/profile.jpg";
import { AiOutlineClose, AiOutlineVideoCameraAdd } from "react-icons/ai";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Navbar() {
  const lastLinks = [
    "Trending",
    "Shopping",
    "Music",
    "Movies",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Shopping",
    "Learnig",
    "Fashion & Beauty",
    "Podcasts",
  ];

  return (
    <>
      <div className="bg-white fixed top-0 left-0 z-20">
        <Sidebar />
        <div className="w-screen flex justify-between items-center px-8 py-2 bg-white">
          <div className="flex gap-5 items-center">
            <i className="bi bi-list text-2xl"></i>
            <a href="/">
              <Image src={image} className="h-8 w-[7.8rem]" alt="Logo" />
            </a>
          </div>

          <div className="relative flex justify-center items-center gap-3">
            <div className="flex justify-center items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-[0.4rem] placeholder:text-stone-500 px-4 rounded-l-full border-2 border-y-slate-300 border-l-slate-300 focus:border-slate-400 outline-none w-[33rem]"
                  onInput={(e) => {
                    const a = e.target.nextElementSibling;
                    if (e.target.value !== "") {
                      a.classList.remove("hide");
                    } else {
                      a.classList.add("hide");
                    }
                  }}
                />
                <p className="hide absolute top-0.5 right-1 px-2 py-[0.48rem] hover:bg-slate-200 text-xl rounded-full">
                  <AiOutlineClose className=" " />
                </p>
              </div>
              <div className="bg-slate-50 hover:bg-slate-100 rounded-r-full py-[0.3rem] px-7 border-2 border-y-slate-300 border-r-slate-300 flex justify-center items-center">
                <i className="bi bi-search text-xl"></i>
              </div>
            </div>
            {/* <i className="bi bi-x-lg"></i> */}
            <i className="bi bi-mic-fill px-3 py-2 bg-slate-100 hover:bg-slate-200 text-xl rounded-full "></i>
          </div>

          <div className="flex justify-center items-center gap-4 pr-2">
            <p className="px-3 py-3 hover:bg-slate-200 text-xl rounded-full">
              <AiOutlineVideoCameraAdd className=" " />
            </p>

            <p className="relative">
              <span className="absolute -top-1 text-white right-0 bg-rose-700 text-xs rounded-full px-1 py-[.01rem]">
                7+
              </span>
              <i className="bi bi-bell px-3 py-2 hover:bg-slate-200 text-xl rounded-full"></i>
            </p>

            <Image src={image1} className="h-9 w-9 rounded-full" alt="logo" />
          </div>
        </div>

        <div className="mt-2 mb-8 px-6 bg-white pl-64">
          &nbsp;
          <button className="bg-black text-white text-sm py-1.5 px-3 mr-3 rounded-lg">
            Pranav
          </button>
          {lastLinks.map((a, i) => {
            return (
              <button
                className="bg-gray-100 text-black text-sm py-1.5 px-3 mr-3 rounded-lg"
                key={i}
              >
                {a}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
