import { Button, TextInput } from "@mantine/core";
import exp from "constants"

const Subscribe = () => {
    return (
        <div className="mt-20 flex items-center justify-around bg-mine-shaft-900 mx-20 py-3 rounded-xl gap-5">
            <div className="font-semibold text-center w-2/5 text-mine-shaft-100 text-4xl">
                Never want to miss any <span className="text-bright-sun-400">Job News?</span>
            </div>
            <div className="flex gap-4 bg-mine-shaft-700 items-center px-3 rounded-xl py-2">
                <TextInput className="[&_input]:text-mine-shaft-100 font-semibold" variant="unstyled" size="xl" placeholder="your@email.com" />
                <Button className="!rounded-lg" color="bright-sun.4" size="lg" variant="filled">Subscribe</Button>
            </div>
        </div>
    )
}

export default Subscribe;