import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AdmissionsPage from './pages/AdmissionsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CoursesPage from './pages/CoursesPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import NotFoundPage from './pages/NotFoundPage'

const App =() =>{ 
    return(
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
    )
}

export default App