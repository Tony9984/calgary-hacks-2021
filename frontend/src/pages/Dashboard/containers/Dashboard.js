import React from 'react';
import Course from '../components/Course';
import Science from '../../../assets/science.svg';
import Math from '../../../assets/math.svg';
import Finance from '../../../assets/finance.svg';
import Marketing from '../../../assets/presentation.svg';
import Computer from '../../../assets/computer.svg';
import Physics from '../../../assets/startup.svg';

const Dashboard = () => {
  const courses = [
    {
      name: 'Principles Of Marketing',
      instructor: 'Hamid Ethemad',
      image: Marketing,
    },
    {
      name: 'Calculus II',
      instructor: 'James Stewart',
      image: Math,
    },
    {
      name: 'Intro to Finance',
      instructor: 'Vadim Di Pietro',
      image: Finance,
    },
    {
      name: 'Data Structures',
      instructor: 'Chris Moore',
      image: Computer,
    },
  ];

  const pastCourses = [
    {
      name: 'Calculus I',
      instructor: 'James Stewart',
      image: Math,
    },
    {
      name: 'Biology I',
      instructor: 'Hamid Ethemad',
      image: Science,
    },
    {
      name: 'Physics II',
      instructor: 'Vadim Di Pietro',
      image: Physics,
    },
  ];

  return (
    <div className="dashboard">
      <input className="dashboard__search" placeholder="Search..." />
      <div className="dashboard-courses">
        <h1 className="dashboard-courses__header">
          Current <b>Courses</b>
        </h1>
        <div className="dashboard-courses__courses">
          {courses.map(({ name, instructor, image }, index) => {
            return (
              <Course
                name={name}
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
          Past <b>Courses</b>
        </h1>
        <div className="dashboard-courses__courses">
          {pastCourses.map(({ name, instructor, image }, index) => {
            return (
              <Course
                name={name}
                instructor={instructor}
                image={image}
                index={index}
                isPast
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
