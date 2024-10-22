import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Button, Card, Radio, Select } from 'antd';

const Main = () => {

    const [carBattery, setCarBattery] = useState(true);


    const handleClick = () => {

        setCarBattery(!carBattery);


    };


    const images = [
        '/luminous.jpg',
        '/amaron.png',
        '/banner.jpg',
        '/banner2.jpg',
        '/exide.jpg',
        '/livguard.webp'
    ]

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


    return (
        <div className='flex w-[100%] h-[580px]'>
            <div className='w-[73%] max-h-[100%] '>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    autoplay={{
                        delay: 3000, // Delay between slides (3000ms = 3 seconds)
                        disableOnInteraction: false, // Continue autoplay even after user interaction
                    }}
                    onAutoplay={1}
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>

                            <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '580px', objectFit: 'cover' }} />

                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <div className='w-[29%] '>

                <div className='p-[20px]'>

                    <h1 className=' title text-[24px] font-[700] p-[10px] mt-4 leading-[15.5px] '>FIND YOUR BATTERY QUICKLY</h1>

                    <div className='flex gap-4 m-2'>

                        <button
                            className={`w-48 h-11 m-2 focus:outline-none border-2  ${carBattery ? 'bg-[#ff7637]' : 'bg-white'} `}
                            onClick={handleClick}>Car Battery</button>
                        <button
                            className={`w-48 h-11 m-2 focus:outline-none border-2  ${carBattery ? 'bg-white' : 'bg-[#ff7637]'} `}
                            onClick={handleClick}>Inverter Battery</button>
                    </div>
                    <div>
                        {
                            carBattery ? (
                                <div>
                                    <form>
                                        <div className='flex flex-col gap-2 p-2 font-[400]'>
                                            <label for="cars">Car Brand  </label>

                                            <Select
                                                defaultValue="Select a Model"
                                                style={{ height: 40 }}

                                                options={[
                                                    { value: 'jack', label: 'Saab' },
                                                    { value: 'Mercedes', label: 'Mercedes' },
                                                    { value: 'Audi', label: 'Audi' },
                                                    { value: 'Mahindra', label: 'Mahindra', },
                                                    { value: 'TATA', label: 'TATA' },
                                                    { value: 'Hyundai', label: 'Hyundai' },
                                                    { value: 'Maruti', label: 'Maruti Suzuki' },
                                                    { value: 'Ford', label: 'Ford', },
                                                    { value: 'Jaguar', label: 'Jaguar' },
                                                    { value: 'lucy', label: 'Mercedes' },
                                                    { value: 'Yiminghe', label: 'Audi' },
                                                    { value: 'disabled', label: 'Mahindra', },
                                                ]}
                                            />
                                        </div>
                                        <div className='flex flex-col gap-2 p-2 font-[400]'>
                                            <label for="cars">Car Model   </label>

                                            <Select
                                                defaultValue="Choose a Brand"
                                                style={{ height: 40 }}

                                                options={[
                                                    { value: 'jack', label: 'Saab' },
                                                    { value: 'Mercedes', label: 'Mercedes' },
                                                    { value: 'Audi', label: 'Audi' },
                                                    { value: 'Mahindra', label: 'Mahindra', },
                                                    { value: 'TATA', label: 'TATA' },
                                                    { value: 'Hyundai', label: 'Hyundai' },
                                                    { value: 'Maruti', label: 'Maruti Suzuki' },
                                                    { value: 'Ford', label: 'Ford', },
                                                    { value: 'Jaguar', label: 'Jaguar' },
                                                    { value: 'lucy', label: 'Mercedes' },
                                                    { value: 'Yiminghe', label: 'Audi' },
                                                    { value: 'disabled', label: 'Mahindra', },
                                                ]}
                                            />

                                        </div>

                                        <div className='flex flex-col gap-2 p-2 font-[400]'>
                                            <label for="cars">Battery Brand </label>

                                            <Select
                                                defaultValue="Battery Brand"
                                                style={{ height: 40 }}

                                                options={[
                                                    { value: 'jack', label: 'Saab' },
                                                    { value: 'Mercedes', label: 'Mercedes' },
                                                    { value: 'Audi', label: 'Audi' },
                                                    { value: 'Mahindra', label: 'Mahindra', },
                                                    { value: 'TATA', label: 'TATA' },
                                                    { value: 'Hyundai', label: 'Hyundai' },
                                                    { value: 'Maruti', label: 'Maruti Suzuki' },
                                                    { value: 'Ford', label: 'Ford', },
                                                    { value: 'Jaguar', label: 'Jaguar' },
                                                    { value: 'lucy', label: 'Mercedes' },
                                                    { value: 'Yiminghe', label: 'Audi' },
                                                    { value: 'disabled', label: 'Mahindra', },
                                                ]}
                                            />

                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='flex flex-col gap-2 p-2 font-[400]'>
                                                <label for="State">State </label>

                                                <Select defaultValue="Choose a State" style={{ width: 200, height: 40 }}>
                                                    {indianStates.map((state, index) => (
                                                        <Select.Option key={index} value={state}>
                                                            {state}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div className='flex flex-col gap-2 p-2 font-[400]'>
                                                <label for="State">City </label>

                                                <Select defaultValue="Choose a City" style={{ width: 200, height: 40 }}>
                                                    {indianStates.map((state, index) => (
                                                        <Select.Option key={index} value={state}>
                                                            {state}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>

                                        <button
                                            className={`w-56 h-14 m-2 focus:outline-none border-2  bg-[#ff7637] text-white font-[700]`}
                                        >Find Battery</button>


                                    </form>


                                </div>) : (

                                <div>
                                    <form>
                                        <div className='flex flex-col gap-2 p-2 font-[400]'>
                                            <label className="bloch text-smfont-semibold mb-2" for="cars">I am looking for </label>
                                            <Radio.Group >
                                                <Radio value={1}>Inverter</Radio>
                                                <Radio value={2}>Inverter + Battery</Radio>
                                            </Radio.Group>
                                        </div>

                                        <div className='flex flex-col gap-2 p-2 font-[400]'>
                                            <label for="capacity">Capacity </label>

                                            <Select
                                             
                                                style={{ height: 40 }}

                                                options={[
                                                    { value: '', label: 'Choose Capacity' },
                                                    { value: '80', label: '80' },
                                                    { value: '100', label: '100' },
                                                    { value: '115', label: '115' },
                                                    { value: '120', label: '120', },
                                                    { value: '135', label: '135' },
                                                    { value: '140', label: '140' },
                                                    { value: '145', label: '145' },
                                                ]}
                                            />

                                        </div>
                                        <div className='flex flex-col gap-2 p-2 font-[400]'>
                                            <label for="cars">Battery Brand  </label>

                                            <Select
                                                defaultValue="Select a Model"
                                                style={{ height: 40 }}

                                                options={[
                                                    { value: 'jack', label: 'Luminous' },
                                                    { value: 'Mercedes', label: 'Exide' },
                                                    { value: 'Audi', label: 'Livguard' },
                                                    { value: 'Mahindra', label: 'Power Zone', },
                                                    { value: 'TATA', label: 'SF Sonic' },

                                                ]}
                                            />
                                        </div>
                                        <div className='flex gap-6'>
                                            <div className='flex flex-col gap-2 p-2 font-[400]'>
                                                <label for="State">State </label>

                                                <Select defaultValue="Choose a State" style={{ width: 200, height: 40 }}>
                                                    {indianStates.map((state, index) => (
                                                        <Select.Option key={index} value={state}>
                                                            {state}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div className='flex flex-col gap-2 p-2 font-[400]'>
                                                <label for="State">City </label>

                                                <Select defaultValue="Choose a City" style={{ width: 200, height: 40 }}>
                                                    {indianStates.map((state, index) => (
                                                        <Select.Option key={index} value={state}>
                                                            {state}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                        <button
                                            className={`w-56 h-14 m-2 focus:outline-none border-2  bg-[#ff7637] text-white font-[700]`}
                                        >Find Battery</button>

                                    </form>


                                </div>)
                        }




                    </div>



                </div>

            </div>


        </div>
    )


}
export default Main;