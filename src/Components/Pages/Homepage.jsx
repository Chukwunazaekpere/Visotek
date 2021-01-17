import React from "react";
import "../Styles/HomeStyles.css";


import Subpage from "../Container/Subpage";
import ContactUs from "../Pages/ContactUs";

import Navbar from "../Container/Navbar";
import Specialities from "../Container/Specialities";
import Footer from "../Container/Footer";

const Homepage = (props) => {
  return (
    <div className="home-container">
      <section className="navbar">
        <Navbar />
      </section>

      <section className="contact-us">
        <ContactUs />
      </section>

      <section className="home-content">
        <h3 id="welcome-text" className="">
          Welcome to Visotek
        </h3>
      </section>
      
      <section className="contents">
          <Specialities />
      </section>

      <section className="arc1">
        <h2 id="Contact us:">Contact us:</h2>
      </section>

      <section className="subpage">
            <Subpage />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
