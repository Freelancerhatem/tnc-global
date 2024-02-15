
import useAos from '../../Hooks/useAos/useAos';
import img from '../../assets/image/bgimage.jpg'
const Banner = () => {
    useAos();
    return (
        <div style={{backgroundImage:`url(${img})`}} className=" relative top-20 h-[calc(100vh-74px)] bg-fixed bg-cover bg-center bg-no-repeat  ">
           <div  data-aos-duration='1000' className='absolute w-full flex items-center justify-center h-full bg-gradient-to-t from-black to-transparent'> 
            <div className="flex flex-col justify-center items-center  text-white  text-center  ">
                <h1 className='text-5xl text-center bg-[#0d2e5acd] rounded  px-4 py-2 font-extrabold'>Welcome to our website!</h1>
                <p className='text-xl font-semibold px-10 w-1/2'>Ready to take the next step? Browse our website and discover the endless possibilities. If you have any questions or need assistance, feel free to contact our friendly team.</p>
            </div>
            
            </div>
        </div>
    );
};

export default Banner;