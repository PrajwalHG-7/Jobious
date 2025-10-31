import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Components/SignUpLogin/Login";
import SignUp from "../Components/SignUpLogin/SignUp";
import { IconArrowLeft, IconBriefcase } from "@tabler/icons-react";
import { Button } from "@mantine/core";

const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate()
    return (
        <div className="overflow-hidden min-h-[90vh] relative bg-mine-shaft-950 font-[Poppins]">
            <Button className="my-4 !absolute left-5 z-10" onClick={() => navigate('/')} leftSection={<IconArrowLeft size={20} />} color="bright-sun.4" variant="light">Home</Button>
            <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000 ${location.pathname == '/signup' ? '-translate-x-1/2' : '-translate-x-0'}`}>
                <Login />
                <div className={`flex flex-col gap-5 items-center justify-center w-1/2 h-full transition-all ease-in-out duration-1000 ${location.pathname == '/signup' ? 'rounded-r-[200px]' : 'rounded-l-[200px]'} bg-mine-shaft-900`}>
                    <div className='flex items-center gap-1 text-bright-sun-400'>
                        <IconBriefcase className='h-16 w-16' stroke={2} />
                        <div className='text-6xl font-semibold'>Jobious</div>
                    </div>
                    <div className="text-2xl text-mine-shaft-200 font-semibold">
                        Find the Job made for You!
                    </div>
                </div>
                <SignUp />
            </div>
        </div>
    )
}

export default SignUpPage;