import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AdmissionsPage from './pages/AdmissionsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CoursesPage from './pages/CoursesPage'

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
                </Routes>
            </Router>
        </div>
    )
}

export default App