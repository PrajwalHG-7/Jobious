import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../../Data/JobDescData";
import DOMPurify from 'dompurify'
import RecommendedJobs from "./RecommendedJobs";

const JobDesc = (props:any) => {
    const data = DOMPurify.sanitize(desc);
    return (
        <div className="w-2/3">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/Icons/Google.png`} alt='company' />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl">Software Engineer III</div>
                        <div className="text-lg text-mine-shaft-300">Google • 3 days ago • 48 Applicants</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to={props.edit?"":'/apply-job'}>
                        <Button size="sm" color="bright-sun.4" variant="light">{props.edit?"Edit":"Apply"}</Button>
                    </Link>
                    {props.edit?<Button size="sm" color="red.5" variant="outline">Delete</Button>:<IconBookmark className="text-bright-sun-400 cursor-pointer" />}
                </div>
            </div>
            <Divider my='xl' />
            <div className="flex justify-between">
                {
                    card.map(
                        (item:any, index:any) =>
                            <div key={index} className="flex flex-col items-center gap-1">
                        <ActionIcon className="!h-12 !w-12" color="bright-sun.4" variant="light" radius="xl" aria-label="Settings">
                            <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                        </ActionIcon>
                        <div className="text-sm text-mine-shaft-300">{item.name}</div>
                        <div className="font-semibold">{item.value}</div>
                    </div>
                    )
                }
            </div>
            <Divider my='xl' />
            <div>
                <div className="text-xl font-semibold mb-5">
                    Required Skills
                </div>
                <div className="flex flex-wrap gap-2">
                    {
                        skills.map(
                            (skill, index) =>
                                <ActionIcon key={index} className="!text-sm !h-fit !w-fit !font-medium" p="xs" color="bright-sun.4" variant="light" radius="xl" aria-label="Settings">
                                    {skill}
                                </ActionIcon>
                        )
                    }
                </div>
            </div>
            <Divider my='xl' />
            <div className="[&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_*]:text-mine-shaft-300 [&_p]:text-justify [&_h4]:text-mine-shaft-200 [&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold" dangerouslySetInnerHTML={{__html:data}}>
            </div>
            <Divider my='xl' />
            <div>
                <div className="text-xl font-semibold mb-5">
                    About The Company
                </div>
                <div className="flex justify-between mb-3">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-8" src={`/Icons/Google.png`} alt='company' />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-medium text-lg">Google</div>
                            <div className="text-mine-shaft-300">10K+ Employees</div>
                        </div>
                    </div>
                    <Link to='/company'>
                        <Button size="sm" color="bright-sun.4" variant="light">Company Page</Button>
                    </Link>
                </div>
                <div className="text-mine-shaft-300 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rerum nihil harum repudiandae aperiam autem, fugit delectus eos dolores iure suscipit saepe tempora, distinctio explicabo illum ullam necessitatibus sint quas earum animi soluta. Dolore alias tempore quibusdam deleniti natus ipsum consequuntur pariatur, consequatur ea nisi.
                </div>
            </div>
            <Divider my='xl' />
        </div>
    )
}

export default JobDesc;