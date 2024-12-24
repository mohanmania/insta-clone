import "./leftSide.css";
import React from "react";
import textlogo from "../images/textlogo.png";
import ligthed from "../images/ligthed.png";
import HomeIcon from "@mui/icons-material/HomeTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import PlayArrowIcon from "@mui/icons-material/PlayArrowTwoTone";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function Leftnav() {


  return (
    <div className="leftSidepart">
      <div className="logo">
        <img className="logoImg" src={textlogo} alt="logo text" />
      </div>
      <div className="navLinkpart" onClick={HomeData}>
        <div className="navlink">
          <HomeIcon sx={{ fontSize: "35px", margin: "0px 10px" }} />
          <div className="navName">home</div>
        </div>
        <div className="navlink">
          <SearchTwoToneIcon sx={{ fontSize: "35px", margin: "0px 10px" }} />
          <div className="navName">search</div>
        </div>
        <div className="navlink">
          <PlayArrowIcon sx={{ fontSize: "35px", margin: "0px 10px" }} />
          <div className="navName">Reels</div>
        </div>
        <div className="navlink">
          <MessageOutlinedIcon sx={{ fontSize: "35px", margin: "0px 10px" }} />
          <div className="navName">Messages</div>
        </div>

        <div className="navlink">
          <FavoriteBorderRoundedIcon
            sx={{ fontSize: "35px", margin: "0px 10px" }}
          />
          <div className="navName">Notifications</div>
        </div>
        <div className="navlink">
          <AddIcon sx={{ fontSize: "35px", margin: "0px 10px" }} />
          <div className="navName">create</div>
        </div>
        <div className="navlink">
          <Avatar
            alt="Profile "
            src={ligthed}
            sx={{ width: 24, height: 24 }}
          />

          <div className="navName">Profile</div>
        </div>

        <div className="navlink">
          <MenuIcon sx={{ fontSize: "35px", margin: "0px 10px" }} />
          <div className="navName">More</div>
        </div>
      </div>
    </div>
  );

  // }
}

export default Leftnav;
