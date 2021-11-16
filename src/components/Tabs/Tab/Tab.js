import React from "react";
import "./Tab.styles.css";

export const Tab = ({ title, active, onClick }) => {
  return (
    <div className={`tab-wrapper ${active ? "active" : ""}`} onClick={onClick}>
      <div className={`title ${active ? "active" : ""}`}>{title}</div>
    </div>
  );
};
