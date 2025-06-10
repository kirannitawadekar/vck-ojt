import React from "react";
import './ContactPage.css'
import { Link } from 'react-router-dom'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const ContactPage =() =>{
    return(
        <div>
            <Header/>
            <div className="j">
                <center><h1 className="logo">Contact Us</h1></center>
                <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                <h2>General Enquiries</h2>
                <h4>Vivekanand College Main Campus</h4>
                <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                India<br></br>

                Phone: **+91 12345 67890**<br></br>
                Email: **info@vivekanandcollege.edu**<br></br>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
                <h2>Admission Office</h2>  
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
                Phone: +91 98765 43210<br></br>
                Email: admissions@vivekanandcollege.edu</p>
                <h2>Student Support Services</h2>
                <p>For current student support, academic advising, or general assistance:<br></br>
                Phone: +91 87654 32109<br></br>
                Email: studentsupport@vivekanandcollege.edu</p>
                <h2>Find Us on the Map</h2>
                <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
                <a href="https://maps.google.com/?q=Vivekanand+College"><u className="u">View on Google Map</u></a>
                <h2>Send Us</h2>
                <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
            </div>
            <Footer/>
        </div>       
    )
}

export default ContactPage