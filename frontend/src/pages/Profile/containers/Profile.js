import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Course from '../../Dashboard/components/Course';
import Math from '../../../assets/math.svg';
import Finance from '../../../assets/finance.svg';
import Marketing from '../../../assets/presentation.svg';
import Computer from '../../../assets/computer.svg';
import Physics from '../../../assets/startup.svg';

const Profile = ({ match }) => {
  const {
    params: { name },
  } = match;
  const courses = [
    {
      courseName: 'Operating Systems',
      instructor: 'Joseph Vybihal',
      image: Computer,
    },
    {
      courseName: 'Linear Algebra',
      instructor: 'Pythagoras Samos',
      image: Math,
    },
    {
      courseName: 'Probability & Statistics',
      instructor: 'Russell Steele',
      image: Finance,
    },
  ];

  const pastCourses = [
    {
      courseName: 'Calculus II',
      instructor: 'James Stewart',
      image: Math,
    },
    {
      courseName: 'Astrophysics',
      instructor: 'Vadim Di Pietro',
      image: Physics,
    },
    {
      courseName: 'Intro to C++',
      instructor: 'Joseph Vybihal',
      image: Computer,
    },
    {
      courseName: 'Principles Of Marketing',
      instructor: 'Hamid Ethemad',
      image: Marketing,
    },
  ];

  const [search, setSearch] = useState('');

  return (
    <div className="dashboard">
      <input
        className="dashboard__search"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="dashboard-courses">
        <h1 className="dashboard-courses__header">
          {name}&apos;s Current <b>Courses</b>
        </h1>
        <div className="dashboard-courses__courses">
          {courses
            .filter(course =>
              course.courseName.toLowerCase().includes(search.toLowerCase()),
            )
            .map(({ courseName, instructor, image }, index) => {
              return (
                <Course
                  name={courseName}
                  instructor={instructor}
                  image={image}
                  index={index}
                />
              );
            })}
        </div>
      </div>
      <div className="dashboard-courses">
        <h1 className="dashboard-courses__header">
          {name}&apos;s Past <b>Courses</b>
        </h1>
        <div className="dashboard-courses__courses">
          {pastCourses
            .filter(course =>
              course.courseName.toLowerCase().includes(search.toLowerCase()),
            )
            .map(({ courseName, instructor, image }, index) => {
              return (
                <Course
                  name={courseName}
                  instructor={instructor}
                  image={image}
                  index={index}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Profile;
