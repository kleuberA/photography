import './style.css';
import ImageAboutMe from '../../assets/imageaboutme.jpeg';

export default function AboutMe(){
    return(
        <div className="bg-[#E1FEFE] w-full h-[100vh] flex justify-center items-center">  
            <div className="m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="mb-12 space-y-2 text-center"></div>
                <div className="grid gap-12 lg:grid-cols-2 lg:grid-rows-2">
                    <div className="p-1 col-span-2 h-96 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                        <img src={ImageAboutMe} alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
                        <div className="sm:w-7/12 pl-0 p-5">
                            <div className="space-y-2">
                                <div className="space-y-4">
                                    <h4 className="text-lg text-[#828282] font-medium tracking-[5px] leading-5">Photographer</h4>
                                    <h1 className="text-xl text-[#333333] font-medium tracking-[5px] leading-5">Anna Jennifer</h1>
                                    <p className="text-gray-600">
                                        Consectetur elit consectetur culpa laborum commodo cillum duis voluptate aliquip. 
                                        Cillumm pariatur id duis cupidatat non eu duis voluptate commodo ut. 
                                        Do cupidatat ipsum ex velit cillum consectetur cupidatat amet. 
                                        Veniam occaecat est anim sint exercitation adipisicing. 
                                        Sunt occaecat commodo quis commodo culpa.
                                    </p>
                                </div>
                                <button className="block w-max border-[#333333] transition-all font-semibold border-2 p-3 text-[#333333] hover:bg-[#333333] hover:text-white">Read more</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}