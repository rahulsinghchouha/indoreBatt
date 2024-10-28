import React from "react";


const KnowMore = () => {

    return (
        <div className="h-[87vh] w-[100%] bg-white">
            <div className=" h-[100%] w-[95%] mx-auto ">
                <div className=" mt-24 flex justify-center items-center gap-14">
                    <div className="">

                        <img src='/knowmore.png' alt="know more" />

                    </div>
                    <div className=" flex-flex-col gap-8">
                        <h1 className="text-[35px] font-[700] leading-[2] tracking-[1.5px] title">    <span className="title text-[#ff7637]">KNOW</span> MORE ABOUT INDORE BATTERY</h1>
                        <p className="text leading-1 ">Welcome to Indore Battery, your one-stop destination for all your power needs! At Indore <br /> Battery, we understand the vital role reliable batteries play in powering our lives. Whether it's <br /> for your car, bike, or inverter, we've got you covered with a comprehensive range of high- <br /> quality batteries and related appliances.</p>
                        <button
                            className={`w-52 h-14 focus:outline-none border-2  bg-[#1b283a] text-white font-[700] mt-8`}
                        >Learn More</button>

                    </div>
                </div>
                <div className="h-[18%] rounded-lg mt-20 border-[1px] w-[70%] mx-auto flex items-center justify-center gap-12 ">
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-[#ff7637]">
                        <img src="/twoWheelers.png" alt="two wheeler image"></img>
                        <p >Two</p>
                        <p >Wheelers</p>

                    </div>
                    <div className="border-[1px] h-28"></div>
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-[#ff7637]">
                        <img src="/threeWheelers.png" alt="two wheeler image"></img>
                        <p >Three</p>
                        <p >Wheelers</p>

                    </div>
                    <div className="border-[1px] h-28"></div>
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-[#ff7637]">
                        <img src="/passengerVechile.png" alt="two wheeler image"></img>
                        <p >Passenger</p>
                        <p >Vechiles</p>

                    </div>
                    <div className="border-[1px] h-28"></div>
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-[#ff7637]">
                        <img src="/commercialVechile.png" alt="two wheeler image"></img>
                        <p >Commercial </p>
                        <p >Vehicles</p>

                    </div>
                    <div className="border-[1px] h-28"></div>
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-[#ff7637]">
                        <img src="/invertors.png" alt="two wheeler image"></img>
                        <p >Inverter & </p>
                        <p >Batteries</p>


                    </div>
                    <div className="border-[1px] h-28"></div>
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-[#ff7637]">
                        <img src="/eVehicles.png" alt="two wheeler image"></img>
                        <p >E-Vehicles</p>



                    </div>
                    <div className="border-[1px] h-28"></div>
                    <div className="flex flex-col justify-center items-center hover:cursor-pointer hover:text-[#ff7637]">
                        <img src="/otherApplications.png" alt="two wheeler image"></img>
                        <p >Other</p>
                        <p > Applications</p>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default KnowMore;