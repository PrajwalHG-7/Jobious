import { Notification, Button, Divider, FileInput, NumberInput, Textarea, TextInput, rem, LoadingOverlay } from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const handleSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x);
            if (x == 0) {
                navigate('/find-jobs');
            }
        }, 1000)
    }
    return (<>
    <div className="w-2/3 mx-auto">
    <LoadingOverlay className="!fixed" visible={submit} zIndex={52} overlayProps={{ radius:'sm', blur: 2}} loaderProps={{ color: 'bright-sun.4', type:'bars'}} />
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
        </div>
        <Divider my='xl' />
        <div className="text-xl font-semibold mb-5">Submit Your Application</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput variant={preview?"unstyled":"default"} readOnly={preview} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Full Name" placeholder="Enter Name" />
                <TextInput variant={preview?"unstyled":"default"} readOnly={preview} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Email" placeholder="Enter Email" />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput variant={preview?"unstyled":"default"} readOnly={preview} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} min={0} max={9999999999} hideControls withAsterisk label="Phone Number" placeholder="Enter Phone Number" clampBehavior="strict" />
                <TextInput variant={preview?"unstyled":"default"} readOnly={preview} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk label="Portfolio Link" placeholder="Enter URL" />
            </div>
            <FileInput variant={preview?"unstyled":"default"} readOnly={preview} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5} />} label="Attach Your Resume" placeholder="Your Resume" leftSectionPointerEvents="none" />
            <Textarea variant={preview?"unstyled":"default"} readOnly={preview} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk autosize minRows={4} placeholder="Type something about yourself..." label="Cover Letter"  />
            {!preview &&
                <Button onClick={handlePreview} color="bright-sun.4" variant="light">Preview</Button>
            }
            {preview &&
                <div className="flex gap-10 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview} color="bright-sun.4" variant="outline">Edit</Button>
                    <Button fullWidth onClick={handleSubmit} color="bright-sun.4" variant="light">Submit</Button>
                </div>
            }
        </div>
    </div>
    <Notification withBorder className={`!border-bright-sun-400 !backdrop-blur-sm !bg-transparent !fixed transition duration-300 ease-in-out ${submit?"translate-y-6":'-translate-y-20'} top-0 left-[37.5%] z-[53]`} withCloseButton={false} icon={<IconCheck style={{ width: rem(20), height: rem(20)}} />} mt='md' color="teal" title="Application Submitted!" >
            Redirecting to Find Jobs in {sec} seconds...
    </Notification>
  </>);
}

export default ApplyJobComp;