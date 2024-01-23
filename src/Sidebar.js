import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { div, useNavigate } from "react-router-dom";
import { logout } from "./slices/userSlice";
import user from "./Images/user.png"
import Brand from "./Images/Brand.png"


export default function Sidebar(props) {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logout()).then(() => navigate("/"))
    }

    return (
        <>

            <div className="w-full h-full bg-gray-200" style={{ fontFamily: "-apple-system, BlinkMacSystemFont,Segoe UI, Roboto,Oxygen" }}>
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <div className="absolute lg:relative   h-screen shadow bg-gray-100 hidden lg:block" >
                        <div className="h-16 w-full flex items-center px-8">

                            <img onClick={() => navigate("/")} className="cursor-pointer" src={Brand} alt="brand" />
                        </div>
                        <ul aria-orientation="vertical" className=" py-6">
                            {props.userData && props.userData.role === "user" ? (<>
                                <li onClick={() => navigate("/employee/dashboard")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal pt-5 focus:text-[#452a72] focus:outline-none">
                                    <div className="flex items-center">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                            </svg>
                                        </div>
                                        <span className="ml-2">Dashboard</span>
                                    </div>
                                </li>
                                <li onClick={() => navigate("/employee/enquiry")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mt-4 mb-4 pt-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                    <div

                                        className="flex items-center">
                                        <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-images"></i>

                                        <span className="ml-2">Enquiry</span>
                                    </div>
                                </li>
                                <li onClick={() => navigate("/employee/leads")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mb-4 pt-2  hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                    <div className="flex items-center">
                                        <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-id-card"></i>
                                        <span className="ml-2">Leads</span>
                                    </div>
                                </li>
                                <li onClick={() => navigate("/employee/seller")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mb-4 pt-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                    <div className="flex items-center">
                                        <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-credit-card"></i>

                                        <span className="ml-2">Seller</span>
                                    </div>
                                </li>
                                <li onClick={() => navigate("/employee/followup")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mb-4 pt-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                    <div className="flex items-center">
                                        <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-credit-card"></i>

                                        <span className="ml-2">Followup</span>
                                    </div>
                                </li>
                            </>
                            ) :
                                (
                                    <>
                                        <li onClick={() => navigate("/admin/dashboard")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal pt-5 focus:text-[#452a72] focus:outline-none">
                                            <div className="flex items-center">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <rect x={4} y={4} width={6} height={6} rx={1} />
                                                        <rect x={14} y={4} width={6} height={6} rx={1} />
                                                        <rect x={4} y={14} width={6} height={6} rx={1} />
                                                        <rect x={14} y={14} width={6} height={6} rx={1} />
                                                    </svg>
                                                </div>
                                                <span className="ml-2">Dashboard</span>
                                            </div>
                                        </li>
                                        <li onClick={() => navigate("/admin/enquiry")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                            <div

                                                className="flex items-center">
                                                <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-user-doctor"></i>
                                                <span className="ml-2">Enquiry</span>
                                            </div>
                                        </li>
                                        <li onClick={() => navigate("/admin/leads")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                            <div

                                                className="flex items-center">
                                                <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-user"></i>
                                                <span className="ml-2">Leads</span>
                                            </div>
                                        </li>

                                        <li onClick={() => navigate("/admin/seller")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mb-4 py-2  hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                            <div className="flex items-center">
                                                <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-id-card"></i>
                                                <span className="ml-2">Seller</span>
                                            </div>
                                        </li>
                                        <li onClick={() => navigate("/admin/followup")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mb-4 py-2  hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                            <div className="flex items-center">
                                                <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-credit-card"></i>
                                                <span className="ml-2">Followup</span>
                                            </div>
                                        </li>
                                        <li onClick={() => navigate("/admin/allUser")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mb-4 py-2  hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                            <div className="flex items-center">
                                                <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-plus"></i>
                                                <span className="ml-2">All Users</span>
                                            </div>
                                        </li>
                                        <li onClick={() => navigate("/admin/other")} className="pl-6 cursor-pointer text-[#7963a7] text-md leading-3 tracking-normal mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                            <div className="flex items-center">

                                                <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-gear"></i>
                                                <span className="ml-2">Other</span>
                                            </div>
                                        </li>
                                    </>
                                )}

                        </ul>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="flex items-center justify-between px-8">
                                        <div className="h-16 w-full flex items-center">
                                            <img className="cursor-pointer" onClick={() => navigate("/")} src={Brand} alt="brand" width={144} height={30} />

                                        </div>
                                        <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul aria-orientation="vertical" className=" py-6">
                                        {props.userData && props.userData.role === "user" ? (
                                            <>
                                                <li onClick={() => navigate("/employee/dashboard")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal py-2 text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                                            </svg>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Dashboard</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/employee/enquiry")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-images"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Enquiry</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/employee/leads")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-images"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Leads</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/employee/seller")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-id-card"></i>

                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Seller</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/employee/followup")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal py-2 mb-4 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-credit-card"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Followup</span>
                                                    </div>
                                                </li>
                                            </>

                                        ) :
                                            (<>
                                                <li onClick={() => navigate("/admin/dashboard")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal py-2 text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                                            </svg>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Dashboard</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/admin/enquiry")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-user-doctor"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Enquiry</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/admin/leads")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-user"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Leads</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/admin/seller")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-images"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Seller</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/admin/followup")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-id-card"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Followup</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/admin/allUsers")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-credit-card"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">All users</span>
                                                    </div>
                                                </li>
                                                <li onClick={() => navigate("/admin/other")} className="pl-6 cursor-pointer text-[#7963a7] text-sm leading-3 tracking-normal mb-4 py-2 hover:text-[#452a72] focus:text-[#452a72] focus:outline-none">
                                                    <div className="flex items-center">
                                                        <div >
                                                            <i style={{ marginRight: "2px" }} width={20} height={20} className="fa-solid fa-add"></i>
                                                        </div>
                                                        <span className="ml-2 xl:text-base md:text-2xl text-base">Other</span>
                                                    </div>
                                                </li>

                                            </>)
                                        }

                                    </ul>
                                </div>
                                <div className="w-full">
                                    <div className="flex justify-center mb-4 w-full px-6">
                                        <div className="relative w-full">
                                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx={10} cy={10} r={7} />
                                                    <line x1={21} y1={21} x2={15} y2={15} />
                                                </svg>
                                            </div>
                                            <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-300">
                                        <div className="w-full flex items-center justify-between px-6 pt-1">
                                            <div className="flex items-center">
                                                <img alt="profile-pic" src={user} className="w-8 h-8 rounded-md" />
                                                <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">{props?.userData?.email}</p>
                                            </div>
                                            <ul className="flex">
                                                {/* <li className="cursor-pointer text-white pt-5 pb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                        <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                    </svg>
                                                </li> */}
                                                <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                            <div className="hidden lg:flex w-full pr-6">
                                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                    <div className="relative w-full">
                                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={10} cy={10} r={7} />
                                                <line x1={21} y1={21} x2={15} y2={15} />
                                            </svg>
                                        </div>
                                        <input className="border border-gray-100 focus:outline-none focus:border-[#452a72] rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="w-1/2 hidden lg:flex">
                                    <div className="w-full flex items-center pl-8 justify-end">
                                        <div className="h-full w-20 flex items-center justify-center border-r border-l  mr-4">
                                            <div className="relative cursor-pointer text-[#7963a7] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell " width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                </svg>
                                                <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                                            </div>
                                        </div>
                                        {/* <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-[#7963a7]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                            </svg>
                                        </div> */}
                                        <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                            <div className="rounded-full">
                                                {profile ? (
                                                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-12 ">
                                                       
                                                        <li className="flex w-full justify-between text-[#7963a7] hover:text-[#452a72] cursor-pointer items-center ">
                                                            <div className="flex items-center" onClick={handleLogOut}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                                </svg>
                                                                <span className="text-sm ml-2">Sign out</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ) : (
                                                    ""
                                                )}
                                                <div className="relative">
                                                    <img className="rounded-full h-10 w-10 object-cover" src={user} alt="avatar" />
                                                    {/* <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" /> */}
                                                </div>
                                            </div>
                                            <p className="text-gray-800 text-sm mx-3">{props.userData?.email}</p>
                                            <div className="cursor-pointer text-[#7963a7]">
                                                <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#7963a7] mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                {show ? (
                                    " "
                                ) : (
                                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </nav>
                        {/* Navigation ends */}

                        <div className="lg:container w-full mx-auto py-2 md:w-5/5 w-12/12 px-2" style={{ maxHeight: '85vh', overflowY: 'scroll', msOverflowStyle: 'none' }}>
                            <div className="lg:w-[84vw] 2xl:w-full w-full mx-auto h-full rounded" >
                                <props.Outlet />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
