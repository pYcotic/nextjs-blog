import React from "react";
import "./style.css";

export const Box = (): JSX.Element => {
  return (
    <div className="box">
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="LINKS">
            <div className="div-wrapper">
              <div className="text-wrapper">ABOUT</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper">PORTFOLIO</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper">TESTIMONIALS</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper">CONTACT</div>
            </div>
          </div>
          <h1 className="h-1">MARCOJS</h1>
        </div>
      </div>
    </div>
  );
};
