import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoImg} height={30} width={107} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
