import { useState } from 'react'
import './styles.css'
import logo from '../Image/LogoHeader.svg'
import googlePlay from '../Image/googlePlay.svg'
import playStore from '../Image/appstore.svg'
import secondSection from '../Image/second.png'
import buttonIcon from '../Image/ic_play.svg'
import iphone from '../Image/iphone.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
    const [activePoint, setActivePoint] = useState(1);
    const menu = ['About', 'how it works', "blog", "download the app"]
    const list = ['Wololo is a unique way to obtain exclusive deals by incentivising users to share with friends and the community.', 'If 2 people commit to a deal, they receive a percentage off.', 'If additional people commit to the same deal, the discount increases.', 'As the group grows, the higher your reward becomes.']
    var settings = {
        // dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,


    };



    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActivePoint(prev => prev + 1)
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //     if (activePoint === 4) setActivePoint(0)
    // }, [activePoint]);

    return <div className="container-div ">
        <div className='banner-img-bg'>

            <div className="navbar">
                <div className='logo-header'><img src={logo} alt='logo' /></div>
                <div className='menu-wrap'><ul>
                    {menu.map((item, index) => {
                        return <li className={`${index === 3 ? ` 2xl:w-[288px] 2xl:h-[61px] 2xl:text-[18px] font-['ProximaNovaMedium'] bg-white text-[#FF852A] rounded-[12px] uppercase px-4 py-2 flex justify-center items-center tracking-[1.67px]` : `menu-list-items text-white tracking-[2.05px]`}`}>{item}</li>
                    })}
                </ul></div>
            </div>

            <div className='slider-section '>
                <div className='left-part-slider'>
                    <Slider {...settings} dotsClass={`dotsStyle`}>
                        <div>
                            <h1 className='heading-main'>DISCOVER! SHARE! SAVE!</h1>
                            <p className='para'>
                                Wololo is a destination to make users’ day-to-day life more valuable and rewarding; which brings in additional<br/> revenue & cash flow to the brands you love.
                            </p>
                        </div>
                        <div> <h1 className='heading-main'>DISCOVER! SHARE! SAVE!</h1>
                            <p className='para'>
                                Wololo is a destination to make users’ day-to-day life more valuable and rewarding; which brings in additional revenue<br/> & cash flow to the brands you love.
                            </p></div>
                        <div> <h1 className='heading-main'>DISCOVER! SHARE! SAVE!</h1>
                            <p className='para'>
                                Wololo is a destination to make users’ day-to-day life more valuable and rewarding; which brings in additional<br/> revenue & cash flow to the brands you love.
                            </p></div>
                    </Slider>
                    <div className='slider-buttons'>
                        <img src={googlePlay} className='gplay' alt='gplay' />
                        <img src={playStore} className='appstore' alt='appstore' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col absolute right-[110px] top-[388px] 2xl:top-[430px] items-center'>
                <div className='flex mr-6 mb-2'>
                    <p className='text-white flex mr-2'>01</p>
                <div className='h-[36px] border-r-2 border-white'></div>
                </div>
                    <div className='w-2 h-2 rounded-[50%] my-2 flex bg-white cursor-pointer mb-2'></div>
                <div className='w-2 h-2 rounded-[50%] my-2 flex bg-white cursor-pointer'></div>
                <div className='w-2 h-2 rounded-[50%] my-2 flex bg-white cursor-pointer'></div>
            </div>
        </div>


        <div className='second-section'>
            <div className='second-left-part ml-2 bg-transparent'>
                <img src={secondSection} className='bg-transparent' alt='bg' />
            </div>
            <div className='second-right-part'>
                <h1>Get The <span className='underline decoration-[#ff862a8e]'> Best Deals </span>Together!</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <button><img src={buttonIcon} className='pr-2' alt='buttonicon' />HOW DOES IT WORK?</button>
            </div>

        </div>

        <div className='flex w-full'>
            <div className='how-work-wrap'>
                <div className='how-work-content'>
                    <div className='flex flex-col 2xl:pl-[225px] relative'>

                        <h1 className='content-heading'>
                            How It Works?
                        </h1>
                        {list.map((item, index) => {
                            return <p className={`content-para ${index === activePoint ? `w-[744px] pr-[300px] text-black bg-white relative z-[4]` : `bg-transparent text-white pr-12 w-[474px]`}`}>{item}</p>
                        })}
                    </div>
                </div>
                <div className='iphone 2xl:absolute 2xl:right-[468px] z-10'><img src={iphone} alt='iphone' /></div>
                <div className='animation-third'>
                    {[1, 2, 3, 4].map((item, index) => {
                        return <>
                            <div className={`circle ${index === activePoint ? `border-solid bg-[#FF852A]` : `bg-transparent`}`} onClick={() => setActivePoint(index)}></div>
                            <div className='line'></div>
                        </>
                    })}


                </div>
            </div>
        </div>


    </div>
}