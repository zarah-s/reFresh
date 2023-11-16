import React, { useEffect, useState } from "react";
import Assets from "../../../../assets";

const OurStory = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleScreenWidthChange = () => {
    setScreenWidth(window.innerWidth);
    // Perform any actions or updates based on the screen width change
  };

  useEffect(() => {
    // Event listener for screen resize
    window.addEventListener("resize", handleScreenWidthChange);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("resize", handleScreenWidthChange);
    };
  }, []);
  return (
    <div className=" md:mx-20 my-20 sm:mx-5 xs:mx-5 sm:m">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center">
        {screenWidth >= 576 ? (
          <div className="flex items-center justify-center">
            <img src={Assets.OurStory} className="h-96" alt="" />
          </div>
        ) : null}
        <div className="xl:px-0 lg:px-0 md:px-0 sm:px-3 xs:px-3 space-y-4">
          <h1 className="text-primary font-[400] text-4xl">Our Story</h1>
          <p className="text-primary">
            reFresh was introduced in 2020 post covid era. The brand was
            introduced to increase the company's market share to make up for the
            niche of consumers that aren't able to afford Farmfresh. The reFresh
            initiative was based on consumers that wants quality yoghurt but
            cannot afford to spend so much on it. Affordable refreshing quality
            was the basis reFresh brand was birthed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
