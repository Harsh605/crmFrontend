import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const createLead = createAsyncThunk("lead/create", async ({ name, email, phoneNo, city, state, country, leadType, source, product, quotation, enquiryMessage, followups}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/lead/create`
    try {
        const response = await axios.post(url, { name, email, phoneNo, city, state, country, leadType, source, product, quotation, enquiryMessage, followups }, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const createSeller = createAsyncThunk("seller/create", async ({ name, email, phoneNo, city, state, country, sellerType, skills , madeProducts}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/seller/create`
    try {
        const response = await axios.post(url, {  name, email, phoneNo, city, state, country, sellerType, skills , madeProducts}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})

//apni apni leads
export const getAllLeads = createAsyncThunk("allLeads/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leads/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})
//admin all leads
export const getAllLeadsByAdmin = createAsyncThunk("allLeadsByAdmin/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1//admin/leads/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})
//admin all sellers
export const getAllSeller = createAsyncThunk("allSeller/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/sellers/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})
//user sellers
export const getMySeller = createAsyncThunk("MySeller/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/sellers/mine/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})

//delete Lead admin sabki and user apni apni
export const deleteLead = createAsyncThunk("delete/Lead", async (id,{ rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }

    let url =`https://crmbackend.metablocktechnologies.org/api/v1/lead/${id}/delete`
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})

export const deleteSeller = createAsyncThunk("delete/Seller", async (id,{ rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }

    let url =`https://crmbackend.metablocktechnologies.org/api/v1/seller/${id}/delete`
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})

export const createLeadType = createAsyncThunk("leadType/create", async ({leadName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leadType/create`
    try {
        const response = await axios.post(url, { leadName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const createLeadSource = createAsyncThunk("leadSource/create", async ({leadSourceName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leadSource/create`
    try {
        const response = await axios.post(url, { leadSourceName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const createSellerType = createAsyncThunk("sellerType/create", async ({sellerName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/sellerType/create`
    try {
        const response = await axios.post(url, { sellerName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const createSkillType = createAsyncThunk("skillType/create", async ({skillName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/skillType/create`
    try {
        const response = await axios.post(url, { skillName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const createProductType = createAsyncThunk("productType/create", async ({productName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/productType/create`
    try {
        const response = await axios.post(url, { productName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const createAvailableProduct = createAsyncThunk("AvailableProduct/create", async ({productName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/availableProduct/create`
    try {
        const response = await axios.post(url, { productName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
 

// update
export const updateLeadType = createAsyncThunk("leadType/update", async ({id,leadName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leadType/${id}/update`
    try {
        const response = await axios.post(url, { leadName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})

export const updateLeadSource = createAsyncThunk("leadSource/update", async ({id,leadSourceName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leadSource/${id}/update`
    try {
        const response = await axios.post(url, { leadSourceName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const updateSellerType = createAsyncThunk("sellerType/update", async ({id,sellerName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/sellerType/${id}/update`
    try {
        const response = await axios.post(url, { sellerName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const updateSkillType = createAsyncThunk("skillType/update", async ({id,skillName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/skillType/${id}/update`
    try {
        const response = await axios.post(url, { skillName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const updateProductType = createAsyncThunk("productType/update", async ({id,productName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/productType/${id}/update`
    try {
        const response = await axios.post(url, { productName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const updateAvailableProduct = createAsyncThunk("AvailableProduct/update", async ({id,productName}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/availableProduct/${id}/update`
    try {
        const response = await axios.post(url, { productName}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})

//get all

export const getAllLeadsTypes = createAsyncThunk("allLeadsTypes/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leadTypes/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})
export const getAllLeadsSource = createAsyncThunk("allLeadsSources/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leadSources/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})
export const getAllSellerType = createAsyncThunk("allSellerTypes/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/sellerTypes/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})
export const getAllSkillType = createAsyncThunk("allSkillTypes/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/skillTypes/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})
export const getAllProductType = createAsyncThunk("allProductstypes/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/productTypes/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})
export const getAllAvailableProduct = createAsyncThunk("AvailableProduct/get", async () => {
   
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/availableProducts/get`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})

//delete

export const deleteLeadType = createAsyncThunk("leadType/delete", async ({id}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leadType/${id}/delete`
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const deleteLeadSource = createAsyncThunk("leadSource/delete", async ({id}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/leadSource/${id}/delete`
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const deleteSellerType = createAsyncThunk("sellerType/delete", async ({id}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/sellerType/${id}/delete`
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const deleteSkillType = createAsyncThunk("skillType/delete", async ({id}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/skillType/${id}/delete`
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const deleteProductType = createAsyncThunk("productType/delete", async ({id}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/productType/${id}/delete`
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const deleteAvailableProduct = createAsyncThunk("AvailableProduct/delete", async ({id}, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/availableProduct/${id}/delete`
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const createLeadFollowup = createAsyncThunk("leadFollowup/create", async ({id,followups}, { rejectWithValue }) => {
    console.log(id,followups)
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://crmbackend.metablocktechnologies.org/api/v1/lead/${id}/create`
    try {
        const response = await axios.post(url, {followups}, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})




export const leadSlice = createSlice({
    name: "lead",
    initialState: {
        isLoading: false,
        isCreated:false,
        isUpdated:false,
        error: null,
        leadData: null,
        sellerData: null,
        isDeleted:false,
        leads: [],
        availableProductData: [],
        leadTypeData: [],
        leadSourceData: [],
        sellerTypeData: [],
        individualSellerData:null,
        productTypeData: [],
        skillTypeData: [],
        adminLeads: [],
        deleteData :null
    },
    extraReducers: (builder) => {
        builder
            .addCase(createLead.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createLead.fulfilled, (state, action) => {
                state.isLoading = false
                state.leadData = action.payload
                state.isCreated = true
            })
            .addCase(createLead.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.leadData = []
                state.isCreated = false
            })
            .addCase(createSeller.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createSeller.fulfilled, (state, action) => {
                state.isLoading = false
                state.isCreated = true
            })
            .addCase(createSeller.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isCreated = false
            })
            .addCase(createLeadFollowup.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createLeadFollowup.fulfilled, (state, action) => {
                state.isLoading = false
                state.isCreated = true
            })
            .addCase(createLeadFollowup.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isCreated = false
            })

            .addCase(getAllLeads.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllLeads.fulfilled, (state, action) => {
                state.isLoading = false
                state.leads = action.payload.leads
                state.isCreated = true
            })
            .addCase(getAllLeads.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.leads = null
                state.isCreated = false
            })
            .addCase(getAllLeadsByAdmin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllLeadsByAdmin.fulfilled, (state, action) => {
                state.isLoading = false
                state.adminLeads = action.payload.leads
                state.isCreated = true
            })
            .addCase(getAllLeadsByAdmin.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.adminLeads = null
                state.isCreated = false
            })
            .addCase(getAllSeller.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllSeller.fulfilled, (state, action) => {
                state.isLoading = false
                state.sellerData = action.payload.seller
                state.isCreated = true
            })
            .addCase(getAllSeller.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.sellerData = null
                state.isCreated = false
            })
            .addCase(getMySeller.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMySeller.fulfilled, (state, action) => {
                state.isLoading = false
                state.individualSellerData = action.payload.seller
                state.isCreated = true
            })
            .addCase(getMySeller.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.individualSellerData = null
                state.isCreated = false
            })
            .addCase(deleteLead.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteLead.fulfilled, (state, action) => {
                state.isLoading = false
                state.deleteData = action.payload
            })
            .addCase(deleteLead.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.deleteData = null
            })
            .addCase(createLeadType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createLeadType.fulfilled, (state, action) => {
                state.isLoading = false
                state.leadTypeData = action.payload
                state.isCreated = true
            })
            .addCase(createLeadType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.leadTypeData = []
                state.isCreated = false
            })
            .addCase(createLeadSource.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createLeadSource.fulfilled, (state, action) => {
                state.isLoading = false
                state.leadSourceData = action.payload
                state.isCreated = true
            })
            .addCase(createLeadSource.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.leadSourceData = []
                state.isCreated = false
            })
            .addCase(createSellerType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createSellerType.fulfilled, (state, action) => {
                state.isLoading = false
                state.sellerTypeData = action.payload
                state.isCreated = true
            })
            .addCase(createSellerType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.sellerTypeData = []
                state.isCreated = false
            })
            .addCase(createSkillType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createSkillType.fulfilled, (state, action) => {
                state.isLoading = false
                state.skillTypeData = action.payload
                state.isCreated = true
            })
            .addCase(createSkillType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.skillTypeData = []
                state.isCreated = false
            })
            .addCase(createProductType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProductType.fulfilled, (state, action) => {
                state.isLoading = false
                state.productTypeData = action.payload
                state.isCreated = true
            })
            .addCase(createProductType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.productTypeData = []
                state.isCreated = false
            })
            .addCase(createAvailableProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createAvailableProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.availableProductData = action.payload
                state.isCreated = true
            })
            .addCase(createAvailableProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.availableProductData = []
                state.isCreated = false
            })

            .addCase(getAllLeadsTypes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllLeadsTypes.fulfilled, (state, action) => {
                state.isLoading = false
                state.leadTypeData = action.payload.leadTypes
            })
            .addCase(getAllLeadsTypes.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.leadTypeData = []
            })
            .addCase(getAllLeadsSource.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllLeadsSource.fulfilled, (state, action) => {
                state.isLoading = false
                state.leadSourceData = action.payload.leadSources
            })
            .addCase(getAllLeadsSource.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.leadSourceData = []
            })
            .addCase(getAllSkillType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllSkillType.fulfilled, (state, action) => {
                state.isLoading = false
                state.skillTypeData = action.payload.skillTypes
            })
            .addCase(getAllSkillType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.skillTypeData = []
            })
            .addCase(getAllSellerType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllSellerType.fulfilled, (state, action) => {
                state.isLoading = false
                state.sellerTypeData = action.payload.sellerTypes
            })
            .addCase(getAllSellerType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.sellerTypeData = []
            })
            .addCase(getAllProductType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProductType.fulfilled, (state, action) => {
                state.isLoading = false
                state.productTypeData = action.payload.productTypes
            })
            .addCase(getAllProductType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.productTypeData = []
            })
            .addCase(getAllAvailableProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllAvailableProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.availableProductData = action.payload.productTypes
            })
            .addCase(getAllAvailableProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.availableProductData = []
            })
            .addCase(deleteLeadType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteLeadType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isDeleted = true
            })
            .addCase(deleteLeadType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isDeleted = false
            })
            .addCase(deleteLeadSource.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteLeadSource.fulfilled, (state, action) => {
                state.isLoading = false
                state.isDeleted = true
            })
            .addCase(deleteLeadSource.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isDeleted = false
            })
            .addCase(deleteSeller.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteSeller.fulfilled, (state, action) => {
                state.isLoading = false
                state.isDeleted = true
            })
            .addCase(deleteSeller.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isDeleted = false
            })
            .addCase(deleteSellerType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteSellerType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isDeleted = true
            })
            .addCase(deleteSellerType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isDeleted = false
            })
            .addCase(deleteSkillType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteSkillType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isDeleted = true
            })
            .addCase(deleteSkillType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isDeleted = false
            })
            .addCase(deleteProductType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteProductType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isDeleted = true
            })
            .addCase(deleteProductType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isDeleted = false
            })
            .addCase(deleteAvailableProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteAvailableProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isDeleted = true
            })
            .addCase(deleteAvailableProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isDeleted = false
            })
            .addCase(updateLeadType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateLeadType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = true
            })
            .addCase(updateLeadType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isUpdated = false
            })
            .addCase(updateLeadSource.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateLeadSource.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = true
            })
            .addCase(updateLeadSource.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isUpdated = false
            })
            .addCase(updateSellerType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateSellerType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = true
            })
            .addCase(updateSellerType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isUpdated = false
            })
            .addCase(updateSkillType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateSkillType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = true
            })
            .addCase(updateSkillType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isUpdated = false
            })
            .addCase(updateProductType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateProductType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = true
            })
            .addCase(updateProductType.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isUpdated = false
            })
            .addCase(updateAvailableProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateAvailableProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = true
            })
            .addCase(updateAvailableProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.isUpdated = false
            })
            

            
            



    }
})


export default leadSlice.reducer

