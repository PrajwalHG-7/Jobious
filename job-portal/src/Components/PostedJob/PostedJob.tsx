import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { activeJobs } from "../../Data/PostedJob";

const PostedJob = () => {
    return (
        <div className="mt-5 w-1/6">
            <div className=" mb-5 text-2xl font-semibold">draft</div>
            <div>
                <Tabs autoContrast variant="pills" defaultValue="active">
                    <Tabs.List className="font-medium [&_button[aria-selected='false']]:bg-mine-shaft-900">
                        <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                        <Tabs.Tab value="draft">Draft [2]</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="active">
                        <div className="flex flex-col gap-5 mt-5">
                            {
                                activeJobs.map(
                                    (item, index) =>
                                        <PostedJobCard key={index} {...item}/>
                                )
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="draft">
                        <div>

                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default PostedJob;