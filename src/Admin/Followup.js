import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { getAllLeads, getAllLeadsByAdmin } from "../slices/leadSlice";
import { useDispatch, useSelector } from "react-redux";
import user from "../Images/user.png";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
  CardFooter,
} from "@material-tailwind/react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DownloadIcon from "@mui/icons-material/Download";
import AddFollowup from "../Employee/Components/AddFollowup"

// Check if a given date is today
function isToday(date) {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

// Check if a given date is in the future
function isFutureDate(date) {
  const today = new Date();
  return date > today;
}

// Check if a given date is in the past
function isPastDate(date) {
  const today = new Date();
  return date < today;
}

const TABS = [
  {
    label: "DueToday",
    value: "DueToday",
  },
  {
    label: "Scheduled",
    value: "Scheduled",
  },
  {
    label: "Overdue",
    value: "Overdue",
  },
  {
    label: "NotInterested",
    value: "NotInterested",
  },
  {
    label: "Converted",
    value: "Converted",
  },
  {
    label: "DeadLead",
    value: "DeadLead",
  },
  {
    label: "WrongNumber",
    value: "WrongNumber",
  },
  {
    label: "MyFollowup",
    value: "MyFollowup",
  },
  {
    label: "Important",
    value: "Important",
  },
];

const TABLE_HEAD = ["Member", "Followup","LeadType", "Remark", "Assigned By","Assigned To", ""];

export default function AdminFollowup({ userData }) {
  const [openAddFollowup, setOpenAddFollowup] = useState(false);
  const [activeTab, setActiveTab] = useState("DueToday");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [id,setId] = useState("")
  const leadsPerPage = 20;

  const dispatch = useDispatch();
  const { adminLeads } = useSelector((state) => state.leadCustom);

  useEffect(() => {
    // Simulating API call to fetch leads
    // Replace with your actual API call to fetch leads
    dispatch(getAllLeadsByAdmin());
  }, []);

  const handleAddFollowup =(id)=>{
    setId(id)
    setOpenAddFollowup(true)

  }

 

 

  
  const filteredLeads = adminLeads?.filter((lead) => {
    const lastFollowup = lead.followups[lead.followups.length - 1];

    switch (activeTab) {
      case "DueToday":
        return (
          lastFollowup?.followupStatus === "Call Back" &&
          isToday(new Date(lastFollowup?.date))
        );

      case "Scheduled":
        return (
          lastFollowup?.followupStatus === "Call Back" &&
          isFutureDate(new Date(lastFollowup?.date))
        );

      case "Overdue":
        return (
          lastFollowup?.followupStatus === "Call Back" &&
          isPastDate(new Date(lastFollowup?.date))
        );

      case "NotInterested":
        return lastFollowup?.followupStatus === "Not Interested";

      case "Converted":
        return lastFollowup?.followupStatus === "Converted";

      case "DeadLead":
        return lastFollowup?.followupStatus === "Dead Lead";

      case "WrongNumber":
        return lastFollowup?.followupStatus === "Wrong Number";

      case "MyFollowup":
        return lastFollowup?.assignedToName === userData?.email;
        case "Important":
          return lastFollowup?.important === true;
      default:
        return true;
    }
  }).filter((lead) => {
    // Apply search query filter
    const searchLower = searchQuery.toLowerCase();
    const nameLower = lead.name.toLowerCase();
    const emailLower = lead.email.toLowerCase();
    const phoneLower = lead.phoneNo.toLowerCase();
    const leadTypeLower = lead.leadType.toLowerCase();

    return (
      nameLower.includes(searchLower) ||
      emailLower.includes(searchLower) ||
      phoneLower.includes(searchLower) ||
      leadTypeLower.includes(searchLower) 
    );
  });

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads?.slice(indexOfFirstLead, indexOfLastLead);

  return (
    <Card className="h-full w-full">
      <AddFollowup
        open={openAddFollowup}
        setOpen={setOpenAddFollowup}
        userData={userData}
        id={id}
      />
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div className="text-[#452a72]">
            <Typography variant="h5" sx={{ pb: "0" }}>
              Followups
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <div className="border flex text-white shadow rounded bg-[#452a72]">
              <button className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none">
                <AddBoxIcon />
              </button>
              <button className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">
                <FileUploadIcon />{" "}
              </button>
              <button className="py-2 px-2 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">
                <DownloadIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">

            <select
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {TABS.map((tab) => (
                <option key={tab.value} value={tab.value}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentLeads?.map((lead, index) => {
              const isLast = index === currentLeads.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={user} size="sm" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal capitalize"
                        >
                          {lead.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {lead.email}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {lead.phoneNo}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {lead.followups[lead.followups.length - 1].followupStatus}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {lead.followups[lead.followups.length - 1]?.followupStatus ===
                          "Call Back" &&
                          `Due: ${lead.followups[lead.followups.length - 1]?.date?.slice(
                            0,
                            10
                          )} ${lead.followups[lead.followups.length - 1]?.time}`}
                        {lead.followups[lead.followups.length - 1]?.followupStatus ===
                          "Converted" &&
                          `Product: ${lead.followups[lead.followups.length - 1]?.product2
                          } (${lead.followups[lead.followups.length - 1]?.amountPaid})`}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {lead.followups[lead.followups.length - 1]?.followupStatus ===
                          "Converted" &&
                          `DoneAt: ${lead.followups[lead.followups.length - 1]?.date.slice(
                            0,
                            10
                          )} ${lead.followups[lead.followups.length - 1]?.time}`}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        Created: {lead.followups[lead.followups.length - 1]?.createdAt.slice(0, 10)}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                          {lead.leadType}
                        
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                     {lead.followups[lead.followups.length - 1]?.remarks}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      
                      {lead.followups[lead.followups.length - 1]?.assignedFromName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      
                      {lead.followups[lead.followups.length - 1]?.assignedToName}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit Followup">
                      <IconButton
                        variant="text"
                        color="blue-gray"
                        
                        onClick={()=>handleAddFollowup(lead._id)}
                      >
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          Page {currentPage} of {Math.ceil(filteredLeads?.length / leadsPerPage)} ({filteredLeads?.length} Leads)
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            color="blue-gray"
            size="sm"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="blue-gray"
            size="sm"
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(filteredLeads?.length / leadsPerPage)
            }
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
