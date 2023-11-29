import React, {useEffect} from "react";
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img1 from '../../assets/img(1).jpg'
import img2 from '../../assets/img(2).jpg'
import img3 from '../../assets/img(3).jpg'
import img4 from '../../assets/img(4).jpg'
import img5 from '../../assets/img(5).jpg'
import img6 from '../../assets/img(6).jpg'
import img7 from '../../assets/img(7).jpg'
import img8 from '../../assets/img(8).jpg'
import img9 from '../../assets/img(9).jpg'
import img10 from '../../assets/img(10).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgSrc :  img1,
        destTitle: 'Thanjavur',
        location : 'Tamilnadu',
        grade : 'Cultural relax',
        fees : 'Rs.2499',
        description : 'Thanjavur, a gem of South India, boasts a rich tapestry of cultural heritage and captivating tourist attractions. The magnificent Brihadeeswarar Temple, a UNESCO World Heritage site, stands as a testament to Chola architecture. Explore the Thanjavur Palace for its intricate art and history, and visit the Saraswathi Mahal Library to delve into ancient manuscripts.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Chennai',
        location: 'Tamil Nadu',
        grade: 'Metropolitan Delight',
        fees: 'Rs.3499',
        description: "Chennai, the vibrant capital of Tamil Nadu, offers a mix of modernity and tradition. Visit Marina Beach, the second-longest urban beach in the world, and explore historic sites like Fort St. George. Don't miss the Kapaleeshwarar Temple for its architectural beauty and authentic South Indian cuisine."
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Madurai',
        location: 'Tamil Nadu',
        grade: 'Spiritual Oasis',
        fees: 'Rs.6999',
        description: 'Madurai is a spiritual hub, known for the stunning Meenakshi Amman Temple. Take a stroll in the bustling streets of the city and savor the flavors of Chettinad cuisine. The Thirumalai Nayak Palace and Gandhi Memorial Museum are also worth a visit.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Kodaikanal',
        location: 'Tamil Nadu',
        grade: 'Hill Station Escape',
        fees: 'Rs.9999',
        description: 'Kodaikanal, the "Princess of Hill Stations," offers a cool retreat in the Western Ghats. Enjoy the serene Kodaikanal Lake, hike to Pillar Rocks, and visit the Bryant Park for its botanical beauty. The Bear Shola Falls is a refreshing natural attraction.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Ooty',
        location: 'Tamil Nadu',
        grade: 'Hill Station Tranquility',
        fees: 'Rs.5499',
        description: 'Ooty, a picturesque hill station, is known for its tea gardens and the Nilgiri Mountain Railway. Explore the beautiful Botanical Gardens, enjoy a boat ride in Ooty Lake, and take in the panoramic views from Doddabetta Peak.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Rameswaram',
        location: 'Tamil Nadu',
        grade: 'Spiritual Retreat',
        fees: 'Rs.14999',
        description: 'Rameswaram is a sacred pilgrimage site for Hindus, famous for the Ramanathaswamy Temple. Take a dip in the holy waters of Agni Theertham, visit the Dhanushkodi Ghost Town, and witness the breathtaking Pamban Bridge.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Coimbatore',
        location: 'Tamil Nadu',
        grade: 'Industrial City',
        fees: 'Rs.19999',
        description: 'Coimbatore is an industrial hub known for its textile and engineering industries. Visit the serene Marudamalai Temple, explore the ancient Anamalai Wildlife Sanctuary, and enjoy the flavors of South Indian cuisine.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Kanyakumari',
        location: 'Tamil Nadu',
        grade: 'Southern Tip Marvel',
        fees: 'Rs.34999',
        description: 'Kanyakumari is the southernmost tip of India, known for its unique sunrise and sunset views. Visit the Vivekananda Rock Memorial, Thiruvalluvar Statue, and take in the panoramic beauty of the confluence of the Arabian Sea, the Bay of Bengal, and the Indian Ocean.'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Mahabalipuram',
        location: 'Tamil Nadu',
        grade: 'Archaeological Marvel',
        fees: 'Rs.5999',
        description: "Mahabalipuram, a UNESCO World Heritage site, is renowned for its ancient rock-cut temples and sculptures. Explore the Shore Temple, Arjuna's Penance, and the Five Rathas. The coastal town offers a glimpse into India's rich history."
    },
    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Tiruchirappalli',
        location: 'Tamil Nadu',
        grade: 'Historical Significance',
        fees: 'Rs.7899',
        description: 'Tiruchirappalli, or Trichy, is known for the iconic Rock Fort Temple, perched atop a rock formation. Visit the Sri Ranganathaswamy Temple, stroll along the Cauvery River, and explore the vibrant markets for local handicrafts.'
    }
]


const Main = () => {

    useEffect(() => {
        Aos.init({duration : 2000})
    },[])


    return(
       <section className="main container section"> 
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* We are going to use higher order aray method(map) */}
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) =>{
                        return(
                            <div key={id}
                            data-aos="fade-up" 
                            className="singleDestination">
                                {/* it will return a single id */}

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
       </section>
    )
}

export default Main