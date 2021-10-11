import React from "react";
import Gallery from "./Gallery";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Content = () => {
  return (
    <div className="flex sm:justify-between justify-center bg-gray-100 content">
      <NavLeft />
      <Gallery />
      <NavRight />
    </div>
  );
};

export default Content;
