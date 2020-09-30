import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={3}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="122" cy="123" r="124" />
      <rect x="0" y="270" rx="6" ry="6" width="250" height="27" />
      <rect x="-1" y="311" rx="15" ry="15" width="252" height="75" />
      <rect x="-1" y="403" rx="6" ry="6" width="84" height="40" />
      <rect x="118" y="403" rx="21" ry="21" width="130" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
