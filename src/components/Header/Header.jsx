import {Link} from 'react-router-dom'
import './Header.css'

const Header =() =>{

    return(
        <header>
            <nav className='navbar'>
                <Link className='f'>Vivekanand College</Link>
                <Link className='f'to='/homepage'>Home</Link>
                <Link to='/admissionspage'></Link>
                <Link className='f'to='/aboutpage'>About</Link>
                <Link className='f'to='/coursespage'>Course</Link>
                <Link className='f'to='/contactpage'>Contact</Link>
                <Link className='f'to='/admissionspage'><button className='but'><u>Apply Now!</u></button></Link>
            </nav>
        </header>
    )
}

export default Header

