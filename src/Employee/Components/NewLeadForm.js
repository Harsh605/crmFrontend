import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllUsers } from "../../slices/userSlice";
import { createLead, getAllLeads, getAllLeadsByAdmin, getAllLeadsSource, getAllLeadsTypes, getAllProductType, getAllSellerType, getAllSkillType } from "../../slices/leadSlice"
import Alert from "../../Components/Alert";

function NewLeadForm({ open, setOpen, userData }) {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [source, setSource] = useState("");
  const [leadType, setLeadType] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [product2, setProduct2] = useState("");
  const [quotation, setQuotation] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");
  const [followupStatus, setFollowupStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [assignedToName, setAssignedToName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [important, setImportant] = useState(false);

  const [flag, setFlag] = useState(false)
  const [message, setMessage] = useState("")
  const [errorType, setErrorType] = useState("")

  const { allUsers } = useSelector((state) => state.userCustom)
  const { leadData, error, isCreated, leadTypeData, leadSourceData, productTypeData, skillTypeData } = useSelector((state) => state.leadCustom)


  const followups =
    [{
      followupStatus,
      assignedTo,
      assignedToName,
      remarks,
      date,
      time,
      product2,
      amountPaid,
      important
    }

    ]


  const handleBack = () => {
    navigate("/employee/profile");
  };



  let handleSubmit;
  if (userData.role === "admin") {
    handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createLead({ name, email, phoneNo, city, state, country, leadType, source, product, quotation, enquiryMessage, followups })).then(() => {
        setFlag(true)
      })
        .then(() => dispatch(getAllLeadsByAdmin()))
    };
  }
  else if (userData.role === "user") {
    handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createLead({ name, email, phoneNo, city, state, country, leadType, source, product, quotation, enquiryMessage, followups })).then(() => {
        setFlag(true)
      }).then(() => {
        dispatch(getAllLeads())
      })
    };
  }
  else {

  }





  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };




  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllSkillType())
    dispatch(getAllProductType())
    dispatch(getAllLeadsSource())
    dispatch(getAllLeadsTypes())
  }, [dispatch]);





  useEffect(() => {
    if (!isCreated && error) {
      setMessage(error);
      setErrorType('error');
    } else if (isCreated) {
      setMessage(leadData?.message);
      setErrorType('success');
    }
  }, [isCreated, error, leadData]);



  console.log(userData)


  return (
    <div>
      {
        flag && <Alert flag={flag} setFlag={setFlag} errorType={errorType} message={message} />
      }
      <div className="px-0 py-0 w-full ">

        <div className="flex flex-no-wrap items-start">
          <div className="w-full ">
            <div className="py-4 px-2">
              <div className="bg-white rounded shadow py-7">
                <div className="mt-2 px-7">
                  <h1 className="text-center mb-5 text-3xl text-[#452a72]">Add New Lead</h1>

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
                          placeholder="Country"
                          onChange={(e) => setCountry(e.target.value)}
                        />

                      </div>
                      <div>
                        <select
                          className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={leadType}
                          required
                          onChange={(e) => setLeadType(e.target.value)}
                        >

                          <option value="">Lead type</option>
                          {leadTypeData && leadTypeData[0]?.leadTypes?.map((cur) => (
                            <option key={cur._id} value={cur.leadType}>{cur.leadType}</option>
                          ))}

                        </select>
                      </div>
                      <div>

                        <select
                          className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={source}
                          required
                          onChange={handleSourceChange}
                        >
                          <option value="">Select source</option>
                          {leadSourceData && leadSourceData[0]?.leadSources?.map((cur) => (
                            <option key={cur._id} value={cur.leadSource}>{cur.leadSource}</option>
                          ))}
                        </select>

                      </div>
                      <div>
                        <select
                          className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={product}
                          required
                          onChange={(e) => setProduct(e.target.value)}
                        >
                          <option value="">Select product</option>
                          {productTypeData && productTypeData[0]?.productTypes?.map((cur) => (
                            <option key={cur._id} value={cur.productType}>{cur.productType}</option>
                          ))}
                          <option value="">other</option>
                        </select>


                      </div>
                      <div>

                        <input
                          className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={quotation}
                          required
                          placeholder="Quotation"
                          onChange={(e) => setQuotation(e.target.value)}
                        />

                      </div>

                    </div>
                    <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">
                      <div className="mt-1 border border-gray-300 rounded">
                        <textarea
                          className="resize-none w-full h-[100px] px-2 py-2 text-base outline-none text-slate-600"
                          placeholder="Enq_Message"
                          required
                          value={enquiryMessage}
                          onChange={(e) => setEnquiryMessage(e.target.value)}
                        />
                      </div>

                    </div>

                    <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2">
                      <div>
                        <select
                          className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          value={followupStatus}
                          required
                          onChange={(e) => setFollowupStatus(e.target.value)}
                        >
                          <option value="">Select Followup Status</option>
                          <option value="Call Back">Call Back</option>
                          <option value="Not Interested">Not-Interested</option>
                          <option value="Dead Lead">Dead lead</option>
                          <option value="Wrong Number">Wrong Number</option>
                          <option value="Converted">Converted</option>
                          <option disabled value="New">New</option>
                        </select>

                      </div>


                      {
                        (followupStatus === "Dead Lead" || followupStatus === "Wrong Number" || followupStatus === "Not Interested" || followupStatus === "New") && (
                          <div className="mt-1 border border-gray-300 rounded">
                            <textarea
                              className="resize-none w-full h-[70px] px-2 py-2 text-base outline-none text-slate-600"
                              placeholder="Remarks"
                              required
                              value={remarks}
                              onChange={(e) => setRemarks(e.target.value)}
                            />
                          </div>


                        )
                      }


                    </div>

                    {
                      followupStatus === "Call Back" && (
                        <>
                          <div className="grid w-full grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-2">
                            <div>

                              <input
                                type="date"
                                className="w-full p-2 mt-1 border border-gray-300 text-[#bdbdcc] rounded outline-none focus:bg-gray-50"
                                value={date}
                                required
                                onChange={(e) => setDate(e.target.value)}
                              />

                            </div>

                            <div>
                              <input
                                type="time"
                                className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                value={time}
                                required
                                onChange={(e) => setTime(e.target.value)}
                              />

                            </div>
                            <div>
                              <select
                                className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                value={product2}
                                required
                                onChange={(e) => setProduct2(e.target.value)}
                              >
                                <option value="">Select product</option>
                                {productTypeData && productTypeData[0]?.productTypes?.map((cur) => (
                                  <option key={cur._id} value={cur.productType}>{cur.productType}</option>
                                ))}
                              </select>



                            </div>
                            <div>

                              <select
                                className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                value={assignedToName}
                                required
                                onChange={(e) => {
                                  const selectedUser = allUsers.find(user => user.email === e.target.value);
                                  setAssignedToName(e.target.value);
                                  setAssignedTo(selectedUser ? selectedUser._id : "");
                                }}
                              >
                                <option value={userData.email}>Me</option>
                                {allUsers &&
                                  allUsers.length > 0 &&
                                  allUsers.map((curUser, id) => (
                                    (userData?.email !== curUser.email) && <option key={id} value={curUser.email}>
                                      {curUser.email}
                                    </option>

                                  ))}
                              </select>


                            </div>
                          </div>
                          <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">


                            <div className="mt-1 border border-gray-300 rounded">
                              <textarea
                                className="resize-none w-full h-[70px] px-2 py-2 text-base outline-none text-slate-600"
                                placeholder="Remarks"
                                required
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                              />
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="mr-2">Important</div>
                              <input type="checkbox" style={{ width: "15px", height: "15px" }} onClick={() => setImportant(true)} />
                            </div>

                          </div>
                        </>


                      )
                    }



                    {
                      followupStatus === "Converted" && (
                        <>
                          <div className="grid w-full grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2 mt-2">
                            <div>
                              <select
                                className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                value={product2}
                                required
                                onChange={(e) => setProduct2(e.target.value)}
                              >
                                <option value="">Select product</option>
                                {productTypeData && productTypeData[0]?.productTypes?.map((cur) => (
                                  <option key={cur._id} value={cur.productType}>{cur.productType}</option>
                                ))}
                              </select>

                            </div>
                            <div>
                              <input
                                className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                value={amountPaid}
                                required
                                placeholder="Amount_Paid"
                                onChange={(e) => setAmountPaid(e.target.value)}
                              />

                            </div>
                            <div>

                              <input
                                type="date"
                                className="w-full p-2 mt-1 border border-gray-300 text-[#bdbdcc] rounded outline-none focus:bg-gray-50"
                                value={date}
                                required
                                onChange={(e) => setDate(e.target.value)}
                              />


                            </div>
                            <div>
                              <input
                                type="time"
                                required
                                className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                              />

                            </div>


                          </div>
                          <div className="grid w-full grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-2 mt-2 ">


                            <div className="mt-1 border border-gray-300 rounded">
                              <textarea
                                className="resize-none w-full h-[70px] px-2 py-2 text-base outline-none text-slate-600"
                                required
                                placeholder="Remarks"
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                              />
                            </div>

                          </div>
                        </>


                      )
                    }






                    <hr className="h-[1px] bg-gray-100 my-14" />
                    <div className="flex flex-col items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                      <button
                        onClick={() => setOpen(false)}
                        className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-2 py-2 text-[#452a72] hover:text-white border lg:max-w-[95px]  w-full "
                      >
                        Back
                      </button>
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
        </div >
      </div >
    </div>
  );
}

export default NewLeadForm;
