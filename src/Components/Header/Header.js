import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
// import { useStateValue } from "../../StateProvider";

function Header() {
  const user = {};
  //   const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header-left">
        <Avatar
          className="header-avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header-search">
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div>
      <div className="header-right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;