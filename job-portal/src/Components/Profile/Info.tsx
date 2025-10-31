import { ActionIcon } from "@mantine/core"
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react"
import SelectInput from "./SelectInput"
import fields from "../../Data/Profile"
import { useState } from "react"
import { useSelector } from "react-redux"

const Info = () => {
    const select = fields
    const [edit, setEdit] = useState(false)
    const profile = useSelector((state:any)=>state.profile)

    const handleClick = () => {
        setEdit(!edit)
    }
    
    return (
        <>
            <div className="text-3xl mt-24 font-semibold flex justify-between">
                    {profile.name}
                    <ActionIcon onClick={() => handleClick} size="lg" color="bright-sun.4" variant="subtle">
                        {
                            edit ?
                                <IconDeviceFloppy className="h-4/5 w-4/5" />
                                :
                                <IconPencil className="h-4/5 w-4/5" />
                        }
                    </ActionIcon>
                </div>
                {
                    edit ?
                        <>
                            <div className="flex gap-10 mb-5 [&>*]:w-1/2">
                                <SelectInput {...select[0]} />
                                <SelectInput {...select[1]} />
                            </div>
                            <SelectInput {...select[2]} />
                        </>
                        :
                        <>
                            <div className="text-xl flex gap-1 items-center">
                                <IconBriefcase className="h-5 w-5" stroke={1.5} />
                                {profile.role} &bull; {profile.company}
                            </div>
                            <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
                                <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
                            </div>
                        </>
                }
        </>
    )
}

export default Info