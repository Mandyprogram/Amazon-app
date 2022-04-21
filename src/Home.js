import React from 'react';
import "./Home.css";
import Product from "./Product.js";
import Film from "./Film.js"

function Home() {
    return (
        <div className='home'>
            <div className='homeContainer'>
                <img className='primeBanner' src='https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png' alt='Prime Banner' />
                <div className='homerow'>
                   <Product title="The Lean Startup" price=" 249.0" image='https://388760.smushcdn.com/1732391/wp-content/uploads/2013/01/The-Lean-Startup-Ed-Capaldi-681x1024.jpg?lossy=0&strip=1&webp=1' rating={4} />
                   <Product title="PUMA Men Intersteller V2 IDP Blue Running Shoes" price="2,227.0" image='https://m.media-amazon.com/images/I/613KvsYe8-L._UY695_.jpg' rating={4} />
                </div>
                <div className='homerow'>
                   <Product title='Maxima Max Pro X4 Smartwatch with SpO2,Upto 15 Day Battery life,Full-touch Ultra Bright 320*320 display' image='https://m.media-amazon.com/images/I/61yP79pHj-S._UX679_.jpg' price='3,299.00' rating={3}/>
                   <Product title='Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)' image='https://m.media-amazon.com/images/I/61EXU8BuGZL._SX569_.jpg' price='2,449.00' rating={5} />
                   <Product title='2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)' image='https://m.media-amazon.com/images/I/61JamrBdMSL._SX679_.jpg' price='30,999' rating={5} />
                </div>
                <div className='homerow'>
                    <Film title='Pushpa: The Rise' image='https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/844421138928023075289343bd51861453acdc82a415968af5b434b1065d642e._RI_V_TTW_QL40_AC_SL1584_.jpg'  />        
                </div>
            </div>
        </div>
    );
}

export default Home;