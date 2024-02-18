
import useAos from '../../Hooks/useAos/useAos';
import img from '../../assets/image/bgimage.jpg'
const Banner = () => {
    useAos();
    return (
        <div style={{backgroundImage:`url(${img})`}} className=" relative top-20 h-[calc(100vh-74px)]  bg-cover bg-center bg-no-repeat  ">
           <div   className='absolute w-full flex items-center justify-center h-full bg-gradient-to-t from-black to-transparent'> 
            <div className="flex flex-col justify-center items-center  text-white  text-center  ">
                <h1 data-aos-duration='700' data-aos='fade-up' className='md:text-5xl text-center bg-[#0d2e5acd] rounded  px-4 py-2 font-extrabold'>Welcome to our website!</h1>
                <p data-aos-duration='900' data-aos='fade-up' className='md:text-xl text-sm md:font-semibold px-10 md:w-1/2'>Exploring for top-tier expertise? Delve into the capabilities of our proficient team by examining our comprehensive user profiles.</p>
            </div>
            
            </div>
        </div>
    );
};

export default Banner;