import React from "react";
import './HomePage.css'
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const HomePage =() =>{
    return(
        <div>
            <Header/>
            <div id="scroller">
                <div className="top">
                    <h1 className="lo">Welcome to Vivekanand College!</h1>
                    <p className="k">Your journey to excellence starts here.</p>
                    <div>
                        <Link to="/admissionspage"><button className="butto">Apply Now!</button></Link>
                    </div>
                </div>
                <div>
                    <p>**Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.<br></br>
At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                    <h2>Why choose Vivekanand College?</h2>
                    <ul>
                        <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
                        <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
                        <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
                        <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
                    </ul>
                    <h2>Campus Life & Facilities</h2>
                    <img src="/Images/facility.jpg"height="200"width="350"></img>
                    <img src="/Images/college.jpg"height="200"width="350"></img>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                    <center><p>Ready to explore our courses?</p></center>
                    <center><Link to="/coursespage" ><button className="butt">Explore Courses</button></Link></center>
                </div>
            <div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage