import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li><Link to="/">All</Link></li>
                <li><Link to="/full-stack-development">Full Stack Development</Link></li>
                <li><Link to="/data-science">Data Science</Link></li>
                <li><Link to="/cyber-security">Cyber Security</Link></li>
                <li><Link to="/career">Career</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;