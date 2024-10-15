import React from "react";
import Marquee from "react-fast-marquee";

const Adverties = () => {
    return (
        <div className="mt-2 advertisement">
            <Marquee className="bg-orange-700 text-white p-1 text-[14px]">
                Get Flat   <span className="text-black">  20%  OFF </span>  upto Rs 500 on purchase of atleast 2 batteries of Amaron or Exide. Hurry! Limited time offer.
                Get flat   <span className="text-black">  60% OFF </span>   upto Rs 1100 on purchase of Exide Battery. Hurry! the offer is valid only for this week.

            </Marquee>

        </div>
    )
}
export default Adverties;