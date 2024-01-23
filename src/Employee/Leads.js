import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import AddNewLead from './Components/AddNewLead';
import user from "../Images/user.png"
import { deleteLead, getAllLeads } from '../slices/leadSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import { IconButton, Tooltip } from '@material-tailwind/react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Leads = ({ userData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');

  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { leads } = useSelector((state) => state.leadCustom)

  const itemsPerPage = 20;










  // Filter leads based on search query and date range
  const filteredLeads = leads?.filter((lead) =>
    lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.phoneNo?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.leadType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.product?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.country?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.quotation?.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.source?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.followups[lead.followups?.length - 1]?.assignedToName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.followups[lead.followups?.length - 1]?.product2?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.followups[lead.followups?.length - 1]?.date?.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter((lead) => {
    if (fromDate && toDate) {
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);
      const leadDate = new Date(lead.createdAt.split('/').reverse().join('-'));
      return leadDate >= fromDateObj && leadDate <= toDateObj;
    } else {
      return true;
    }
  });

  // Sort leads based on created at in ascending or descending order
  const sortedLeads = filteredLeads.sort((a, b) => {
    const dateA = new Date(
      a.createdAt.split('/').reverse().join('-')
    );
    const dateB = new Date(
      b.createdAt.split('/').reverse().join('-')
    );

    if (sortOrder === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  // Paginate the sorted leads based on the current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedLeads = sortedLeads.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate total pages
  const totalPages = Math.ceil(sortedLeads.length / itemsPerPage);

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

  const handleDeleteLead = (id) => {
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

    dispatch(getAllLeads())
  }, [dispatch])

  const startPage = Math.max(1, currentPage - 2);
const endPage = Math.min(totalPages, startPage + 4);


  return (
    <div className="w-full px-0 md:px-6 py-2">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Leads</p>
          <div>
            <div className="flex items-start mt-4 sm:mt-0 sm:ml-4">
              <div className="border flex  text-white shadow rounded bg-[#452a72]">
                <button className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none" onClick={handleAddNewLead}><AddBoxIcon /></button>
                <button className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100"><FileUploadIcon /> </button>
                <button className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100"><DownloadIcon /></button>
                <AddNewLead open={open} setOpen={setOpen} userData={userData} />
              </div>
            </div>
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
                <th className="font-normal text-left pl-4">User</th>
                <th className="font-normal text-left pl-12">Leads</th>
                <th className="font-normal text-left pl-12">Source</th>
                <th className="font-normal text-left pl-12">FollowUp</th>
                <th className="font-normal text-left pl-12">Products</th>
                <th className="font-normal text-left pl-12">Sell product</th>
                <th className="font-normal text-left pl-12">Sell Date</th>
                <th className="font-normal text-left pl-12">1st Description</th>
                <th className="font-normal text-left pl-12">Address</th>
                <th className="font-normal text-left pl-12">Lead Creator</th>
                <th className="font-normal text-left pl-16">Created At</th>
                {/* <th className="font-normal text-left pl-16">Action</th> */}
              </tr>
            </thead>
            <tbody className="w-full">
              {leads.length > 0 && paginatedLeads.map((lead, id) => (

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
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {lead.phoneNo}
                        </p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {lead.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-12">
                    {(lead.leadType) ? <p className="text-sm  leading-3 text-gray-600 ">
                      {lead.leadType}
                    </p> : "---"}

                  </td>
                  <td className="pl-12">
                    {(lead.source) ? <p className="text-sm  leading-3 text-gray-600 ">
                      {lead.source}
                    </p> : "---"}

                  </td>
                  <td className="pl-12">
                    <p className="text-sm  leading-3 text-gray-600 ">
                      {
                        lead.followups[lead.followups.length - 1].followupStatus ? <p className="text-xs leading-3 text-gray-600 pt-2">
                          {lead.followups[lead.followups.length - 1].followupStatus}
                        </p> : "---"
                      }
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        {lead.followups[lead.followups.length - 1].assignedFromName}-
                        {lead.followups[lead.followups.length - 1].assignedToName ? lead.followups[lead.followups.length - 1].assignedToName : lead.followups[lead.followups.length - 1].assignedFromName}
                      </p>

                      {lead.followups[lead.followups.length - 1].followupStatus === "Call Back" ? (
                        lead.followups[lead.followups.length - 1].date || lead.followups[lead.followups.length - 1].time ? (
                          <p className="text-xs leading-3 text-gray-600 pt-2 ">
                            {lead.followups[lead.followups.length - 1].date?.slice(0, 10)} {lead.followups[lead.followups.length - 1].time}
                          </p>)
                          : "---")
                        : "---"
                      }


                    </p>
                  </td>



                  <td className="pl-12">
                    {(lead.product || lead.quotation || lead.enquiryMessage) ? (<>
                      <p className="text-xs leading-3 text-gray-600 pt-2"> {lead.product}</p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Quot: {lead.quotation}
                      </p>

                    </>) : "---"}


                  </td>



                  <td className="pl-12">
                    {lead.followups[lead.followups.length - 1] && lead.followups[lead.followups.length - 1].followupStatus === "Converted" ? (
                      lead.followups[lead.followups.length - 1].product2 || lead.followups[lead.followups.length - 1].amountPaid ? (
                        <>
                          <p className="text-xs leading-3 text-gray-600 pt-2">{lead.followups[lead.followups.length - 1].product2}</p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            Given price:{lead.followups[lead.followups.length - 1].amountPaid && lead.followups[lead.followups.length - 1].amountPaid}
                          </p>

                        </>
                      ) : (
                        "---"
                      )
                    ) : (
                      "---"
                    )}
                  </td>

                  <td className="pl-12">
                    {lead.followups[lead.followups.length - 1] && lead.followups[lead.followups.length - 1].followupStatus === "Converted" ? (
                      lead.followups[lead.followups.length - 1].date || lead.followups[lead.followups.length - 1].time ? (
                        <>
                          <p className="text-xs leading-3 text-gray-600 pt-2">{lead.followups[lead.followups.length - 1].date.slice(0, 10)}</p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            {lead.followups[lead.followups.length - 1].time}
                          </p>
                        </>
                      ) : (
                        "---"
                      )
                    ) : (
                      "---"
                    )}
                  </td>

                  <td className="pl-12">
                    {(lead.enquiryMessage) ? <p className="text-sm  leading-3 text-gray-600 ">
                      {lead.enquiryMessage}
                    </p> : "---"}
                  </td>
                  <td className="pl-12">
                    {(lead.city || lead.state || lead.country) ? <p className="text-sm  leading-3 text-gray-600 ">
                      {lead.city}, {lead.state},{lead.country}
                    </p> : "---"}
                  </td>
                  <td className="pl-12">
                    <p className="text-sm  leading-3 text-gray-600 ">
                      {lead.creator}
                    </p>
                  </td>
                  <td className="pl-16">
                    <p className="text-sm  leading-3 text-gray-600 ">
                      {lead.createdAt.slice(0, 10)}
                    </p>
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

export default Leads;
