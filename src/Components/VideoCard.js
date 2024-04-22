import React from "react";

const formatViewCount = (viewCount) => {
  if (viewCount < 1000) {
    return viewCount;
  } else if (viewCount < 1000000) {
    return Math.floor(viewCount / 1000) + "K";
  } else {
    return Math.floor(viewCount / 1000000) + "M";
  }
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const formattedViewCount = formatViewCount(statistics.viewCount);

  return (
    <div className="shadow-lg p-2 m-2 w-72">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="mt-2">
        <h3 className="font-bold line-clamp-2">{title}</h3>
        <p className="text-gray-600">{channelTitle}</p>
        <p className="text-gray-600">{formattedViewCount} Views</p>
      </div>
    </div>
  );
};

export default VideoCard;
