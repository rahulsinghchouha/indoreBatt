import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const Footer = () => {

    const indianStates = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
    ];

    const indianCities = [
        "Agra",
        "Agar",
        "Bhopal",
        "Delhi",
        "Indore",
        "Mumbai",
        "Ujjain"
    ];


    return (
        <div className="w-[100%]">

            <div className="w-[100%] h-screen mx-auto flex justify-center ">
                <div className="w-[740px]  bg-[#ffffff]">
                    <div className="flex gap-4 w-[237px] h-[53.72px] items-center">
                        <figure className="w-[51px] h-[53.72px]">
                            <img src="/logo.svg" />
                        </figure>
                        <h1 className="w-[165px] h-[36px] text-[24px] title font-[700]  leading-[35.57px] "> INDORE BATTERY</h1>
                    </div>
                    <div className="mt-[40px] flex gap-32 ">
                        <div >
                            <h1 className="title font-[700] text-[16px] leading-[32px]">CAR BATTERY</h1>
                            <div className="flex flex-col gap-2 w-[129px] h-[209px] mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Fiat</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Hyundai</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Maruti Suzuki</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[130px] text-[14px] font-[400] sora">Mercedez Benz</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Nissan</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Volkswagen</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">BMW</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Skoda</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Tata</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Honda</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Jeep</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Mitsubishi</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Morris Garages</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Jaguar</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Porche</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Renault</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Ford</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Audi</p>
                                </div>
                            </div>



                        </div>

                        <div >
                            <h1 className="title font-[700] text-[16px] uppercase leading-[32px]">Bike BATTERY</h1>
                            <div className="flex flex-col gap-2 w-[129px] h-[209px] mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">TVS</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Bajaj</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Hero</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[130px] text-[14px] font-[400] sora">Suzzuki</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Royal Enfield</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">PIAGGIO</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Yamaha</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">KTM</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Jawa</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Benelli</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Kinetic</p>
                                </div>
                            </div>

                            <h1 className="title font-[700] text-[16px] uppercase mt-32 leading-[32px]">Inverter BATTERY</h1>
                            <div className="flex flex-col gap-2 w-[129px] h-[150px] mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Luminious</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Amaron</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Exide</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[130px] text-[14px] font-[400] sora">Livguard</p>
                                </div>



                            </div>





                        </div>


                        <div >
                            <h1 className="title font-[700] text-[16px] uppercase leading-[32px]">Company Info</h1>
                            <div className="flex flex-col gap-2 w-[200px] h-[140px] mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">About Us</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[96px] text-[14px] font-[400] sora">Contact Us</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[130px] text-[14px] font-[400] sora">Special Offers</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[159px] text-[14px] font-[400] sora">Warranty Registration</p>
                                </div>

                            </div>

                            <h1 className="title font-[700] text-[16px] uppercase  leading-[32px]">Company Policy</h1>
                            <div className="flex flex-col gap-2 w-[200px] h-[150px] mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[150px] text-[14px] font-[400] sora">Privacy Policy</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[150px] text-[14px] font-[400] sora">Shipping Policy</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[190px] text-[14px] font-[400] sora">Cancellation and Refund</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[190px] text-[14px] font-[400] sora">Terms and Conditions</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[130px] text-[14px] font-[400] sora">FAQs</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[12px] h-[1px] border-[1px] border-[#ff7637] "></div>
                                    <p className="w-[130px] text-[14px] font-[400] sora">Warranty</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-[80px] flex" >

                    <div className="px-20">
                        <h1 className="text-[24px] font-[700] leading-[2] tracking-[1.5px] title mb-4"> GET AN   <span className="title text-[#ff7637]">ENQUIRY</span></h1>

                        <div className="flex flex-col gap-5 ">
                            <Input type="text" className="h-[48px] w-[400px] border-[1px]  " defaultValue='Name' />

                            <Input type="text" className="h-[48px] w-[400px] border-[1px] " defaultValue='Phone' />

                            <Select className="h-[48px] w-[400px] border-[1px] rounded-none inputBorder p-0" defaultValue="Choose a State" >
                                {indianStates.map((state, index) => (
                                    <Select.Option key={index} value={state}>
                                        {state}
                                    </Select.Option>
                                ))}
                            </Select>


                            <Select className="h-[48px] w-[400px] border-[1px] rounded-none inputBorder bg-white p-0" defaultValue="Choose a Cities" >
                                {indianCities.map((state, index) => (
                                    <Select.Option key={index} value={state}>
                                        {state}
                                    </Select.Option>
                                ))}
                            </Select>

                            <Input type="text" defaultValue="Write your Message here..." className="w-[400px] h-[130px] bg-white border-[1px]" />

                            <button
                                className={`w-56 h-[70px] m-2 focus:outline-none border-2 text-[18px] bg-[#ff7637] text-white font-[700]`}
                            >Submit</button>

                            <div>
                                <h1 className="text-[16px] title font-[700] mb-6 mt-8">SOCIAL MEDIA</h1>

                                <div className="flex gap-4">
                                    <div className="h-[48px] w-[48px] rounded-full border-[1px] bg-white flex justify-center items-center">
                                        <img src="/fi_2111491.svg" alt="img media" />
                                    </div>
                                    <div className="h-[48px] w-[48px] rounded-full border-[1px]  flex justify-center items-center">
                                        <img src="/fi_3128208.svg" alt="img" />
                                    </div>
                                    <div className="h-[48px] w-[48px] rounded-full border-[1px]  flex justify-center items-center">
                                        <img src="/fi_10124083.svg" alt="imgs" />
                                    </div>
                                </div>


                            </div>

                        </div>





                    </div>

                </div>

            </div>
            <div className="w-[1319px] h-[125px] mx-auto">
                <div className="  flex items-center justify-evenly">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <figure>
                            <img src="/freeShippingFtr.png" />
                        </figure>
                        <figcaption className="font-[700]">
                            FREE SHIPING
                        </figcaption>
                    </div>
                    <div className="h-[100px] border-[1px]"></div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <figure>
                            <img src="/freeInstallationFtr.png" />
                        </figure>
                        <figcaption className="font-[700]">
                            FREE INSTALLATION
                        </figcaption>

                    </div>
                    <div className="h-[100px] border-[1px]"></div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <figure>
                            <img src="/bestPricesFtr.png" />
                        </figure>
                        <figcaption className="font-[700]">
                            BEST PRICE
                        </figcaption>
                    </div>
                    <div className="h-[100px] border-[1px]"></div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <figure>
                            <img src="/codFtr.png" />
                        </figure>
                        <figcaption className="font-[700]">
                            CASH ON DELIVERY
                        </figcaption>
                    </div>
                    <div className="h-[100px] border-[1px]"></div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <figure>
                            <img src="/codFtr2.png" />
                        </figure>
                        <figcaption className="font-[700]">
                            PAY BY ONLINE
                        </figcaption>
                    </div>

                </div>


            </div>

            <div className=" w-[100%] border-[1px] "></div>
            <div className="h-[95px] flex flex-col justify-center items-center gap-2 text-[16px]">
                <p className="text-[15px]">Copyright 2024.</p>
                <p className="text-[15px]">All Rights Reserved By Indore Battery</p>
            </div>

        </div>
    )
}
export default Footer;