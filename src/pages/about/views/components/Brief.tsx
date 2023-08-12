import React from "react";
import Avatar from "./Avatar";

const Brief = () => {
  return (
    <div className="md:mx-20 sm:mx-5 xs:mx-5">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-10 my-32">
        <div className="">
          <h2 className="text-primary text-2xl font-[500]">What’s inside?</h2>
          <p className="text-sm text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            neque! Ab ex cupiditate magnam nobis ut sapiente repellat cumque
            voluptatum alias similique. Autem sint excepturi itaque cumque
            numquam unde voluptates!
          </p>

          <div className="flex items-center gap-5 my-16 ">
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
          <p className="text-sm text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            neque! Ab ex cupiditate magnam nobis ut sapiente repellat cumque
            voluptatum alias similique. Autem sint excepturi itaque cumque
            numquam unde voluptates!
          </p>
        </div>
        <div className="">
          <div className="flex items-center gap-5 ">
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
          <div className="flex items-center gap-5 my-10">
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
          <p className="text-sm text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            neque! Ab ex cupiditate magnam nobis ut sapiente repellat cumque
            voluptatum alias similique. Autem sint excepturi itaque cumque
            numquam unde voluptates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brief;
