import { CarOutlined, DownOutlined, ShopFilled, ShopOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu, Space, Typography } from "antd";
import { Image } from "antd";
import { RiBattery2ChargeFill } from "react-icons/ri";

import React from "react";
const { Header } = Layout;

const items1 = [
    {
        label: (
           
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row"> 
             <RiBattery2ChargeFill/>
              <p className="-mt-1"> Bus Batteries</p> 
            </a>

        ),
        key: '0',
    },
    {
        label: (
          
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row"> 
             <RiBattery2ChargeFill/>
               <p className="-mt-1"> Truck Batteries</p>
            </a>

           
        ),
        key: '1',
    },
    {
        label: (
           
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row"> 
             <RiBattery2ChargeFill/>
               <p className="-mt-1">Tractor Batteries</p>
            </a>          
        ),
        key: '2',
    }, {
        label: (
            <div className="flex flex-row">
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row"> 
             <RiBattery2ChargeFill/>
               <p className="-mt-1">Tractor Batteries</p>
            </a>

            </div>
          
        ),
        key: '3',
    },
    {
        label: (
          
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row"> 
             <RiBattery2ChargeFill/>
               <p className="-mt-1">Tractor Batteries</p>
            </a>

          
          
        ),
        key: '4',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row"> 
             <RiBattery2ChargeFill/>
               <p className="-mt-1">Tractor Batteries</p>
            </a>

          
        ),
        key: '5',
    },
    {
        label: (
           
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row"> 
             <RiBattery2ChargeFill/>
               <p className="-mt-1">Tractor Batteries</p>
            </a>

        
          
        ),
        key: '6',
    },
    {
        label: (
          
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row"> 
             <RiBattery2ChargeFill/>
               <p className="-mt-1">Tractor Batteries</p>
            </a>

          
          
        ),
        key: '7',
    },
    {
        label: (
            
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className="flex flex-row" > 
             <RiBattery2ChargeFill/>
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
            <Layout className=" w-[100%]">
                <Header


                    theme
                    className="border-b-2 bg-white h-15 w-[100%] flex justify-between"
                >
                    <Menu
                        theme="white" className="flex align-middle w-[27%] mt-1 bg-white">
                        <Menu.Item><Image width={40} src='./logo.svg' /><Typography.Title level={3} className="mb-3 ml-2 mr-96">Indore Battery</Typography.Title></Menu.Item>
                     
                     <Menu className="flex flex-row -ml-[150px]">
                        <Menu.Item className="">
                            <Dropdown menu={{ items: items1 ,className:'custom-dropdown-menu'}}  overlayClassName="custom-dropdown-overlay" >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Categories
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item className="">
                            <Dropdown menu={{items:items2}}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Brand
                                        <DownOutlined/>
                                    </Space>
                                </a>
                            </Dropdown>
                        </Menu.Item>
                        </Menu>
                        </Menu>
                
                    <Menu className="flex">
                        <Menu.Item><UserOutlined /></Menu.Item>
                        <Menu.Item><CarOutlined /></Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </div>
    )
}

export default Navbar;