import React from "react";
import { Image } from "antd";


const Dividers = () =>{
    return(
        <div className="w-[100%] h-44 bg-black text-white ">
            <div className="w-[65%] h-36 mx-auto flex justify-center items-center gap-16 font-[700] text-[16px]">
                <div  className=" mx-auto" >
                  
                    <Image alt="freeShipping" src="/freeShipping.png" className="h-1 w-1"></Image>
                    <p className="">
                        FREE SHIPING
                    </p>
                   

                </div>
                <div className=" border-[0.1px] mt-2 h-24 border-white"></div>
             
                <div className=" mx-auto">
                    <Image className="text-white" alt="freeinstallation" src="/freeInstallation.png"></Image>
                    <p>
                        FREE INSTALLATION
                    </p>
                </div>
                <div className=" border-[0.1px] h-24 border-white"></div>
                <div  className=" mx-auto">
                <Image alt="bestPrices" src="/bestPrices.png" className="m-2"></Image>
                    <p>
                        BEST PRICES
                    </p>
                </div>
                <div className=" border-[0.1px] h-24 border-white"></div>
                <div  className=" mx-auto">
                    <Image alt="cod" src="/cod.png"></Image>
                    <p>
                        FREE SHIPING
                    </p>
                </div>
                <div className=" border-[1px] h-24 border-white"></div>
                <div >
                    <Image alt="payOnine" src="/payOnline.png" style={{width:40,height:40}}></Image>
                    <p>
                        PAY BY ONLINE
                    </p>
                </div>
             

            </div>
         
        </div>
    )
}
export default Dividers;