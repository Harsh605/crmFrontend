import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { getAllSellerType, updateSellerType } from '../../../slices/leadSlice';

export default function SellerTypeDialog({ open, setOpen,id }) {
    const [sellerName,setSellerName] = useState("")
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSellerType({id,sellerName})).then(() => {
          setOpen(false)
        }).then(()=>dispatch(getAllSellerType()))
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
                            <div className=" px-2">
                                <div className="bg-white rounded shadow py-7">
                                    <div className="mt-1 px-2">

                                        <form onSubmit={handleSubmit}>
                                            <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">
                                                <div>
                                                    <input
                                                        className="w-full p-2 px-3 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                        value={sellerName}
                                                        placeholder="Lead Type"
                                                        onChange={(e) => setSellerName(e.target.value)}
                                                    />
                                                </div>


                                            </div>


                                            <div className="flex flex-col mt-4 items-center justify-center w-full px-3 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                                                <button
                                                    className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-2 py-2 text-[#452a72] hover:text-white border lg:max-w-[95px]  w-full "
                                                    onClick={()=>setOpen(false)}
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="bg-[#452a72] rounded hover:bg-transparent border border-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-2 py-2 text-white hover:text-[#452a72] lg:max-w-[144px] w-full "
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >

            </Dialog >
        </div >
    );
}
