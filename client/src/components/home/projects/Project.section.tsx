


type ProjectData = {
    image1: string;
    image2: string;
}

type Props = {
    project: ProjectData,
}

const Project: React.FC<Props> = ({ project }) => {
    return (
        <>
            <div className="h-full lg:w-1/2 group relative rounded-none hover:rounded-[50px] cursor-pointer transition-all duration-200 ease-in overflow-hidden">
                <img className="h-full w-full object-cover" src={project.image1} alt="" />
                <div className=" transition-opacity opacity-0 group-hover:opacity-100 bg-black/10 absolute top-0 flex left-0 items-center justify-center h-full w-full">
                    <h2 className="text-[4vw] font-[font-1] pt-3 leading-16 border-3 rounded-full px-7 uppercase  ">View project</h2>
                </div>
             </div>
             <div className="h-full lg:w-1/2 group relative hover:rounded-[50px] cursor-pointer transition-all duration-200 ease-in overflow-hidden">
                <img className="h-full w-full object-cover" src={project.image2} alt="" />
                <div className=" transition-opacity opacity-0 group-hover:opacity-100 bg-black/20 absolute top-0 flex left-0 items-center justify-center h-full w-full">
                    <h2 className="text-[4vw] font-[font-1] pt-3 leading-16 border-3 rounded-full px-7 uppercase  ">View project</h2>
                </div>
            </div>
        </>
    )
}

export default Project
