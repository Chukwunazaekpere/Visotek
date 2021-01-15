import React from "react";
import Team from "../Container/Team";
import Testimonials from "../Container/Testimonials";
import "../Styles/SubpageStyles.css";

import Portfolio from "../Container/Portfolio";


const Subpage = () => {
    return(
        <div className="subpage-container">
            
            <section className="portfolio">
                <Portfolio />            
            </section>

            <section className="testimonials">
                <Testimonials />
            </section>

            <section className="team">
                <Team />
            </section>
        </div>
    )
}

export default Subpage;