import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import youtube from "../Images/unnamed.jpg";
import profile from "../Images/images.png";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuerry, setSearchQuerry] = useState(""); //take input from input box and store in searchQuerry to get suggestion from api
  const [suggestions, setSuggestions] = useState([]); // stateVariable to peform action like to store suggestion from suggestion yt api
  const [showSuggestion, setShowSuggestion] = useState(false); // suggestion box toggle

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200); // after 200ms suggestion api will call if it is under 200ms it will not call

    if (searchCache[searchQuerry]) {
      setSuggestions(searchCache[searchQuerry]);
    } else {
      getSearchSuggestion();
    }

    return () => {
      clearTimeout(timer); // it will clear prviously created api call which under 200ms
    };
  }, [searchQuerry]); //after changing searchQuerry(which is taking input from input box)  stateVariable the this useEffect will call

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuerry); // YOUTUBE_SEARCH_API is variable where api is stored this is come from constant file
    const json = await data.json();
    setSuggestions(json[1]);

    // upadte Cache
    dispatch(
      cacheResults({
        [searchQuerry]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); // function will call or run which is present in appSlice
  };

  return (
    <>
      <div className="flex items-center justify-between h-19 shadow-md">
        <div className="flex items-center">
          <div
            className="m-5 cursor-pointer mt-3"
            onClick={() => toggleMenuHandler()} // it will call toggleMenuHandler() which will dispatch action or call toggleMenu() which is in appSlice
          >
            <MenuIcon />
          </div>
          <a href="/">
            <img className="h-9 mt-[-6px]" alt="ytlogo" src={youtube} />
          </a>
        </div>
        <div className="w-full max-w-xl  items-center">
          <div className="flex justify-center items-center">
            <input
              className="flex-1 w-11/12 p-5 h-10 border border-gray-400 rounded-l-full bg-white"
              type="text"
              value={searchQuerry}
              onChange={(e) => setSearchQuerry(e.target.value)} // it will take value event and change useState variable
              onFocus={() => setShowSuggestion(true)} // it will show suggestion box when we click on input box
              onBlur={() => setShowSuggestion(false)} // it will disable suggestion box  when we click or go outside of input box
              placeholder="Search"
            />
            <button className="h-[6vh] w-12 border border-gray-400 rounded-r-full text-center bg-gray-100">
              <SearchIcon />
            </button>
          </div>
          {showSuggestion && ( // intially showSuggestion is false so if it gets true than inside () bracess code will run , this is known as Conditional rendering
            <div className="bg-white pl-3 pt-1  text-black  w-[34.4vw] rounded-2xl absolute border shadow-2xl">
              <ul>
                {suggestions.map((s, index) => (
                  <li key={index} className="hover:bg-slate-100 p-1 rounded-lg">
                    <SearchIcon /> {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <img alt="profile" className="h-12 mr-3" src={profile} />
        </div>
      </div>
    </>
  );
};

export default Head;
