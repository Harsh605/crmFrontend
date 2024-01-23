import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { createSeller, getAllAvailableProduct, getAllLeads, getAllSeller, getAllSellerType, getAllSkillType } from '../../slices/leadSlice';
import { useNavigate } from "react-router";
import { Checkbox, FormControl, InputLabel, ListItemText, Select } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function AddSeller({ open, setOpen }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [sellerType, setSellerType] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const [skills, setSkills] = useState([{ skillName: "", experience: "" }]);
    const [madeProducts, setMadeProducts] = useState([{ productName: "", price: "", productLink: "" }]);

    const [flag, setFlag] = useState(false)

    const { leads, sellerTypeData, skillTypeData, availableProductData } = useSelector((state) => state.leadCustom)

    useEffect(() => {
        dispatch(getAllLeads())
        dispatch(getAllSellerType())
        dispatch(getAllSkillType())
        dispatch(getAllAvailableProduct())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createSeller({ name, email, phoneNo, city, state, country, sellerType, skills, madeProducts })).then(() => {
            dispatch(getAllSeller())
        })
        // Dispatch your createLead action here
    };

    const handleAddMore = () => {
        setSkills([...skills, { skillName: "", experience: "" }]);
    };
    const handleAddMore2 = () => {
        setMadeProducts([...madeProducts, { productName: "", price: "" }]);
    };

    const handleChangeSkillExperience = (index, field, value) => {
        const updatedFields = [...skills];
        updatedFields[index][field] = value;
        setSkills(updatedFields);
    };

    const handleChangeCreatedProduct = (index, field, value) => {
        const updatedFields = [...madeProducts];
        updatedFields[index][field] = value;
        setMadeProducts(updatedFields);
    };
    const handleChangeProductLink = (index, value) => {
        const updatedFields = [...madeProducts];
        updatedFields[index].productLink = value;
        setMadeProducts(updatedFields);
    };

    const handleRemoveSkill = (index) => {
        if (skills.length === 1) {
            // If only one skill remains, clear the fields instead of removing the structure
            setSkills([{ skillName: "", experience: "" }]);
        } else {
            const updatedSkills = skills.filter((_, i) => i !== index);
            setSkills(updatedSkills);
        }
    };

    const handleRemoveProduct = (index) => {
        if (madeProducts.length === 1) {
            // If only one product remains, clear the fields instead of removing the structure
            setMadeProducts([{ productName: "", price: "" }]);
        } else {
            const updatedProducts = madeProducts.filter((_, i) => i !== index);
            setMadeProducts(updatedProducts);
        }
    };


    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <div className="px-0 py-0 w-full ">
                    <div className="flex flex-no-wrap items-start">
                        <div className="w-full ">
                            <div className="py-4 px-2">
                                <div className="bg-white rounded shadow py-7">
                                    <div className="mt-2 px-7">
                                        <h1 className="text-center mb-5 text-3xl text-[#452a72]">Add Seller</h1>

                                        <form onSubmit={handleSubmit}>
                                            <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-2 ">
                                                <div>
                                                    <input
                                                        className="w-full p-2 px-3 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        value={name}
                                                        required
                                                        placeholder="Name"
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type="email"
                                                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        value={email}
                                                        placeholder="Email"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type="tel"
                                                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        value={phoneNo}
                                                        placeholder="Phone No"
                                                        onChange={(e) => setPhoneNo(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        value={city}
                                                        placeholder="City"
                                                        onChange={(e) => setCity(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        value={state}
                                                        placeholder="State"
                                                        onChange={(e) => setState(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        value={country}
                                                        required
                                                        placeholder="Country"
                                                        onChange={(e) => setCountry(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <select
                                                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        value={sellerType}
                                                        required
                                                        onChange={(e) => setSellerType(e.target.value)}
                                                    >
                                                        <option value="">Seller type</option>
                                                        {sellerTypeData &&
                                                            sellerTypeData[0]?.sellerTypes?.map((cur) => (
                                                                <option key={cur._id} value={cur.sellerType}>
                                                                    {cur.sellerType}
                                                                </option>
                                                            ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2">
                                                {skills.map((item, index) => (
                                                    <div key={index} className="flex gap-2">
                                                        <select
                                                            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                            value={item.skillName}
                                                            required
                                                            onChange={(e) => handleChangeSkillExperience(index, "skillName", e.target.value)}
                                                        >
                                                            <option value="">Skill</option>
                                                            {skillTypeData && skillTypeData[0]?.skillTypes?.map((cur) => (
                                                                <option key={cur._id} value={cur.skillType}>{cur.skillType}</option>
                                                            ))}
                                                            <option value="">other</option>
                                                        </select>
                                                        <input
                                                            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                            value={item.experience}
                                                            placeholder="Experience"
                                                            required
                                                            onChange={(e) => handleChangeSkillExperience(index, "experience", e.target.value)}
                                                        />
                                                        <button
                                                            className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-1 py-1  text-[#452a72] hover:text-white border mt-1"
                                                            onClick={handleAddMore}
                                                        >
                                                            <AddIcon sx={{ color: "#452A72" }} />
                                                        </button>
                                                        <button
                                                            className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-1 py-1  text-[#452a72] hover:text-white border mt-1"

                                                            onClick={() => handleRemoveSkill(index)}
                                                        >
                                                            <RemoveIcon sx={{ color: "#452A72" }} />
                                                        </button>

                                                    </div>
                                                ))}

                                            </div>

                                            <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">
                                                {madeProducts.map((item, index) => (

                                                    <div key={index} className="flex gap-2">
                                                        <select
                                                            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                            value={item.productName}
                                                            required
                                                            onChange={(e) => handleChangeCreatedProduct(index, "productName", e.target.value)}
                                                        >
                                                            <option value="">Available Product</option>
                                                            {availableProductData && availableProductData[0]?.productTypes?.map((cur) => (
                                                                <option key={cur._id} value={cur.productType}>{cur.productType}</option>
                                                            ))}
                                                            <option value="other">other</option>
                                                            <option value="other2">other2</option>
                                                            <option value="other3">other3</option>
                                                        </select>
                                                        <input
                                                            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                            value={item.price}
                                                            placeholder="Price"
                                                            required
                                                            onChange={(e) => handleChangeCreatedProduct(index, "price", e.target.value)}
                                                        />
                                                        <input
                                                            className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                            value={item.productLink}
                                                            placeholder="Product Link"
                                                            onChange={(e) => handleChangeProductLink(index, e.target.value)}
                                                        />
                                                        <button
                                                            className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-1 py-1  text-[#452a72] hover:text-white border mt-1"

                                                            onClick={handleAddMore2}
                                                        >
                                                            <AddIcon sx={{ color: "#452A72" }} />
                                                        </button>
                                                        <button
                                                            className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-1 py-1  text-[#452a72] hover:text-white border mt-1"

                                                            onClick={() => handleRemoveProduct(index)}
                                                        >
                                                            <RemoveIcon sx={{ color: "#452A72" }} />
                                                        </button>

                                                    </div>
                                                ))}

                                            </div>
                                            <hr className="h-[1px] bg-gray-100 my-14" />
                                            <div className="flex flex-col items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                                                {/* <button
                                                    className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-2 py-2 text-[#452a72] hover:text-white border lg:max-w-[95px]  w-full "
                                                >
                                                    Back
                                                </button> */}
                                                <button
                                                    type="submit"
                                                    className="bg-[#452a72] rounded hover:bg-transparent border border-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-2 py-2 text-white hover:text-[#452a72] lg:max-w-[144px] w-full "
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
