import './style.css';

export default function AboutMe(){
    return(
        <div className="w-full h-[100vh] bg-[#E1FEFE] flex justify-center items-center">
            <div className='w-[80%] h-[65vh]'>
                <div className="grid grid-rows-1 w-full grid-flow-col auto-cols-max">
                    <div className="imageAboutMe col-span-1 row-span-1 h-[486px] w-[445px]"></div>
                    <div className='col-span-2 row-span-1 w-[770px] bg-white h-[486px]'>
                        <div className='pl-6 flex flex-col h-[486px] w-full gap-7 items-start justify-center'>
                            <span className='text-[#828282] text-lg font-medium tracking-[5px] leading-5'>Photographer</span>
                            <h1 className='text-[#333333] text-4xl font-medium tracking-[5px] leading-5'>Anna Jennifer </h1>
                            <p className='w-[80%] text-justify text-[#828282] tracking-[5px] leading-5 font-normal'>Consectetur elit consectetur culpa laborum commodo cillum duis voluptate aliquip. 
                                Cillumm pariatur id duis cupidatat non eu duis voluptate commodo ut. 
                                Do cupidatat ipsum ex velit cillum consectetur cupidatat amet. 
                                Veniam occaecat est anim sint exercitation adipisicing. 
                                Sunt occaecat commodo quis commodo culpa.
                            </p>
                            <button className=' border-[#333333] transition-all font-semibold border-2 p-3 text-[#333333] hover:bg-[#333333] hover:text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// width: 445px;
// height: 602px;