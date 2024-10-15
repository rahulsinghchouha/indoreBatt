import React from "react";
import { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
import { TbFilterDown } from "react-icons/tb";
import Title from "antd/es/skeleton/Title";

const Menus = () => {
    return (
        <div className="flex gap-8 ml-12 font-sm opacity-80 items-center mt-1 cursor-pointer text-sm text-bold">
            <a href="https://indorebattery.com/offers" className=" hover:text-orange-700">Special Offers</a>
            <a href="https://indorebattery.com/about-us"  className=" hover:text-orange-700">About US</a>
            <a href="https://indorebattery.com/warranty-registeration" className=" hover:text-orange-700"> Warranty Registration</a>
            <a href="https://indorebattery.com/faq" className=" hover:text-orange-700">FAQ</a>
            <a href="https://indorebattery.com/contact-us" className=" hover:text-orange-700">Conatct US</a>
        </div>
    )
}
export default Menus;