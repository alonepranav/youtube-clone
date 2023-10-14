"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "b902c166cfmshbe51a7b9a597ba1p168facjsn06eea3672df9",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const LoadingComponent = () => {
    return (
      <>
        <div
          role="status"
          className="w-[24.6rem] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6"
        >
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded"></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          <div className="flex items-center mt-4 space-x-3">
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
  };

  const VideoBox = ({ snippet }) => {
    return (
      <>
        <div className="h-80 w-[24.6rem] rounded-lg">
          <img
            className="h-52 w-full rounded-lg"
            src={snippet?.thumbnails?.medium?.url}
            alt={snippet?.channelTitle}
          />

          <div className="flex px-3 gap-7 mt-3">
            <img
              className="h-8 w-8 rounded-full"
              src={snippet?.thumbnails?.medium?.url}
              alt={snippet?.channelTitle}
            />
            <div>
              <p className="text- font-semibold">{snippet?.title}</p>
              <p className="text-sm text-slate-400">{snippet?.channelTitle}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-start items-center flex-wrap gap-3 w-full px-6">
        {data.length === 0
          ? [..."1111111111111111111111".split("")].map((a, i) => {
            return (
              <div key={i}>
                <LoadingComponent />
              </div>
            );
          })
          : data.map((a, i) => {
            return <VideoBox key={i} {...{ ...a }} />;
          })}
        {/* <VideoBox /> */}
      </div>
    </>
  );
}
