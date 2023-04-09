import './style.css'

export default function Albums(){
    return(
        <div className="bg-[#E1FEFE] w-full h-[100vh]">
            <div className='flex flex-col gap-8 justify-center h-[100vh]'>
                <h1 className="text-[#333333] font-medium text-center text-4xl tracking-[5px]">Around the beauty</h1>
                <h3 className="text-[#BDBDBD] text-center uppercase tracking-[5px] font-semibold text-lg leading-5">Mountain / Costal / <span className="text-[#56CCF2]">Sea </span>/ Others</h3>
                <div className="w-1/2 mx-auto h-[65vh]">
                    <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 w-full h-full">
                        <div className="gridTemplateOne row-span-3"></div>
                        <div className="gridTemplateTwo row-span-1"></div>
                        <div className="gridTemplateThree row-span-2"></div>
                        <div className="gridTemplateFour row-span-3"></div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='p-1 underline tracking-[5px] text-[#4F4F4F] font-medium leading-6'>More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}