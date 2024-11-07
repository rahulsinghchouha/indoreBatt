import { CarOutlined, DownOutlined, ShopFilled, ShopOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu, Space, Typography } from "antd";

import { RiBattery2ChargeFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { TbShoppingCartBolt } from "react-icons/tb";

import React from "react";
const { Header } = Layout;



const items1 = [
    {
        label: (

            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row">
                <RiBattery2ChargeFill />
                <p className="-mt-1"> Bus Batteries</p>
            </a>

        ),
        key: '0',
    },
    {
        label: (

            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row">
                <RiBattery2ChargeFill />
                <p className="-mt-1"> Truck Batteries</p>
            </a>


        ),
        key: '1',
    },
    {
        label: (

            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row">
                <RiBattery2ChargeFill />
                <p className="-mt-1">Tractor Batteries</p>
            </a>
        ),
        key: '2',
    }, {
        label: (
            <div className="flex flex-row">
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row">
                    <RiBattery2ChargeFill />
                    <p className="-mt-1">Tractor Batteries</p>
                </a>

            </div>

        ),
        key: '3',
    },
    {
        label: (

            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row">
                <RiBattery2ChargeFill />
                <p className="-mt-1">Tractor Batteries</p>
            </a>



        ),
        key: '4',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row">
                <RiBattery2ChargeFill />
                <p className="-mt-1">Tractor Batteries</p>
            </a>


        ),
        key: '5',
    },
    {
        label: (

            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row">
                <RiBattery2ChargeFill />
                <p className="-mt-1">Tractor Batteries</p>
            </a>



        ),
        key: '6',
    },
    {
        label: (

            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row">
                <RiBattery2ChargeFill />
                <p className="-mt-1">Tractor Batteries</p>
            </a>



        ),
        key: '7',
    },
    {
        label: (

            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row" >
                <RiBattery2ChargeFill />
                <p className="-mt-1">Tractor Batteries</p>
            </a>



        ),
        key: '8',
    },



]

const items2 = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <p>Exide Batteries</p>
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                <p> Amaron Batteries</p>
            </a>
        ),
        key: '1',

    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                <p>   Luminous Batteries</p>
            </a>
        ),
        key: '2',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                <p>   Luminous Batteries</p>
            </a>
        ),
        key: '3',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                <p>   Luminous Batteries</p>
            </a>
        ),
        key: '4',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                <p>  Luminous Batteries</p>
            </a>
        ),
        key: '5',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                <p>   Luminous Batteries</p>
            </a>
        ),
        key: '6',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                <p>   Luminous Batteries</p>
            </a>
        ),
        key: '7',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">

                <p>  Luminous Batteries</p>
            </a>
        ),
        key: '8',
    },



]


const Navbar = () => {




    return (
        <div>
            <div className=" w-[100%]  bg-white  border-b-2 ">
                <header

                    className="  bg-white  w-[95%] mx-auto flex justify-between items-center p-3 "
                >
                    <div
                        className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                        <img style={{ width: 35 }} src='./logo.svg' className="" />
                        <h1 level={3} className="text-[22px] ml-1 title" >Indore Battery</h1>
                        </div>

                        <div className="flex gap-4 font-bold cursor-pointer ">
                            <div>
                                <Dropdown menu={{ items: items1, className: 'custom-dropdown-menu' }} overlayClassName="custom-dropdown-overlay" >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <div className="flex">
                                            Categories
                                            <DownOutlined style={{ color: 'rgb(255 118 55)' }} />
                                        </div>
                                    </a>
                                </Dropdown>
                            </div>
                            <div className="">
                                <Dropdown menu={{ items: items2 }}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <div className="flex">
                                            Brand
                                            <DownOutlined style={{ color: 'rgb(255 118 55)' }} />
                                        </div>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>



                    </div>




                    <div className="flex gap-6">
                        <a href="https://indorebattery.com/login">
                            <div ><FiUser style={{ fontSize: '24px', marginTop: 8 }} /></div>
                        </a>
                        <a href="https://indorebattery.com/login" className="mt-2">
                            <div ><TbShoppingCartBolt style={{ fontSize: '25px' }} /></div>
                        </a>
                    </div>
                </header>
            </div >
        </div >
    )
}

export default Navbar;