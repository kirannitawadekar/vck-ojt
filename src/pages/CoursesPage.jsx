import React from "react";
import './CoursesPage.css'
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CoursesPage =() =>{
    return(
        <div >
            <Header/>
            <div className="o">
                <h1 className="h1">Our Academic Program</h1>
                <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                <video width="750"height="400"controls>
                    <source src="/Videos/courses.mp4"/>
                </video>
                <h2>Undergraduate Programs(UG)</h2>
                <hr></hr>
                <ul>
                    <li>**Bachelor of Science (B.Sc.)**</li>
                        <ul>
                            <li>Computer Science (3 years)</li>
                            <li>Information Technology (3 years)</li>
                            <li>Biotechnology (3 years)</li>
                        </ul>
                </ul>
                <ul>
                    <li>**Bachelor of Commerce (B.Com)**</li>
                        <ul>
                            <li>Accounting & Finance (3 years)</li>
                            <li>Banking & Insurance (3 years)</li>
                        </ul>
                </ul>
                <ul>
                    <li>**Bachelor of Arts (B.A.)**</li>
                        <ul>
                            <li>English Literature (3 years)</li>
                            <li>Psychology (3 years)</li>
                        </ul>
                </ul>
                <h2>Postgraduate Program</h2>
                <hr></hr>
                <ul>
                    <li>**Master of Science (M.Sc.)**</li>
                     <ul>
                         <li>Computer Science (2 years)</li>
                         <li>Information Technology (2 years)</li>
                     </ul>
                    <li>**Master of Commerce (M.Com)** (2 years)</li>
                    <li>**Master of Arts (M.A.)** (2 years)</li>
                </ul>
                <h2>Program Details & Fee Structure (Annual)</h2>
                <table border="1">
                    <tr>
                        <th>Program Type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee(INR)</th>
                        <th>Eligibility</th>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Sc.Computer Science</td>
                        <td>3 Years</td>
                        <td>85000</td>
                        <td>10+2 with PCM(50%)</td>                   
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Com. Account & Finance</td>
                        <td>3 Years</td>
                        <td>70000</td>
                        <td>10+2 Commerce(45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc.Information Technology</td>
                        <td>2 Years</td>
                        <td>95000</td>
                        <td>B.Sc.IT/CS(50%)</td>
                    </tr>
                </table>
                <h2>Specialized & Vocational Courses</h2>
                <hr></hr>
                <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
                <center><p>Explore detailed syllabi and admission criteria on our Admissions page.</p></center>
                <center><Link to="/contactpage"><button className="butto">Inquire About Courses</button></Link></center>
            </div>
            <Footer/>
        </div>
        
        
    )
}

export default CoursesPage