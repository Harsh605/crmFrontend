import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Navigate,useNavigate } from "react-router-dom"
import Login from './Login'
import Layout from './Layout/Layout'
import Layout2 from './Layout/Layout2'
import AdminDashboard from './Admin/AdminDashboard'
import Dashboard from './Employee/Dashboard'
import Followup from './Employee/Followup'
import Seller from './Employee/Seller'
import Leads from './Employee/Leads'
import Enquiry from './Employee/Enquiry'
import Register from './Register'
import { loadUser } from './slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import AllUser from './Admin/AllUser'
import AdminLeads from './Admin/Leads'
import Other from './Admin/Other'
import AdminSellerPage from './Admin/Seller'
import AdminFollowup from './Admin/Followup'
import NotFound from './Components/404Page'
import AdminEnquiry from './Admin/AdminEnquiry'


const App = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, error, isLoading, userData } = useSelector((state) => state.userCustom)
  
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  
  
  
  return (
    <Router>
      <Routes>
        {/* First Route */}
        <Route exact path="/*" element={<Layout />}>
          <Route path="" element={<Login userData={userData} />} />
          <Route path="admin/secret/register" element={<Register />} />
        </Route>

        {/* Second Route */}
        {userData && userData.role === "user" ? (
          <Route exact path={`/employee/*`} element={<Layout2 userData={userData} />}>
            <Route exact path='dashboard' element={<Dashboard /> } />
            <Route exact path='enquiry' element={<Enquiry /> } />
            <Route exact path='leads' element={<Leads userData={userData}/> } />
            <Route exact path='seller' element={<Seller /> } />
            <Route exact path='followup' element={<Followup userData={userData}/> } />
            <Route path="*" element={<NotFound />} />
            
          </Route>

        ) : (
          <Route exact path={`/admin/*`} element={<Layout2 userData={userData} />}>
            <Route exact path='dashboard' element={<AdminDashboard /> } />
            <Route exact path='allUser' element={<AllUser /> } />
            <Route exact path='leads' element={<AdminLeads userData={userData}/> } />
            <Route exact path='other' element={<Other /> } />
            <Route exact path='seller' element={<AdminSellerPage /> } />
            <Route exact path='followup' element={<AdminFollowup userData={userData}/> } />
            <Route exact path='enquiry' element={<AdminEnquiry userData={userData}/> } />
            {/* <Route exact path="dashboard" element={<AdminDashboard />} /> */}
            {/* <Route exact path="allUser" element={<AllUser />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        )}
      </Routes>
    </Router>
  )
}
export default App
