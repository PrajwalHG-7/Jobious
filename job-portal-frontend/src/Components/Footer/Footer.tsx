import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBriefcase } from "@tabler/icons-react";
import { footerLinks } from "../../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return location.pathname != '/signup' && location.pathname != '/login' ? <div className="pt-20 pb-5 bg-mine-shaft-950 flex gap-5 justify-around">
            <div className="w-1/4 flex flex-col gap-4">
                <div className='flex items-center gap-1 text-bright-sun-400'>
                    <IconBriefcase className='h-6 w-6' stroke={2}/>
                    <div className='text-xl font-semibold'>Jobious</div>
                </div>
                <div className="text-mine-shaft-300 text-sm">
                    Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
                </div>
                <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 hover:[&>div]:bg-mine-shaft-700 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer">
                    <div>
                        <IconBrandFacebook />
                    </div>
                    <div>
                        <IconBrandInstagram />
                    </div>
                    <div>
                        <IconBrandX />
                    </div>
                </div>
            </div>
            {
                footerLinks.map(
                    (item, index) =>
                        <div key={index}>
                            <div className="text-bright-sun-400 text-lg font-semibold mb-4">
                                {item.title}
                            </div>
                            {
                                item.links.map(
                                    (link, linkIndex) =>
                                    <div className="text-mine-shaft-300 mb-1 text-sm hover:translate-x-2 transition duration-300 ease-in-out hover:text-bright-sun-400 cursor-pointer" key={linkIndex}>
                                        {link}
                                    </div>
                                )
                            }
                        </div>
                    )
            }
        </div>
        :
        <div></div>
}

export default Footer;