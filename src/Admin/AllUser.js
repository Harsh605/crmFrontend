import React, { useEffect, useState } from 'react'
import AddUser from './Components/AddUser'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../Components/Alert'
import { deleteUser, editRoleOfUser, getAllUsers } from '../slices/userSlice'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import { IconButton, Tooltip, select } from '@material-tailwind/react';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import UpdateUser from './Components/UpdateUser'

const AllUser = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [editUserId,setEditUserId] = useState("")
    const dispatch = useDispatch()

    const { allUsers } = useSelector((state) => state.userCustom)

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    const handleDeleteUser = (id) => {
        dispatch(deleteUser({id})).then(()=>{
            dispatch(getAllUsers())
        })
    }
    const handleChangeRole = (id) => {
        dispatch(editRoleOfUser({id})).then(()=>{
            dispatch(getAllUsers())
        })
    }
    const handleOpenEditUser = (id) => {
        setEditUserId(id)
        setOpen2(true)
    }
    if(allUsers){
        console.log(allUsers)
    }
    
    return (
        <>

            <AddUser open={open} setOpen={setOpen} />
            <UpdateUser open={open2} setOpen={setOpen2} id={editUserId}/>
            <div className="w-full px-0 md:px-6 ">
                {/* <EditTypeDialog open={openLeadType} setOpen={setOpenLeadType} id={curId} /> */}
                <div className="w-full max-w-screen-xl mx-auto py-4">
                    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">

                        <div className="rounded  " >
                            <div className="flex px-2">
                                <div className="w-full max-w-md">
                                    <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                                        <div className="block text-[#452a72] text-lg font-semibold py-2 px-2">
                                            Users
                                        </div>

                                        <div className="py-3 text-sm h-[200px] overflow-y-scroll custom-scrollbar " >
                                            {allUsers && allUsers.length>0 && allUsers?.map((cur) => (
                                                <div key={cur._id} className="flex justify-start items-center  text-gray-700  rounded-md px-2 py-1">
                                                    <span className="bg-[#452a72] h-2 w-2 m-2 rounded-full"></span>
                                                    <div className="flex-grow font-medium px-2">{cur.email}</div>
                                                    <div className="text-sm font-normal text-gray-500 tracking-wide">
                                                        <Tooltip content="Change Role">
                                                            <IconButton
                                                                variant="text"
                                                                color="blue-gray"
                                                                onClick={() => handleChangeRole(cur._id)}
                                                            >
                                                                {
                                                                    cur.role === "admin" ?
                                                                    <SupervisorAccountIcon className="h-4 w-4" />
                                                                    : <PersonIcon className="h-4 w-4" />
                                                                }
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip content="Edit">
                                                            <IconButton
                                                                variant="text"
                                                                color="blue-gray"
                                                                onClick={() => handleOpenEditUser(cur._id)}
                                                            >
                                                                <PencilIcon className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip content="Delete">
                                                            <IconButton
                                                                variant="text"
                                                                color="blue-gray"
                                                                onClick={() => handleDeleteUser(cur._id)}
                                                            >
                                                                <TrashIcon className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            ))}


                                        </div>
                                        <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">

                                            <div className='flex justify-between gap-1'>
                                                
                                                <button onClick={() => setOpen(true)} type='submit' className="bg-[#452a72] border border-[#452a72] hover:bg-transparent text-white hover:text-blue-400 py-2 px-3 rounded">
                                                    Add
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>

    )
}

export default AllUser