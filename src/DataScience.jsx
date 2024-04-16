import PropTypes from 'prop-types';


const DataScience = ({ courses }) => {
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

DataScience.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            paragraph: PropTypes.string.isRequired,
            image: PropTypes.string,
        })
    ).isRequired,
};

export default DataScience;
