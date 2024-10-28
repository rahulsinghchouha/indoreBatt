import React from "react";


const Address = () => {


    return (
        <div className="w-[100%] h-[250px] z-20 addressBag relative">
            <div className="w-[1319px] h-[194px] mx-auto bg-[#ff7637] flex justify-evenly items-center gap-4 ">
                <div className=" border-white flex items-center">
                    <figure className="h-[69px] w-[69px]">
                        <img src="Group.svg" alt="location imag" />
                    </figure>

                    <div className="flex flex-col">
                        <p className="text-[18px] font-[400] text-white mt-[-20px] mb-[15px] ">Our Address</p>


                        <div className="w-[267px] h-[70px]   ">
                            <p className="text-[18px] h-[70px] w-[327px] uppercase font-[600] leading-[35px]  text-white">22, Gulab bagh, dewas naka, indore, 452010 </p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="h-[104px] w-[0px] borDer border-[#ffffff]"></div>
                <div className=" border-white">
                    <div className="w-[183px] h-[74px] flex items-center gap-8">
                        <figure className="w-[30px] h-[30px]">
                            <img src="/Phone.png" />
                        </figure>
                        <div>
                            <p className="w-[63px] h-[34px] text-[18px] font-[400] text-white ">Call Us</p>
                            <p className="w-[130px] h-[35px] text-[18px] font-[600] text-white title "> 883 912 4525</p>
                        </div>
                    </div>
                </div>
                <div className="h-[104px]  w-[0px] borDer border-[#ffffff]"></div>
                <div>
                    <div className="w-[351px] h-[74px] flex items-center gap-8">
                        <figure className="h-[34px] w-[34px] ">
                            <img src="/Email.png" />
                        </figure>
                        <div className="">
                            <p className="w-[66px] h-[34px] text-[18px] text-[white] font-[400]">Mail Us</p>
                            <p className="w-[267px] h-[35px] text-[18px] leading-[35px] text-white title font-[600]">BATTERYINDORE@GMAIL.COM</p>
                        </div>


                    </div>
                </div>



            </div>



        </div>
    )

}


export default Address;