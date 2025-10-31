import { work } from "../../Data/Data";
import { Avatar } from '@mantine/core';

const Working = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="font-semibold text-center mb-3 text-mine-shaft-100 text-4xl">
                How it <span className="text-bright-sun-400">Works</span>
            </div>
            <div className="text-lg mx-auto mb-10 text-mine-shaft-300 text-center w-1/2">
                Effortlessly navigate throught the process and land your dream job.
            </div>
            <div className="flex px-16 justify-between items-center">
                <div className="flex relative">
                    <img className="h-[30rem]" src="/Working/Girl.png" alt="Girl" />
                    <div className="absolute right-0 top-[15%] flex flex-col gap-1 w-36 backdrop-blur-md items-center border border-bright-sun-400 rounded-xl px-1 py-3">
                        <Avatar className="!h-16 !w-16" src="headhunter.png" alt="its me" />
                        <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete your Profile</div>
                        <div className="text-xs text-mine-shaft-300">70% Complete</div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        work.map(
                            (item, index) => 
                            <div key={index} className="flex items-center gap-4">
                                <div className="p-2.5 bg-bright-sun-300 rounded-full">
                                    <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt={item.name} />
                                </div>
                                <div>
                                    <div className="text-mine-shaft-200 text-xl font-semibold">
                                        {item.name}
                                    </div>
                                    <div className="text-mine-shaft-300">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Working;