import React from "react";
import FeatureItem from "./FeatureItem";
import "./Features.scss";
import SpaIcon from "@mui/icons-material/Spa";
import ConstructionIcon from "@mui/icons-material/Construction";
import BadgeIcon from "@mui/icons-material/Badge";
import BookIcon from "@mui/icons-material/Book";

function Features() {
  return (
    <div className="features">
      <div className="heading">
        <h1>FEATURES</h1>
      </div>
      <div className="feature-items">
        <FeatureItem
          icon={<SpaIcon fontSize="large" />}
          name={"Eco Friendly"}
        />
        <FeatureItem
          icon={<ConstructionIcon fontSize="large" />}
          name={"Low Maintenance"}
        />
        <FeatureItem
          icon={<BadgeIcon fontSize="large" />}
          name={"No License"}
        />
        <FeatureItem
          icon={<BookIcon fontSize="large" />}
          name={"No Registration"}
        />
      </div>
    </div>
  );
}

export default Features;
