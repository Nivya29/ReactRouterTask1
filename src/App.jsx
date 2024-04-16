import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import { fetchAllCourses } from './Services/CourseService';
import './App.css';

function App() {
    const allCourses = fetchAllCourses(); 
    
    const filterCoursesByTitle = (title) => {
        return allCourses.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));
    };

    return (
        <div className='container'>
            <img className="header" src="./img1.png" alt="Guvi Blog" />
            <Navigation />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<AllCourses />} />
                    <Route path="/all" element={<AllCourses courses={allCourses} />} />
                    <Route path="/full-stack-development" element={<FullStackDevelopment courses={filterCoursesByTitle('fullstack')} />} />
                    <Route path="/data-science" element={<DataScience courses={filterCoursesByTitle('datascience')} />} />
                    <Route path="/cyber-security" element={<CyberSecurity courses={filterCoursesByTitle('cybersecurity')} />} />
                    <Route path="/career" element={<Career courses={filterCoursesByTitle('career')} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
