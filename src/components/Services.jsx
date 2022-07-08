import React from "react";
import ServiceCard from "./ServiceCard";
 
const serviceData = [
  {
    title: "General",
    list: [
      "Monitoring vital signs",
      "Administration of Medications",
      "Glucose monitoring",
      "IV cannulation",
      "Ryles tube insertion",
      "Foley catheter isation",
      "Bed sore care",
      "Feeding Enteral and parentral",
      "Minor dressings"
    ],
    img: "assets/images/slider1.jpg",
  },
  {
    title: "Post Operative",
    list: [
      "Wound care",
      "Tracheostomy care",
      "Post operative dressing",
      "Stitch removal",
      "Enema",
      "Bladder care"
    ],
    img: "assets/images/slider2.jpg",
  },
  {
    title: "Geriatric",
    list: [
      "Advanced planning",
      "Medications",
      "Skin care",
      "Oral care",
      "Physiotherapy",
      "Bed sore care",
      "Mobility Support",
      "Ambulation",
      "Bowel and Bladder care"
    ],
    img: "assets/images/slider3.jpg",
  },
  {
    title: "Critical",
    list: [
      "24 hour monitoring",
      "CPAP/BIPAP",
      "Mechanical ventilation",
      "Bedside USG/XRAY/ECG/ABG",
      "Point of care-investigation services"
    ],
    img: "assets/images/slider1.jpg",
  },
  {
    title: "Palliative",
    list: [
      "Chronic pain syndrome management",
      "Cancer pain management",
      "Post operative pain management",
      "Counselling services"
    ],
    img: "assets/images/news-image.jpg",
  },
  {
    title: "Pediatric",
    list: [
      "Neonatal care",
      "Post natal care",
      "Specialised Baby sitting",
      "Special care under medical conditions"
    ],
    img: "assets/images/news-image2.jpg",
  },
  {
    title: "Medical Investigation",
    list: [
      "Sample collection - All blood investigations",
      "Bedside USG/XRAY/ECG/ABG"
    ],
    img: "assets/images/news-image3.jpg",
  },
  {
    title: "Customized Care",
    list: ["Give us a call for any customized homecare."],
    img: "assets/images/team-image1.jpg",
  }
];

function Services(props) {
  return (
    <section id="news" data-stellar-background-ratio="2.5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h2>Our Services</h2>
            {/* <!-- SECTION TITLE --> */}
            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
              <p>
                <span style={{ fontsize: "large" }}>
                  We offer the following homecare services
                </span>
              </p>
            </div>

            <ServiceCard serviceData={serviceData} />
            {/* 
<ServiceCard
              title="General"
              imgSrc={generalImg}
              text={
                <ul>
                  <li>Monitoring Vital signs</li>
                  <li>Administration of Medications</li>
                  <li>Glucose monitoring</li>
                  <li>I V cannulation</li>
                  <li>Ryles tube insertion</li>
                  <li>Foley catheterisation</li>
                  <li>Bed sore care</li>
                  <li>Feeding Enteral and parentral</li>
                  <li>Minor dressings</li>
                </ul>
              }
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
