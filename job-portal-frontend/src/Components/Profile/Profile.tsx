import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import ExpCard from "./ExpCard";
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import { useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import Info from "./Info";

const Profile = () => {
    const user = useSelector((state:any)=>state.user)
    const profile = useSelector((state:any)=>state.profile)
    const [addExp, setAddExp] = useState(false)
    const [addCerti, setAddCerti] = useState(false)
    const [skills, setSkills] = useState(profile.skills)
    const [about, setAbout] = useState(`${profile.about}`)
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }

    useEffect(() => {
        getProfile(user.id)
            .then((data:any) => {
                console.log(data)
            })
            .catch((err:any) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="w-4/5 mx-auto">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="banner" />
                <img className="rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8 h-48 w-48" src="/avatar.png" alt="avatar" />
            </div>
            <div className="px-3 mt-16">
                <Info />
            </div>
            <Divider mx="xs" size="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    About
                    <ActionIcon onClick={() => handleEdit(1)} size="lg" color="bright-sun.4" variant="subtle">
                        {
                            edit[1] ?
                                <IconDeviceFloppy className="h-4/5 w-4/5" />
                                :
                                <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
                {
                    edit[1] ?
                        <Textarea placeholder="Enter about yourself..." minRows={3} autosize value={about} onChange={(event) => setAbout(event.currentTarget.value)} />
                        :
                        <div className="text-sm text-mine-shaft-300 text-justify">
                            {about}
                        </div>
                }
            </div>
            <Divider mx="xs" size="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    Skills
                    <ActionIcon onClick={() => handleEdit(2)} size="lg" color="bright-sun.4" variant="subtle">
                        {
                            edit[2] ?
                                <IconDeviceFloppy className="h-4/5 w-4/5" />
                                :
                                <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
                {
                    edit[2] ?
                        <TagsInput value={skills} onChange={setSkills} placeholder="Add Skill" splitChars={[',', ' ', '|']} />
                        :
                        <>
                            <div className="flex flex-wrap gap-2">
                                {
                                    skills.map((skill: any, index: any) =>
                                        <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">
                                            {skill}
                                        </div>
                                    )
                                }
                            </div>
                        </>
                }
            </div>
            <Divider mx="xs" size="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">
                    Experience
                    <div className="flex gap-2">
                        <ActionIcon onClick={() => setAddExp(true)} size="lg" color="bright-sun.4" variant="subtle">
                            {
                                <IconPlus className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                        <ActionIcon onClick={() => handleEdit(3)} size="lg" color="bright-sun.4" variant="subtle">
                            {
                                edit[3] ?
                                    <IconDeviceFloppy className="h-4/5 w-4/5" />
                                    :
                                    <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        profile?.experience?.map((exp: any, index: any) =>
                            <ExpCard key={index} {...exp} edit={edit[3]} />
                        )
                    }
                    {
                        addExp &&
                        <ExpInput add setEdit={setAddExp} />
                    }
                </div>
            </div>
            <Divider mx="xs" size="xs" my="xl" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">
                    Certifications
                    <div className="flex gap-2">
                        <ActionIcon onClick={() => setAddCerti(true)} size="lg" color="bright-sun.4" variant="subtle">
                            {
                                <IconPlus className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                        <ActionIcon onClick={() => handleEdit(4)} size="lg" color="bright-sun.4" variant="subtle">
                            {
                                edit[4] ?
                                    <IconDeviceFloppy className="h-4/5 w-4/5" />
                                    :
                                    <IconPencil className="h-4/5 w-4/5" />
                            }
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        profile?.certifications?.map((certi: any, index: any) =>
                            <CertiCard key={index} edit={edit[4]} {...certi} />
                        )
                    }
                    {
                        addCerti &&
                        <CertiInput setEdit={setAddCerti} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;