import React from 'react';
import "../Styles/Specialities.css"


function Specialities(props) {
    return (
        <div className="content-container">
            <h2>What we do at Visotek:</h2>
            <h4>Visotek is adept and committed in providing engineering services and manpower.</h4>
            <section className="sp-table">
                <h4 className="content-title">Architecture</h4>
                    <ul>
                        <li>Architectural drawings</li>
                        <li>Stamp architectural drawings</li>
                        <li>Stamp architectural drawings</li>
                    </ul>    

                <h4 className="content-title">Construction</h4>
                    <ul>
                        <li>Architectural drawings</li>
                        <li>Stamp architectural drawings</li>
                        <li>Stamp architectural drawings</li>
                    </ul>                      

                <h4 className="content-title">3D - Design</h4>
                    <ul>
                        <li>Architectural drawings</li>
                        <li>Stamp architectural drawings</li>
                        <li>Stamp architectural drawings</li>
                    </ul>                       
            </section>
        </div>
    );
}

export default Specialities;