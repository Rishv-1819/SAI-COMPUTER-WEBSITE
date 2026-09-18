import React from "react";
import "./WhyChoose.css";
import whyChooseImg from "../../../../../assets/newsaiwebsiteimage/why-us2.jpeg";
import whyChooseImg3 from "../../../../../assets/newsaiwebsiteimage/why-us3.jpg";
import whyChooseImg1 from "../../../../../assets/newsaiwebsiteimage/why-us1.jpg";

const WhyChoose = () => {
  return (
    <section className="whyChoose">
      <div className="whyChoose-container">

        {/* Left Content */}

        <div className="whyChoose-content">

          <h2>Why Choose Sai Computers Limited (SCL)?</h2>

          <div className="why-item">
            <h3>
              <span>•</span> Extensive Experience with State Utilities and the
              Public Sector:
            </h3>

            <p>
              With over 40 years of experience in the power sector, SCL possesses an in-depth understanding of the unique challenges and opportunities facing state utilities and public sector organizations. This long-standing presence has allowed us to build strong relationships and a deep knowledge base, enabling us to deliver tailored solutions that align with the specific needs and regulatory frameworks of these critical entities.
            </p>
          </div>

          <div className="why-item">
            <h3>
              <span>•</span> Highly Skilled Team for Handholding Support &
              Implementation:
            </h3>

            <p>
              SCL prides itself on providing comprehensive support throughout the entire project lifecycle. Our highly skilled team of engineers, data scientists, and field executives offers dedicated "handholding" support, ensuring seamless implementation and knowledge transfer. We work closely with your team every step of the way, providing training, troubleshooting, and ongoing assistance to maximize the value of our solutions.

            </p>
          </div>

          <div className="why-item">
            <h3>
              <span>•</span> In-depth Client Discussions to Understand Their
              Challenges:
            </h3>

            <p>
              We believe that effective solutions begin with a thorough understanding of the problem. That's why SCL prioritizes in-depth client discussions to gain a comprehensive understanding of your specific challenges, pain points, and goals. By actively listening and engaging with your team, we ensure that our solutions are precisely tailored to address your unique needs.
            </p>
          </div>

          <div className="why-item">
            <h3>
              <span>•</span> Thorough Diagnosis Leading to Innovative Solutions with Defined Methodologies :
            </h3>

            <p>
              SCL employs a rigorous diagnostic approach to identify the root causes of your challenges. Our experienced consultants utilize proven methodologies and industry best practices to analyse your existing systems, processes, and data. This thorough diagnosis enables us to develop innovative solutions that are not only effective but also sustainable and scalable.
            </p>
          </div>

          <div className="why-item">
            <h3>
              <span>•</span> Effective Approach in Diverse Areas:
            </h3>

            <p>
              SCL has a proven track record of success in implementing solutions across a wide range of geographical and demographic environments. Whether you operate in hilly terrain, border regions, rural communities, or densely populated urban centers, our team has the expertise and adaptability to deliver results. We understand the unique considerations of each environment and tailor our approach accordingly.
            </p>
          </div>

          <div className="why-item">
            <h3>
              <span>•</span> Systematic Processes Using SOPs and Web/App Standardization:
            </h3>

            <p>
              SCL is committed to delivering consistent, high-quality services through the use of systematic processes and standardized operating procedures (SOPs). We leverage web and app-based platforms to streamline workflows, enhance communication, and ensure transparency throughout the project lifecycle. This standardized approach minimizes errors, improves efficiency, and maximizes the value of our solutions
            </p>
          </div>
             
            <div className="why-item">
            <h3>
              <span>•</span>Strong In-House Technical Team Supporting Field Automation:
            </h3>

            <p>
              SCL boasts a strong in-house technical team that provides comprehensive support for field automation initiatives. Our team possesses deep expertise in a wide range of technologies, including GIS mapping, data analytics, and mobile computing. We provide the technical expertise and support you need to successfully deploy and maintain automated field solutions.
            </p>
          </div>

          <div className="why-item">
            <h3>
              <span>•</span>Commitment to Continuous Training and Latest Technological Solutions:
            </h3>

            <p>
              In a rapidly evolving technological landscape, SCL remains committed to continuous training and the adoption of the latest solutions. We invest in ongoing professional development for our team, ensuring that they are equipped with the knowledge and skills to deliver cutting-edge solutions that leverage the latest advancements in the power sector
            </p>
          </div>


        </div>

        {/* Right Image */}

        <div className="whyChoose-image">
          <img src={whyChooseImg} alt="Sai Computers Exhibition" />
          <img src={whyChooseImg3} alt="Sai Computers Exhibition" />
          <img src={whyChooseImg1} alt="Sai Computers Exhibition" />
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;