import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFire,faBagShopping,faMusic,faClapperboard,faPodcast,faGamepad,faTrophy,faAngleRight}
  from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

   const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

   if(!isMenuOpen) return null;
     return (
        <div className="bg-white  "> 
         <div>
         <h1 className="font-bold text-xl pb-3"> <Link to="/">Home</Link></h1>
         <h1 className="font-bold text-xl pb-3"> Shorts</h1>
         <h1 className="font-bold text-xl pb-3"> Subscription</h1>
         </div>
         <div className="h-[1px] bg-gray-700 mb-3"></div>
         <div>
         <h1 className="font-bold text-xl pb-3 flex gap-3"> <span>You</span><span><FontAwesomeIcon icon={faAngleRight}/></span></h1>
         <ul className="">
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span className="text-black"><FontAwesomeIcon icon={faFire}/></span><span>Your Channel</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faBagShopping}/></span><span>History</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faMusic}/></span><span>Playlists</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faClapperboard}/></span><span>Your Videos</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faPodcast}/></span><span>Watch Later</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faGamepad}/></span><span>Liked Videos</span></li>
         </ul>
         </div>
         <div className="h-[1px] bg-gray-700 mb-3"></div>
         <div>
         <h1 className="font-bold text-xl pb-3"> Explore</h1>
         <ul className="">
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span className="text-black"><FontAwesomeIcon icon={faFire}/></span><span>Trending</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faBagShopping}/></span><span>Shopping</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faMusic}/></span><span>Music</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faClapperboard}/></span><span>Movies</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faPodcast}/></span><span>Live</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faGamepad}/></span><span>Gaming</span></li>
            <li className="pb-2 flex gap-3 justify-between cursor-pointer"><span><FontAwesomeIcon icon={faTrophy}/></span><span>Sports</span></li>
         </ul>
         </div>

        </div>
     )
}

export default Sidebar;