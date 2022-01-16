import React from "react";
import "./FeatureItem.scss";

function FeatureItem({ icon, name }) {
  return (
    <div className="item">
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default FeatureItem;
