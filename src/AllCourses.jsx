import { useState, useEffect } from 'react';
import { fetchAllCourses } from './Services/CourseService';
import './AllCourses.css';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const allCourses = fetchAllCourses();
        setCourses(allCourses);
    }, []);

    return (
        <div className="card-container">
            {courses.map((course) => (
                <div key={course.id} className="card">
                    {course.image && <img src={course.image} alt={course.title} />} 
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <p>{course.paragraph}</p>
                    <button className='btn'>Explore Course</button>
                </div>
            ))}
        </div>
    );
};

export default AllCourses;
