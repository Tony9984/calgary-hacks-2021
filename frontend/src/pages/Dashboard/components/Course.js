import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ name, instructor, image, isPast, index }) => {
  return (
    <div
      className={isPast ? 'course--past' : 'course'}
      style={index === 0 ? { marginLeft: 0 } : {}}
    >
      <img src={image} alt={name} className="course__image" />
      <div className="course-label">
        <p className="course__header">{name}</p>
        <p className="course__subtitle">Prof. {instructor}</p>
      </div>
    </div>
  );
};

Course.propTypes = {
  name: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isPast: PropTypes.bool,
};

Course.defaultProps = {
  isPast: false,
};

export default Course;
