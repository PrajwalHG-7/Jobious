import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";
import { errorNotification, successNotification } from "../../Services/NotificationService";

const form = {
    email: "",
    password: "",
}

const Login = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState<{ [key: string]: string }>(form)
    const [opened, { open, close }] = useDisclosure(false);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form)
    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {}
        for (let key in data) {
            newFormError[key] = loginValidation(key, data[key])
            if (newFormError[key]) valid = false
        }
        setFormError(newFormError)
        if(valid === true){
            setLoading(true)
            loginUser(data)
                .then((res) => {
                    console.log(res)
                    successNotification('Login Successful', 'Redirecting to Home Page...')
                    setTimeout(() =>{
                        setLoading(false)
                        dispatch(setUser(res))
                        navigate("/")
                    }, 3000)
                })
                .catch((err) => {
                    setLoading(false)
                    console.log(err.response.data)
                    errorNotification('Login Failed', err.response.data.errorMessage)
                })

        }
    }
    const handleChange = (event: any) => {
        let name = event.target.name, value = event.target.value
        setFormError({ ...formError, [name]:"" })
        setData({ ...data, [name]: value })
    }
    return (
        <>
        <LoadingOverlay
            visible={loading}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">
                Create Account
            </div>
            <TextInput name="email" error={formError.email} value={data.email} onChange={handleChange} withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder="Your email" />
            <PasswordInput name="password" error={formError.password} value={data.password} onChange={handleChange} label="Password" leftSection={<IconLock size={18} stroke={1.5} />} withAsterisk placeholder="Enter Password" />
            <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Login</Button>
            <div className="mx-auto">Don't have an account? <span className="text-bright-sun-400 cursor-pointer hover:underline" onClick={() => {navigate('/signup'); setData(form); setFormError(form)}}>Sign Up</span></div>
            <div onClick={open} className="mx-auto text-xs text-bright-sun-400 hover:underline cursor-pointer text-center">Forget Password?</div>
        </div>
        <ResetPassword opened={opened} onClose={close} />
        </>
    )
}

export default Login;