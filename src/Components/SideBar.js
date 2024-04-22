import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early Return
  if (!isMenuOpen) return null;
  return (
    <div className="h-full bg-white mt-2 text-black w-[15vw] shadow-lg pl-3 pb-2">
      <ul className="pt-5 ">
        <li className="pt-1 pl-2">
          <HomeOutlinedIcon />
          &nbsp;&nbsp;<Link to="/">Home</Link>
        </li>
        <li className="pt-1 pl-2">
          <SubscriptionsOutlinedIcon />
          &nbsp;&nbsp;Shorts
        </li>
        <li className="pt-1 pl-2">
          <ExploreOutlinedIcon />
          &nbsp;&nbsp;Subscription
        </li>
        <li className="pt-1 pl-2">
          <HistoryOutlinedIcon />
          &nbsp;&nbsp;History
        </li>
        <li className="pt-1 pl-2">
          <VideoLibraryOutlinedIcon />
          &nbsp;&nbsp;Library
        </li>
        <li className="pt-1 pl-2">
          <TrendingUpOutlinedIcon />
          &nbsp;&nbsp;Trending
        </li>
      </ul>
      <hr className="my-3" />
      <h1 className=" font-bold">Explore</h1>
      <ul className="pt-1">
        <li className="pt-1 pl-2">
          <MusicNoteOutlinedIcon />
          &nbsp;&nbsp;Music
        </li>
        <li className="pt-1 pl-2">
          <MovieOutlinedIcon />
          &nbsp;&nbsp;Movies
        </li>
        <li className="pt-1 pl-2">
          <LiveTvOutlinedIcon />
          &nbsp;&nbsp;Live
        </li>
        <li className="pt-1 pl-2">
          <SportsSoccerOutlinedIcon />
          &nbsp;&nbsp;Sports
        </li>
        <li className="pt-1 pl-2">
          <BookOutlinedIcon />
          &nbsp;&nbsp;Courses
        </li>
        <li className="pt-1 pl-2">
          <PodcastsOutlinedIcon />
          &nbsp;&nbsp;Podcasts
        </li>
        <li className="pt-1 pl-2">
          <WatchLaterOutlinedIcon />
          &nbsp;&nbsp;Watch Later
        </li>
      </ul>
      <hr className="my-3" />
      <ul className="pt-1">
        <li className="pt-1 pl-2">
          <SettingsOutlinedIcon />
          &nbsp;&nbsp;Settings
        </li>
        <li className="pt-1 pl-2">
          <ReportOutlinedIcon />
          &nbsp;&nbsp;Report History
        </li>
        <li className="pt-1 pl-2">
          <HelpOutlineOutlinedIcon />
          &nbsp;&nbsp;Help
        </li>
        <li className="pt-1 pl-2">
          <FeedbackOutlinedIcon />
          &nbsp;&nbsp;Send Feedback
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
