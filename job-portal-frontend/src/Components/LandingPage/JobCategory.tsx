import { Carousel } from '@mantine/carousel';
import { jobCategory } from "../../Data/Data";
import IconArrowLeft from '@tabler/icons-react/dist/esm/icons/IconArrowLeft';
import IconArrowRight from '@tabler/icons-react/dist/esm/icons/IconArrowRight';

const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="font-semibold text-center mb-3 text-mine-shaft-100 text-4xl">
                Browse <span className="text-bright-sun-400">Job</span> categories
            </div>
            <div className="text-lg mx-auto mb-10 text-mine-shaft-300 text-center w-1/2">
                Explore diverse job opportunities tailored to your skills. Start your career journey today!
            </div>
            <Carousel slideSize="22%" className='[&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:opacity-0 [&_button]:hover:opacity-75 hover:[&_button]:opacity-100' emblaOptions={{loop: true, dragFree: false, align: 'center'}} nextControlIcon={<IconArrowRight size={20} />} previousControlIcon={<IconArrowLeft size={20}/>}>
                {
                    jobCategory.map(
                        (category, index) => 
                            <Carousel.Slide key={index}>
                                <div className="flex flex-col items-center w-64 border border-bright-sun-400 rounded-xl p-5 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300">
                                    <div className="p-2 bg-bright-sun-300 rounded-full">
                                        <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt={category.name} />
                                    </div>
                                    <div className="text-mine-shaft-100 text-xl font-semibold">
                                        {category.name}
                                    </div>
                                    <div className="text-sm text-mine-shaft-300 text-center">
                                        {category.desc}
                                    </div>
                                    <div className="text-bright-sun-300 text-lg">
                                        {category.jobs}+ new jobs posted
                                    </div>
                                </div>
                            </Carousel.Slide>
                    )
                }
            </Carousel>
        </div>
    )
}

export default JobCategory;