import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // API calls

    // make an API call after every key stroke
    // but the difference between two API calls is < 200ms
    // decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - s
   * - render the component
   * - useEffect()
   * - start timer = > make api call after 200ms
   *
   *
   * key - sa
   * - destroy the component (useEffect return method)
   * - render the component
   * - useEffect()
   * - start timer = > make api call after 200ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }))
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <div className="flex p-4 justify-between bg-black sticky top-0 z-50 shadow-lg">
      <div className="flex gap-6">
        <div className="flex items-top gap-4">
          <img
            className="h-6 cursor-pointer"
            onClick={toggleMenuHandler}
            src="hamburger.svg"
            alt="menu"
          />
          {/* <Link to="/"> */}
          <img className="h-5" src="logo.svg" alt="youtube-logo" /> 
          {/* </Link> */}
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <div>
            <input
              className="pl-4 h-10 w-[25vw] rounded-s-3xl bg-gray-200 text-black placeholder-black"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className=" pr-4 h-10 w-[5vw] rounded-e-3xl text-red-900 bg-white">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="absolute mt-2 w-[25vw] rounded-xl bg-gray-200 text-black shadow-lg">
          {showSuggestions && (
            <ul>
              {suggestions.map((name) => {
                return (
                  <li
                    key={name}
                    className="p-1 pl-4 flex gap-3 items-center hover:bg-gray-500 cursor-default hover:rounded-xl hover:text-white"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faSearch} /> <span>{name}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div>
        <img
          className="rounded-[50%] h-10"
          alt="user-logo"
          src="https://yt3.ggpht.com/yti/ANjgQV9-eAL9c8IGd91p4r7Ed2G_JjtKf4RjozVdXlD5OwY=s88-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </div>
  );
};

export default Head;
