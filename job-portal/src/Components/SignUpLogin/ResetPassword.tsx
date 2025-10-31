import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { changePass, sendOtp, verifyOtp } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props:any) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passErr, setPassErr] = useState("")
    const [otpSent, setOtpSent] = useState(false)
    const [otpSending, setOtpSending] = useState(false)
    const [verified, setVerified] = useState(false)
    const [resendLoader, setResendLoader] = useState(false)
    const [seconds, setSeconds] = useState(60)

    const interval = useInterval(() => {
            if (seconds === 0) {
                setResendLoader(false)
                setSeconds(60)
                interval.stop()
            }
            else
                setSeconds((s) => s - 1)
        }, 1000)

    const handleSendOtp = () => {
        setOtpSending(true)
        sendOtp(email)
        .then((res) => {
            console.log(res)
            successNotification("OTP Sent", "Enter OTP to reset password")
            setOtpSent(true)
            setOtpSending(false)
            setResendLoader(true)
            interval.start()
        })
        .catch((err) => {
            console.log(err)
            setOtpSending(false)
            errorNotification("OTP send failed", err.data)
        })
    }

    const handleVerifyOtp = (otp:string) => {
        verifyOtp(email, otp)
        .then((res) => {
            console.log(res)
            successNotification("OTP Verified", "Enter new password")
            setVerified(true)
        })
        .catch((err) => {
            console.log(err)
            errorNotification("OTP Verification failed", err.data)
        })
    }

    const resendOtp = () => {
        if(!resendLoader)
            handleSendOtp()
        else
            return
    }

    const changeEmail = () => {
        setOtpSent(false)
        setResendLoader(false)
        setSeconds(60)
        setVerified(false)
        interval.stop()
    }

    const handleResetPassword = () => {
        changePass(email, password)
        .then((res) => {
            console.log(res)
            successNotification("Password Changed", "Login with new password")
            props.onClose()
        })
        .catch((err) => {
            console.log(err)
            errorNotification("Password reset failed", err.data)
        })
    }

    const handleClose = () => {
        setEmail("")
        setPassword("")
        setPassErr("")
        setOtpSent(false)
        setOtpSending(false)
        setVerified(false)
        setResendLoader(false)
        setSeconds(60)
        interval.stop()
        props.onClose()
    }

    return (
        <Modal opened={props.opened} onClose={handleClose} title="Reset Password">
            <div className="flex flex-col gap-6">
                <TextInput name="email" value={email} onChange={(e) => setEmail(e.target.value)} withAsterisk leftSection={<IconAt size={16} />} label="Email" size="md" rightSectionWidth="xl" placeholder="Your email" rightSection={<Button loading={otpSending && !otpSent} size="xs" disabled={otpSent || email===""} className="mr-1" onClick={handleSendOtp} variant="filled">Send OTP</Button>}/>
                {otpSent && <PinInput onComplete={handleVerifyOtp} length={6} size="md" gap="lg" className="mx-auto" type="number" />}
                {otpSent && !verified &&
                    <div className="flex gap-2">
                        <Button fullWidth color="bright-sun.4" loading={otpSending} size="xs" className="mr-1" onClick={resendOtp} variant="light">{resendLoader?seconds:"Resend"}</Button>
                        <Button fullWidth size="xs" className="mr-1" onClick={changeEmail} variant="filled">Change Email</Button>
                    </div>
                }
                {verified &&
                    <PasswordInput name="password" error={passErr} value={password} onChange={(e) => {setPassword(e.target.value); setPassErr(signupValidation("password", e.target.value))}} label="New Password" leftSection={<IconLock size={18} stroke={1.5} />} withAsterisk placeholder="Enter New Password" />
                }

                {verified &&
                    <Button fullWidth loading={otpSending} size="xs" className="mr-1" onClick={handleResetPassword} variant="filled">Change Password</Button>
                }
            </div>
        </Modal>
    )
}
export default ResetPassword