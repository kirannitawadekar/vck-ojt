import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AdmissionsPage from './pages/AdmissionsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CoursesPage from './pages/CoursesPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import NotFoundPage from './pages/NotFoundPage'
import { useState } from 'react'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'

const App =() =>{ 
    const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
        <>
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Kiran Arun Nitawadekar"
          studentPhotoUrl="/Images/myphoto2.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/admissionspage" element={<AdmissionsPage/>}/>
                    <Route path="/aboutpage" element={<AboutPage/>}/>
                    <Route path="/contactpage" element={<ContactPage/>}/>
                    <Route path="/coursespage" element={<CoursesPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
                <ChatbotComponent/>
            </Router>
        </div>
        </>
    )
}

export default App