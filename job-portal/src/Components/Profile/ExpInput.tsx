import { Button, Checkbox, Textarea } from "@mantine/core"
import fields from "../../Data/Profile"
import SelectInput from "./SelectInput"
import { useState } from "react"
import { profile } from "../../Data/TalentData"
import { MonthPickerInput } from "@mantine/dates"

const ExpInput = (props: any) => {
    const select = fields
    const [checked, setChecked] = useState(false)
    const [startDate, setStartDate] = useState<Date | null>(new Date())
    const [endDate, setEndDate] = useState<Date | null>(new Date())
    const [desc, setDesc] = useState('')

    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">
                {props.add?'Add':'Edit'} Experience
            </div>
            <div className="flex gap-10 mb-5 [&>*]:w-1/2">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
            <Textarea withAsterisk label="Summary" placeholder="Enter description..." minRows={3} autosize value={desc} onChange={(event) => setDesc(event.currentTarget.value)} />
            <div className="flex gap-10 mb-5 [&>*]:w-1/2">
                <MonthPickerInput withAsterisk maxDate={endDate || undefined} label="Start Date" placeholder="Pick date" value={startDate} onChange={setStartDate} />
                <MonthPickerInput disabled={checked} withAsterisk maxDate={new Date} minDate={startDate || undefined} label="End Date" placeholder="Pick date" value={endDate} onChange={setEndDate} />
            </div>
            <Checkbox autoContrast label="Currently working here" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            <div className="flex gap-5">
                <Button onClick={() => props.setEdit(false)} color="bright-sun.4" variant="outline">Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancle</Button>
            </div>
        </div>
    )
}

export default ExpInput