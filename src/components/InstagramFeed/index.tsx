import './style.css';

export default function InstagramFeed(){
    return(
        <div className='instagramFeed w-full h-[100vh] flex flex-col justify-center items-center'>
            <div className='w-4/5 h-[60vh] mx-auto flex flex-col gap-6'>
                <h1 className='text-[#333333] text-xl lg:text-4xl font-medium tracking-[5px] leading-5 text-center'>Instagram feed</h1>
                <div className='flex flex-row h-full w-full gap-4 justify-center items-center'>
                    <div className='imagefeedone w-64 h-64 hover:contrast-50 rounded-sm'></div>
                    <div className='imagefeedtwo w-64 h-64 hover:contrast-50 rounded-sm'></div>
                    <div className='imagefeedthree w-64 h-64 hover:contrast-50 rounded-sm'></div>
                    <div className='imagefeedfour w-64 h-64 hover:contrast-50 rounded-sm'></div>
                </div>
            </div>
        </div>
    )
}