import React from "react";



const Dividers = () => {
    return (
        <div className="w-[100%] h-[148px] bg-black text-white ">
            <div className="w-[1320px] h-[148px] mx-auto flex justify-center items-center gap-16 ">
                <div className="  flex flex-col justify-center" >
                    <figure className="w-[140px] h-[58px]  flex justify-center mb-[0px] ml-[auto] mr-[auto] mt-[0]">
                        <img alt="freeShipping" src="./freeShipping.png" className="text-white h-[35px] w-[42.05px] ml-[auto] mr-[auto]" />
                    </figure>
                    <figcaption className="font-semibold font-['Oswald'] text-[18px]  w-[140px] 320:mx-auto 320:mt-[10px] 320:text-[18px] 560:text-[18px]">
                        FREE SHIPPING
                    </figcaption>


                </div>
                <div className=" border-[0.1px] mt-2 h-24 border-white opacity-30"></div>

                <div className="  flex flex-col justify-center  ">
                    <figure className="w-[140px] h-[58px]  flex justify-center mb-[0px] ml-[auto] mr-[auto] mt-[0]">
                        <img className="text-white h-[35px] w-[42.05px]" alt="freeinstallation" src="/freeInstallation.png" />
                    </figure>

                    <figcaption className="font-semibold font-['Oswald'] text-[18px] w-[140px] 320:mx-auto 320:mt-[10px] 320:text-[18px] 560:text-[18px]">
                        FREE INSTALLATION
                    </figcaption>
                </div>
                <div className=" border-[1px] h-24 border-white opacity-30"></div>
                <div className="flex flex-col justify-center ">
                    <figure className="w-[140px] h-[58px] flex justify-center mb-[0px] ml-[auto] mr-[auto] mt-[0]">
                        <img alt="bestPrices" src="/bestPrices.png" className="text-white h-[35px] w-[42.05px]" />
                    </figure>

                    <figcaption className="font-semibold font-['Oswald'] text-[18px]  w-[140px] 320:mx-auto 320:mt-[10px] 320:text-[18px] 560:text-[18px]">
                        BEST PRICES
                    </figcaption>
                </div>
                <div className=" border-[0.1px] h-24 border-white opacity-30"></div>
                <div className="   flex flex-col justify-center">
                    <figure className="w-[140px] h-[58px]  flex justify-center mb-[0px] ml-[auto] mr-[auto] mt-[0]">
                        <img alt="cod" src="/cod.png" className="text-white h-[35px] w-[42.05px]" />
                    </figure>

                    <figcaption className="font-semibold font-['Oswald'] text-[18px]  w-[140px] 320:mx-auto 320:mt-[10px] 320:text-[18px] 560:text-[18px]">
                        CASH ON DELIVERY
                    </figcaption>
                </div>
                <div className=" border-[1px] h-24 border-white opacity-30"></div>
                <div className="  flex flex-col justify-center ">
                    <figure className="w-[140px] h-[58px]  flex justify-center mb-[10px] ml-[auto] mr-[auto] mt-[0]">
                        <img alt="payOnine" src="/payOnline.png" className="text-white h-[35px] w-[42.05px]" />
                    </figure>

                    <figcaption className="font-semibold font-['Oswald'] text-[18px]  w-[140px] 320:mx-auto 320:mt-[10px] 320:text-[18px] 560:text-[18px] mx-auto">
                        PAY BY ONLINE
                    </figcaption>
                </div>


            </div>

        </div>
    )
}
export default Dividers;