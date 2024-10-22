import { CarOutlined, DownOutlined, ShopFilled, ShopOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu, Space, Typography } from "antd";
import { Image } from "antd";
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

    const navigate = useNavigate();


    return (
        <div>
            <Layout className=" w-[100%]  bg-white  mx-auto justify-center align-middle border-b-2 ">
                <Header
                    theme
                    className="  bg-white  w-[95%] mx-auto flex justify-between items-center p-3 "
                >
                    <Menu
                        theme="white" className="flex items-center">
                        <Menu.Item>
                            <Image style={{ width: 35 }} src='./logo.svg' className="" />
                            <Typography.Title level={3} className="text-[22px] ml-1 title" >Indore Battery</Typography.Title>
                        </Menu.Item>


                        <Menu className="flex flex-row font-bold">
                            <Menu.Item>
                                <Dropdown menu={{ items: items1, className: 'custom-dropdown-menu' }} overlayClassName="custom-dropdown-overlay" >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Categories
                                            <DownOutlined style={{ color: 'rgb(255 118 55)' }} />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Menu.Item>
                            <Menu.Item className="">
                                <Dropdown menu={{ items: items2 }}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Brand
                                            <DownOutlined style={{ color: 'rgb(255 118 55)' }} />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </Menu>

                    <Menu className="flex align-middle">
                        <a href="https://indorebattery.com/login">
                            <Menu.Item ><FiUser style={{ fontSize: '24px', marginTop: 8 }} /></Menu.Item>

                        </a>
                        <a href="https://indorebattery.com/login" className="mt-2">
                            <Menu.Item ><TbShoppingCartBolt style={{ fontSize: '25px' }} /></Menu.Item>
                        </a>
                    </Menu>

                </Header>

            </Layout>
        </div>
    )
}

export default Navbar;