import React, {useEffect} from "react";
import './footer.css'
import video2 from '../../assets/video.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({duration : 2000})
    },[])

    return(
        <section className="footer">
            <div className="videoDiv">
                    <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUGH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND<FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                               <MdOutlineTravelExplore className="icon"  />
                               MyTravel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        "Thank you for exploring the world with 'My Travel.' We're your trusted companion for all your travel adventures, providing you with expert insights, destination guides, and insider tips. Our goal is to make your travel dreams a reality, whether you're embarking on a solo journey, a romantic escape, or a family vacation. Stay connected with 'My Travel' through our social channels and newsletter to receive the latest travel inspiration, exclusive offers, and travel updates. Let 'My Travel' be your gateway to a world of exploration and discovery. Bon voyage!"
                        </div>

                        <div data-aos="fade-up" className="footerSocials ">
                            <AiOutlineTwitter  className="icon"/>
                            <AiOutlineYoutube  className="icon"/>
                            <AiOutlineInstagram  className="icon"/>
                            <FaTripadvisor  className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div data-aos="fade-out" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Payment
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> TripAdvisor
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Trichy
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Coimbatore
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Kodaikanal
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Madurai
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> Ooty
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv">
                        <small>BEST TRAVEL WEBSITE THEME..</small>
                        <small> COPYRIGHTS RESERVED - MYTRAVEL 2023</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer