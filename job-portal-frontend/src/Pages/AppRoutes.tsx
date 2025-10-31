import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "../Components/Header/Header"
import { Divider } from "@mantine/core"
import Footer from "../Components/Footer/Footer"
import FindJobsPage from "./FindJobsPage"
import FindTalentPage from "./FindTalentPage"
import PostJobPage from "./PostJobPage"
import JobDescPage from "./JobDescPage"
import ApplyJobPage from "./ApplyJobPage"
import TalentProfilePage from "./TalentProfilePage"
import PostedJobPage from "./PostedJobPage"
import CompanyPage from "./CompanyPage"
import SignUpPage from "./SignUpPage"
import JobHistoryPage from "./JobHistoryPage"
import ProfilePage from "./ProfilePage"
import HomePage from "./HomePage"
import { useSelector } from "react-redux"

const AppRoutes = () => {
    const user = useSelector((state:any)=>state.user);
    return(    
        <BrowserRouter>
            <div className='relative h-min-[100vh] bg-mine-shaft-950 font-[Poppins]'>
                <Header />
                <Divider size="xs" mx='md' />
                    <Routes>
                    <Route path='/find-jobs' element={<FindJobsPage />} />
                    <Route path='/find-talent' element={<FindTalentPage />} />
                    <Route path='/post-job' element={<PostJobPage />} />
                    <Route path='/jobs' element={<JobDescPage />} />
                    <Route path='/apply-job' element={<ApplyJobPage />} />
                    <Route path='/company' element={<CompanyPage />} />
                    <Route path='/posted-job' element={<PostedJobPage />} />
                    <Route path='/job-history' element={<JobHistoryPage />} />
                    <Route path='/signup' element={user ? <Navigate to={'/'} /> : <SignUpPage />} />
                    <Route path='/login' element={user ? <Navigate to={'/'} /> : <SignUpPage />} />
                    <Route path='/talent-profile' element={<TalentProfilePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='*' element={<HomePage />} />
                </Routes>
            <Divider size="xs" mx='md' className='mt-16' />
            <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes