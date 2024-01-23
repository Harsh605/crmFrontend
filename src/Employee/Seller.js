import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import AddNewLead from './Components/AddNewLead';
import user from "../Images/user.png"
import { deleteLead, getAllLeads, getAllSeller, getMySeller } from '../slices/leadSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import { IconButton, Tooltip, select } from '@material-tailwind/react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddSeller from './Components/AddSeller';

const Seller = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');

  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { leads,individualSellerData } = useSelector((state) => state.leadCustom)

  const itemsPerPage = 20;









  // Filter leads based on search query and date range
  const filteredSellers = individualSellerData && individualSellerData.filter((seller) =>
  seller.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  seller.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  seller.sellerType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  seller.skills && seller.skills.map((skill) => skill.skillName.toLowerCase()).includes(searchQuery.toLowerCase()) ||
  seller.madeProducts?.map((item) => item.productName.toLowerCase()).includes(searchQuery.toLowerCase()) 
).filter((seller) => {
  if (fromDate && toDate) {
    const fromDateObj = new Date(fromDate);
    const toDateObj = new Date(toDate);
    const sellerDate = new Date(seller.createdAt.split('/').reverse().join('-'));
    return sellerDate >= fromDateObj && sellerDate <= toDateObj;
  } else {
    return true;
  }
});

  // Sort leads based on created at in ascending or descending order
  const sortedSellers = filteredSellers?.sort((a, b) => {
    const dateA = new Date(a.createdAt.split('/').reverse().join('-'));
    const dateB = new Date(b.createdAt.split('/').reverse().join('-'));
  
    if (sortOrder === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  // Paginate the sorted leads based on the current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedSellers = sortedSellers?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate total pages
  const totalPages = Math.ceil(sortedSellers?.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle sort order change
  const handleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleAddNewLead = () => {
    setOpen(true)
  }

  const handleDeleteSeller = (id) => {
    dispatch(deleteLead(id))
      .then(() => {
        // Refresh leads after deletion
        dispatch(getAllLeads());
      })
      .catch((error) => {
        // Handle error, if any
        console.log(error);
      });
  }

  useEffect(() => {

    dispatch(getMySeller())
  }, [dispatch])

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);



  return (
    <div className="w-full px-0 md:px-6 py-2">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Seller</p>
          <div>

            <button onClick={()=>setOpen(true)} style={{border:"1px solid #452a72"}} className="inline-flex text-white sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-[#452a72] hover:bg-transparent border border-[#452a72] hover:text-[#452a72] focus:outline-none rounded">
              <p className="text-sm font-medium leading-none">Add Seller</p>
            </button>
            <AddSeller open={open} setOpen={setOpen} />

          </div>
        </div>
      </div>
      <div className="w-full px-0 md:px-6 pb-2">
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <div style={{ rowGap: '20px' }} className="flex justify-center md:justify-between items-center flex-wrap mb-4">
            <div className="flex">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                placeholder="From Date"
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md text-[#bdbdbd] focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
              />
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="To Date"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-[#bdbdbd] focus:ring-[#452a72] focus:border-[#452a72]"
              />
            </div>
            <div className=" flex justify-end">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Leads..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
              />

              <button
                className="ml-2 px-4 py-2 text-sm font-medium bg-[#452a72] text-white rounded-md focus:outline-none"
                onClick={handleSortOrder}
              >
                {sortOrder === 'asc' ? 'Latest' : 'Oldest'}
              </button>
            </div>
          </div>

          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Seller</th>
                <th className="font-normal text-left pl-12">Address</th>
                <th className="font-normal text-left pl-12">Seller Type</th>
                <th className="font-normal text-left pl-12">Skills</th>
                <th className="font-normal text-left pl-12">Available Product</th>
                <th className="font-normal text-left pl-16">Created At</th>
                {/* <th className="font-normal text-left pl-16">Action</th> */}
              </tr>
            </thead>
            <tbody className="w-full">
              {paginatedSellers?.map((seller, id) => (
                <tr
                  key={id}
                  className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div
                        className="w-10 h-10"
                      >
                        <LazyLoadImage
                          effect="blur"
                          width="100%"
                          height="100%"
                          className="w-full h-full"
                          src={user}
                        />
                      </div>
                      <div className="pl-4">
                        <p className="font-medium">{seller.name}</p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {seller.phoneNo}
                        </p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {seller.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-12">
                    {(seller.city || seller.state || seller.country) ? <p className="text-sm  leading-3 text-gray-600 ">
                      {seller.city}, {seller.state},{seller.country}
                    </p> : "null"}
                  </td>
                  <td className="pl-12">
                    {(seller.sellerType ) ? <p className="text-sm  leading-3 text-gray-600 ">
                      {seller.sellerType}
                    </p> : "null"}

                  </td>
                  <td className="pl-12 capitalize">
                  
                    <select className='capitalize p-1 px-2 border border-gray outline-none'>
                      {seller?.skills && seller.skills.map((item,id)=>(
                        <option key={id} className='capitalize'>{item.skillName}, {item.experience}Y </option>
                      ))}
                    
                    </select>

                  </td>
                  <td className="pl-12 capitalize">
                  
                    <select  className='capitalize p-1 px-2 border border-gray outline-none'>
                      {seller?.madeProducts && seller.madeProducts.map((item,id)=>(
                        <option key={id} className='capitalize'>{item.productName}, {item.price}₹ </option>
                      ))}
                    
                    </select>

                  </td>
                  
                  
                 


                  <td className="pl-16">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {seller.createdAt.slice(0, 10)}
                    </p>
                  </td>

                  <td className="px-7 2xl:px-0">

                    {/* <Tooltip content="Delete Seller">
                      <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={() => handleDeleteSeller(seller._id)}
                      >
                        <TrashIcon className="h-5 w-5" />
                      </IconButton>
                    </Tooltip> */}

                  </td>

                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-5">
            <div className="flex">
              {/* <p className="text-[#452a72]">Total Pages -</p> */}
              {currentPage > 1 && (
                <button
                  className="px-3 py-1 text-sm font-medium mx-1 rounded-md focus:outline-none text-[#452a72]"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
              )}
              {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <button
                  key={startPage + index}
                  className={`px-3 py-1 text-sm font-medium mx-1 rounded-md focus:outline-none ${currentPage === startPage + index
                    ? 'bg-[#452a72] text-white'
                    : 'text-[#452a72]'
                    }`}
                  onClick={() => handlePageChange(startPage + index)}
                >
                  {startPage + index}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  className="px-3 py-1 text-sm font-medium mx-1 rounded-md focus:outline-none text-[#452a72]"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seller;
