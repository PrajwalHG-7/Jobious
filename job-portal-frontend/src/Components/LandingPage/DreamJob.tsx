import { Avatar, AvatarGroup, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob = () => {
    return (
        <div className="flex px-16 py-16 items-center">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="[&>span]:text-bright-sun-400 text-6xl font-bold leading-tight text-mine-shaft-100">
                    Find your <span>dream job</span> with us
                </div>
                <div className="text-mine-shaft-200 text-lg">
                    We help you find the job that suits you best. Start exploring thousands of jobs in one place.
                </div>
                <div className='flex gap-3 mt-5'>

                    <TextInput variant="unstyled" className='text-mine-shaft-100 [&_input]:text-mine-shaft-200 bg-mine-shaft-900 rounded-lg p-1 px-2' label="Job Title" placeholder="Software Engineer" />

                    <TextInput variant="unstyled" className='text-mine-shaft-100 [&_input]:text-mine-shaft-200 bg-mine-shaft-900 rounded-lg p-1 px-2' label="Job Type" placeholder="Full Time" />

                    <div className='flex justify-center items-center h-full w-20 bg-bright-sun-400 p-2 rounded-lg hover:bg-bright-sun-500 cursor-pointer'>
                        <IconSearch className='h-[85%] w-[85%] text-mine-shaft-100'/>
                    </div>

                </div>
            </div>
            <div className="w-[55%] flex justify-center items-center">
                <div className="w-[30rem] relative">
                    <img src="/job.png" alt="job"/>

                    <div className='absolute -left-20 top-[30%] w-fit border border-bright-sun-400 rounded-lg p-2 backdrop-blur-md'>
                        <div className='text-center mb-1 text-sm text-mine-shaft-100'>
                            7k+ got job
                        </div>

                        <AvatarGroup>
                            <Avatar src="logo512.png" />
                            <Avatar src="hs.jpeg" />
                            <Avatar src="job1.png" />
                            <Avatar>6k+</Avatar>
                        </AvatarGroup>

                    </div>

                    <div className='absolute top-[25%] -right-20 w-fit border border-bright-sun-400 rounded-lg p-2 backdrop-blur-md'>
                        <div className='flex gap-2'>
                            <div className='h-10 w-10 flex rounded-lg bg-mine-shaft-900'>
                                <img src="meta.png" alt="meta" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <span className='text-sm text-mine-shaft-200'>
                                    Software Engineer
                                </span>
                                <span className='text-xs text-mine-shaft-300'>
                                    New York
                                </span>
                            </div>
                        </div>
                        <div className='flex mt-1 justify-around gap-2 text-mine-shaft-200 text-xs'>
                            <span>
                                1day ago
                            </span>
                            <span>
                                120 Applicants!
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DreamJob;