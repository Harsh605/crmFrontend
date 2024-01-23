import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAvailableProduct, createLeadSource, createLeadType, createProductType, createSellerType, createSkillType, deleteAvailableProduct, deleteLeadSource, deleteLeadType, deleteProductType, deleteSellerType, deleteSkillType, getAllAvailableProduct, getAllLeadsSource, getAllLeadsTypes, getAllProductType, getAllSellerType, getAllSkillType } from '../slices/leadSlice'
import AddBoxIcon from '@mui/icons-material/AddBox';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import { IconButton, Tooltip } from '@material-tailwind/react';
import EditTypeDialog from './Components/OtherTypes/EditTypeDialog';
import LeadSourceDialog from './Components/OtherTypes/LeadSourceDialog';
import SellerTypeDialog from './Components/OtherTypes/SellerTypeDialog';
import ProductTypeDialog from './Components/OtherTypes/ProductTypeDialog';
import SkillTypeDialog from './Components/OtherTypes/SkillTypeDialog';
import AvailableProductDialog from './Components/OtherTypes/AvailableProductDialog';


const Other = () => {
  const [leadName, setLeadName] = useState("")
  const [leadSourceName, setLeadSourceName] = useState("")
  const [sellerName, setSellerName] = useState("")
  const [skillName, setSkillName] = useState("")
  const [productName, setProductName] = useState("")
  const [availableProduct, setAvailableProduct] = useState("")

  const [openLeadType, setOpenLeadType] = useState(false)
  const [openLeadSource, setOpenLeadSource] = useState(false)
  const [openSellerType, setOpenSellerType] = useState(false)
  const [openSkillType, setOpenSkillType] = useState(false)
  const [openProductType, setOpenProductType] = useState(false)
  const [openAvailableProduct, setOpenAvailableProduct] = useState(false)
  const [curId, setCurId] = useState("")

  const dispatch = useDispatch()

  const { leadTypeData, leadSourceData, productTypeData, skillTypeData, sellerTypeData, availableProductData } = useSelector((state) => state.leadCustom)


  const handleLeadTypeSubmit = (e) => {
    e.preventDefault()
    dispatch(createLeadType({ leadName })).then(() => {
      // Refresh leads after deletion
      dispatch(getAllLeadsTypes());
    })
      .catch((error) => {
        // Handle error, if any
        console.log(error);
      });
  }
  const handleLeadSourceSubmit = (e) => {
    e.preventDefault()
    dispatch(createLeadSource({ leadSourceName })).then(() => {
      // Refresh leads after deletion
      dispatch(getAllLeadsSource());
    })
      .catch((error) => {
        // Handle error, if any
        console.log(error);
      });
  }
  const handleSellerTypeSubmit = (e) => {
    e.preventDefault()
    dispatch(createSellerType({ sellerName })).then(() => {
      // Refresh leads after deletion
      dispatch(getAllSellerType());
    })
      .catch((error) => {
        // Handle error, if any
        console.log(error);
      });
  }
  const handleSkillTypeSubmit = (e) => {
    e.preventDefault()
    dispatch(createSkillType({ skillName })).then(() => {
      // Refresh leads after deletion
      dispatch(getAllSkillType());
    })
      .catch((error) => {
        // Handle error, if any
        console.log(error);
      });
  }
  const handleProductTypeSubmit = (e) => {
    e.preventDefault()
    dispatch(createProductType({ productName })).then(() => {
      // Refresh leads after deletion
      dispatch(getAllProductType());
    })
      .catch((error) => {
        // Handle error, if any
        console.log(error);
      });
  }
  const handleAvailableProductSubmit = (e) => {
    e.preventDefault()
    dispatch(createAvailableProduct({ productName: availableProduct })).then(() => {
      // Refresh leads after deletion
      dispatch(getAllAvailableProduct());
    })
      .catch((error) => {
        // Handle error, if any
        console.log(error);
      });
  }

  const handleDeleteLeadType = (id) => {
    dispatch(deleteLeadType({ id })).then(() => {
      dispatch(getAllLeadsTypes());
    }).catch((error) => {
      console.log(error);
    });
  }
  const handleDeleteLeadSource = (id) => {
    dispatch(deleteLeadSource({ id })).then(() => {
      dispatch(getAllLeadsSource());
    }).catch((error) => {
      console.log(error);
    });
  }
  const handleDeleteSellerType = (id) => {
    dispatch(deleteSellerType({ id })).then(() => {
      dispatch(getAllSellerType());
    }).catch((error) => {
      console.log(error);
    });
  }
  const handleDeleteSkillType = (id) => {
    dispatch(deleteSkillType({ id })).then(() => {
      dispatch(getAllSkillType());
    }).catch((error) => {
      console.log(error);
    });
  }
  const handleDeleteProductType = (id) => {
    dispatch(deleteProductType({ id })).then(() => {
      dispatch(getAllProductType());
    }).catch((error) => {
      console.log(error);
    });
  }
  const handleDeleteAvailableProduct = (id) => {
    dispatch(deleteAvailableProduct({ id })).then(() => {
      dispatch(getAllAvailableProduct());
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleOpenEditLeadType = (id) => {
    setCurId(id)
    setOpenLeadType(true)
  }
  const handleOpenEditLeadSource = (id) => {
    setCurId(id)
    setOpenLeadSource(true)
  }
  const handleOpenEditSellerType = (id) => {
    setCurId(id)
    setOpenSellerType(true)
  }
  const handleOpenEditSkillType = (id) => {
    setCurId(id)
    setOpenSkillType(true)
  }
  const handleOpenEditProductType = (id) => {
    setCurId(id)
    setOpenProductType(true)
  }
  const handleOpenEditAvailableProduct = (id) => {
    setCurId(id)
    setOpenAvailableProduct(true)
  }


  useEffect(() => {
    dispatch(getAllSkillType())
    dispatch(getAllProductType())
    dispatch(getAllLeadsSource())
    dispatch(getAllLeadsTypes())
    dispatch(getAllSellerType())
    dispatch(getAllAvailableProduct())
  }, [dispatch]);




  return (
    <>
      <div className="w-full px-0 md:px-6 ">
        <EditTypeDialog open={openLeadType} setOpen={setOpenLeadType} id={curId} />
        <LeadSourceDialog open={openLeadSource} setOpen={setOpenLeadSource} id={curId} />
        <SellerTypeDialog open={openSellerType} setOpen={setOpenSellerType} id={curId} />
        <SkillTypeDialog open={openSkillType} setOpen={setOpenSkillType} id={curId} />
        <ProductTypeDialog open={openProductType} setOpen={setOpenProductType} id={curId} />
        <AvailableProductDialog open={openAvailableProduct} setOpen={setOpenAvailableProduct} id={curId} />

        <div className="w-full max-w-screen-xl mx-auto py-4">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">

            <div className="rounded  " >
              <div className="flex px-2">
                <div className="w-full max-w-md">
                  <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="block text-[#452a72] text-lg font-semibold py-2 px-2">
                      Lead Type
                    </div>

                    <div className="py-3 text-sm h-[200px] overflow-y-scroll custom-scrollbar " >
                      {leadTypeData && leadTypeData[0]?.leadTypes?.map((cur) => (
                        <div key={cur._id} className="flex justify-start items-center  text-gray-700  rounded-md px-2 py-1">
                          <span className="bg-[#452a72] h-2 w-2 m-2 rounded-full"></span>
                          <div className="flex-grow font-medium px-2">{cur.leadType}</div>
                          <div className="text-sm font-normal text-gray-500 tracking-wide">
                            <Tooltip content="Edit">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleOpenEditLeadType(cur._id)}
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleDeleteLeadType(cur._id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      ))}


                    </div>
                    <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">

                      <form onSubmit={handleLeadTypeSubmit}>
                        <div className='flex justify-between gap-1'>
                          <input
                            required
                            type="text"
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            placeholder="Add Lead Type..."
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                          />
                          <button type='submit' className="bg-[#452a72] border border-[#452a72] hover:bg-transparent text-white hover:text-blue-400 py-2 px-3 rounded">
                            Add
                          </button>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded  " >
              <div className="flex px-2">
                <div className="w-full max-w-md">
                  <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="block text-[#452a72] text-lg font-semibold py-2 px-2">
                      Lead Source
                    </div>

                    <div className="py-3 text-sm h-[200px] overflow-y-scroll custom-scrollbar " >
                      {leadSourceData && leadSourceData[0]?.leadSources?.map((cur) => (
                        <div key={cur._id} className="flex justify-start  text-gray-700 items-center  rounded-md px-2 py-1">
                          <span className="bg-[#452a72] h-2 w-2 m-2 rounded-full"></span>
                          <div className="flex-grow font-medium px-2 capitalize">{cur.leadSource}</div>
                          <div className="text-sm font-normal text-gray-500 tracking-wide">
                            <Tooltip content="Edit">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleOpenEditLeadSource(cur._id)}
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleDeleteLeadSource(cur._id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      ))}

                    </div>
                    <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">

                      <form onSubmit={handleLeadSourceSubmit}>
                        <div className='flex justify-between gap-1'>
                          <input
                            required
                            type="text"
                            value={leadSourceName}
                            onChange={(e) => setLeadSourceName(e.target.value)}
                            placeholder="Add Lead Source..."
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                          />
                          <button type='submit' className="bg-[#452a72] border border-[#452a72] hover:bg-transparent text-white hover:text-blue-400 py-2 px-3 rounded">
                            Add
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded  " >
              <div className="flex px-2">
                <div className="w-full max-w-md">
                  <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="block text-[#452a72] text-lg font-semibold py-2 px-2">
                      Seller Type
                    </div>

                    <div className="py-3 text-sm h-[200px] overflow-y-scroll custom-scrollbar " >
                      {sellerTypeData && sellerTypeData[0]?.sellerTypes?.map((cur) => (
                        <div key={cur._id} className="flex justify-start  text-gray-700 items-center  rounded-md px-2 py-1">
                          <span className="bg-[#452a72] h-2 w-2 m-2 rounded-full"></span>
                          <div className="flex-grow font-medium px-2 capitalize">{cur.sellerType}</div>
                          <div className="text-sm font-normal text-gray-500 tracking-wide">
                            <Tooltip content="Edit">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleOpenEditSellerType(cur._id)}
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleDeleteSellerType(cur._id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">

                      <form onSubmit={handleSellerTypeSubmit}>
                        <div className='flex justify-between gap-1'>
                          <input
                            required
                            type="text"
                            value={sellerName}
                            onChange={(e) => setSellerName(e.target.value)}
                            placeholder="Add Seller Type..."
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                          />
                          <button type='submit' className="bg-[#452a72] border border-[#452a72] hover:bg-transparent text-white hover:text-blue-400 py-2 px-3 rounded">
                            Add
                          </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded  " >
              <div className="flex px-2">
                <div className="w-full max-w-md">
                  <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="block text-[#452a72] text-lg font-semibold py-2 px-2">
                      Skill Type
                    </div>

                    <div className="py-3 text-sm h-[200px] overflow-y-scroll custom-scrollbar " >
                      {skillTypeData && skillTypeData[0]?.skillTypes?.map((cur) => (
                        <div key={cur._id} className="flex justify-start  text-gray-700 items-center  rounded-md px-2 py-1">
                          <span className="bg-[#452a72] h-2 w-2 m-2 rounded-full"></span>
                          <div className="flex-grow font-medium px-2 capitalize">{cur.skillType}</div>
                          <div className="text-sm font-normal text-gray-500 tracking-wide">
                            <Tooltip content="Edit">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleOpenEditSkillType(cur._id)}
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleDeleteSkillType(cur._id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
                      <form onSubmit={handleSkillTypeSubmit}>
                        <div className='flex justify-between gap-1'>
                          <input
                            required
                            type="text"
                            value={skillName}
                            onChange={(e) => setSkillName(e.target.value)}
                            placeholder="Add Skill Type..."
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                          />
                          <button type='submit' className="bg-[#452a72] border border-[#452a72] hover:bg-transparent text-white hover:text-blue-400 py-2 px-3 rounded">
                            Add
                          </button>
                        </div>
                      </form>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded  " >
              <div className="flex px-2">
                <div className="w-full max-w-md">
                  <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="block text-[#452a72] text-lg font-semibold py-2 px-2">
                      Product Type
                    </div>

                    <div className="py-3 text-sm h-[200px] overflow-y-scroll custom-scrollbar " >
                      {productTypeData && productTypeData[0]?.productTypes?.map((cur) => (
                        <div key={cur._id} className="flex justify-start  text-gray-700 items-center  rounded-md px-2 py-1">
                          <span className="bg-[#452a72] h-2 w-2 m-2 rounded-full"></span>
                          <div className="flex-grow font-medium px-2 capitalize">{cur.productType}</div>
                          <div className="text-sm font-normal text-gray-500 tracking-wide">
                            <Tooltip content="Edit">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleOpenEditProductType(cur._id)}
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleDeleteProductType(cur._id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
                      <form onSubmit={handleProductTypeSubmit}>
                        <div className='flex justify-between gap-1'>
                          <input
                            required
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Add Product Type..."
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                          />
                          <button type='submit' className="bg-[#452a72] border border-[#452a72] hover:bg-transparent text-white hover:text-blue-400 py-2 px-3 rounded">
                            Add
                          </button>
                        </div>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded  " >
              <div className="flex px-2">
                <div className="w-full max-w-md">
                  <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="block text-[#452a72] text-lg font-semibold py-2 px-2">
                      Available Product
                    </div>

                    <div className="py-3 text-sm h-[200px] overflow-y-scroll custom-scrollbar " >
                      {availableProductData && availableProductData[0]?.productTypes?.map((cur) => (
                        <div key={cur._id} className="flex justify-start  text-gray-700 items-center  rounded-md px-2 py-1">
                          <span className="bg-[#452a72] h-2 w-2 m-2 rounded-full"></span>
                          <div className="flex-grow font-medium px-2 capitalize">{cur.productType}</div>
                          <div className="text-sm font-normal text-gray-500 tracking-wide">
                            <Tooltip content="Edit">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleOpenEditAvailableProduct(cur._id)}
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete">
                              <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={() => handleDeleteAvailableProduct(cur._id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
                      <form onSubmit={handleAvailableProductSubmit}>
                        <div className='flex justify-between gap-1'>
                          <input
                            required
                            type="text"
                            value={availableProduct}
                            onChange={(e) => setAvailableProduct(e.target.value)}
                            placeholder="Add Product Type..."
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#452a72] focus:border-[#452a72]"
                          />
                          <button type='submit' className="bg-[#452a72] border border-[#452a72] hover:bg-transparent text-white hover:text-blue-400 py-2 px-3 rounded">
                            Add
                          </button>
                        </div>

                      </form>

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

export default Other