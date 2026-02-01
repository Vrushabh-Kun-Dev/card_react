import image from '../../public/Photo.png'
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaHeart   } from "react-icons/fa";
import Button from './Button';
import { AiOutlineLike } from "react-icons/ai";




const Card = () => {
    return (
        <>
            <div className="w-[20rem] h-120  rounded-xl overflow-hidden shadow-2xl">
                <div className=" relative w-full h-40 bg-blue-400">
                    <img className='absolute h-full aspect-square object-cover rounded-full object-top translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white' src={image} alt="Error" />
                </div>

                <div className='flex flex-col items-center pt-12 '>
                    <h1 className='text-2xl'>Vrushabh Kunturwar</h1>
                    <p className='text-xl'>React.js Developer</p>
                    <div className='flex gap-4 pt-4 text-2xl'>
                        <FaYoutube />
                        <FaTwitter />
                        <FaInstagram />
                        <FaFacebook />
                    </div>
                    <div className='flex gap-6 pt-8'>
                    <Button text="Subscribe"/>
                    <Button text="Massage"/>

                    </div>
                    <div className='flex gap-4 pt-6'>
                        <div className='flex items-center text-xl gap-1'>
                            <FaHeart />
                            <span>60.4k</span>
                        </div>
                        <div className='flex items-center text-xl gap-1'>
                            <AiOutlineLike />

                            <span>60.4k</span>
                        </div>
                        <div className='flex items-center text-xl gap-1'>
                            <FaHeart />
                            <span>60.4k</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;