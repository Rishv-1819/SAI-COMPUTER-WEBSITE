import React from "react";
import style from "./AboutCompany.module.css";
import { Link } from "react-router-dom";

const AboutCompany = () => {
    return (
        <div className={style["about-container"]}>

            {/* Heading */}
            <section className={style["hero-section"]}>
                <h1>
                    40 Years of innovation,
                    <br />
                    illuminating the energy
                    <br />
                    sector.
                </h1>
            </section>

            {/* Content */}
            <section className={style["content-section"]}>

                <p>
                    Sai Computers Ltd. (SCL) is a consulting firm with over 40 years of experience, 
                    specializing in providing business applications and consultancy to the power 
                    sector. Incorporated on July 18, 1984, by a Technical Entrepreneur from I.I.T. 
                    Kanpur, SCL's mission is to deliver computer technology to businesses and 
                    industries, offering consultancy, energy accounting, and audit services. 
                    The company develops new methods and equipment for energy conservation, 
                    along with software systems tailored for the power sector, including spot 
                    billing, online billing, MIS, meter reading, bill generation, and bill 
                    distribution via handheld devices.
                </p>

                <p>
                    SCL distinguishes itself through a commitment to innovation, reliability, 
                    customer-centricity, and excellence, leveraging data-driven approaches to 
                    empower energy companies, utilities, and policymakers. The company has a team 
                    of industry experts, data scientists, engineers, and field executives who 
                    develop and deploy innovative solutions to help clients navigate the modern 
                    energy landscape.
                </p>

                <p>
                    SCL has developed its own technology for Survey, GIS Mapping, and Indexing and 
                    is well-equipped for Mapping & Documentation of Transmission & Distribution 
                    Network from 33 KV to LT system on base maps linked to GIS. Sai Computers was 
                    empanelled as GSP in 2009 and as MDASP in 2010 in the Restructured Accelerated 
                    Power Development and Reforms Programme (R-APDRP). The company provides automated 
                    systems for sustained collection of accurate baseline data and information upgrades 
                    for energy accounting.
                </p>

                <p>
                    SCL also manufactures a wide range of transformers ranging from power and distribution 
                    transformers, servo voltage regulators, power conditioning transformers to a wide 
                    range of specialized transformers, automatic power factor controllers. The company's 
                    resource planning software streamlines processes such as enquiry generation, order 
                    booking, product planning, parts purchase, inventories management, orders tracking, 
                    and sales reports.
                </p>

                <p>
                    The company's target audience includes government and semi-government companies dealing 
                    in power and utilities. SCL's positioning statements include "Innovative Energy Solutions 
                    for a Sustainable Future," "Global Provider of Energy Management Services," "Expertise 
                    in Energy Management and Power Conditioning," "Powering Your Future with Sustainable Energy,
                    " and "Innovative Energy Solutions for a Brighter Tomorrow"
                </p>

            </section>

            {/* WHY US */}
            <section className={style["why-us"]}>

                <span className={style["badge"]}>WHY US</span>

                <h2>
                    Sai Computers Limited (SCL) is a trusted IT solutions and automation provider for 
                    the power sector, specializing in state utilities and public sector operations. 
                    Our highly skilled team ensures seamless implementation and support, offering
                     handholding assistance to maximize efficiency.
                </h2>

                <Link to="/aboutmore" className={style["learn-more"]}>
                    Learn More
                </Link>

            </section>

        </div>
    );
};

export default AboutCompany;