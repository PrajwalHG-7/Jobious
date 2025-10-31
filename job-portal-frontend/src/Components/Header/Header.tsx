import { Avatar, Button, Indicator } from '@mantine/core';
import { IconBriefcase, IconBell, IconSettings } from '@tabler/icons-react';
import NavLinks from './NavLinks';
import { Link, useLocation } from 'react-router';
import Profile from '../TalentProfile/Profile';
import ProfileMenu from './ProfileMenu';
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector((state:any)=>state.user)
    const location = useLocation();
    return location.pathname != '/signup' && location.pathname != '/login' ? <div className="w-full backdrop-blur-lg sticky top-0 z-[50] text-white h-20 flex justify-between px-6 items-center">
        <Link to="/" className='flex items-center gap-1 text-bright-sun-400'>
            <IconBriefcase className='h-12 w-12' stroke={2}/>
            <div className='text-3xl font-semibold'>Jobious</div>
        </Link>

        <NavLinks />
        
        <div className='flex items-center gap-2'>
            {user ? <ProfileMenu /> :
                <Link to={"/login"}>
                    <Button variant='subtle' color='bright-sun.4'>Login</Button>
                </Link>
            }

            {/* <div className='p-1.5 bg-mine-shaft-900 rounded-full'>
                <IconSettings stroke={1.5}/>
            </div> */}

            <div className='p-1.5 bg-mine-shaft-900 rounded-full'>
                <Indicator color="bright-sun.4" offset={6} size={8} processing>
                    <IconBell stroke={1.5} />
                </Indicator>
            </div>

        </div>
    </div>
    :
    <div></div>
}

export default Header;