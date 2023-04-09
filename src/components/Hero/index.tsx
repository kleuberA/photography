import './style.css';

export default function Hero(){
    return(
        <div className="hero w-full h-[100vh]">
            <div className='flex justify-center flex-col h-full gap-36'>
                <h1 className='font-medium text-5xl text-[#333333] text-center'>Mount & Coast</h1>
                <div className=''>
                    <ul className='flex w-[50%] justify-around text-center mx-auto text-lg font-normal text-[#333333] leading-5 uppercase'>
                        <li>Mountain</li>
                        <li>Coastal</li>
                        <li>Sea</li>
                        <li>My Life</li>
                    </ul>
                </div>
                <button className='w-[300px] border-[#333333] transition-all border-2 p-3 text-[#333333] mx-auto hover:bg-[#333333] hover:text-white'>EXPLORE MY PHOTOS</button>
            </div>
        </div>
    )
}