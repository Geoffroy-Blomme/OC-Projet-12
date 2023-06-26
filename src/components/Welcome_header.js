import React from "react";
import "./Welcome_header.css";

export default function WelcomeHeader(props) {
  const { name, description } = props;
  return (
    <div className="welcome-header">
      <div className="welcome-header__welcome">
        Bonjour <span className="welcome-header__welcome__name">{name}</span>
      </div>
      <div className="welcome-header__description">{description}</div>
    </div>
  );
}
