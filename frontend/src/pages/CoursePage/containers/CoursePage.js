import React from 'react';
import Button from '@material-ui/core/Button';
import CourseMate from '../components/CourseMate';

const Course = () => {
  const classmates = [
    {
      name: 'Xin Rui Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613253166/IMG_9134_glgvfh.jpg',
      faculty: 'Faculty of Science - McGill University',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed elit libero. Curabitur lacus quam, ultrices sed eros consequat, venenatis semper nunc. Suspendisse id ipsum justo. Aliquam egestas congue nunc',
      isOnline: true,
    },
    {
      name: 'William Zhang',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256551/william.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      description: 'In a study session for Calculus III',
      isAway: true,
    },
    {
      name: 'Michael Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256650/michael.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      description: 'In a study session for Discrete Structures',
      isDisturb: true,
    },
    {
      name: 'Xin Rui Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613253166/IMG_9134_glgvfh.jpg',
      faculty: 'Faculty of Science - McGill University',
      description: 'In a study session for Calculus III',
      isOnline: true,
    },
    {
      name: 'William Zhang',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256551/william.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      description: 'In a study session for Calculus III',
      isAway: true,
    },
    {
      name: 'Michael Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256650/michael.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      description: 'In a study session for Discrete Structures',
      isDisturb: true,
    },
  ];

  return (
    <div className="course-page">
      <div className="course-page-flex">
        <h1 className="course-page__header">Calculus II - Winter 2021</h1>
        <Button variant="contained" className="course-page__button">
          Join study call
        </Button>
      </div>
      <div className="course-page-info">
        <h1 className="course-page__header">
          Class <b>Information</b>
        </h1>
        <div className="course-page-info-content">
          <p className="course-page-info__text">Instructor: James Stewart</p>
          <p className="course-page-info__text">Past term average: B-</p>
        </div>
      </div>
      <div className="course-page-mates">
        <div className="course-page-header">
          <h1 className="course-page__header">
            View <b>Classmates</b>
          </h1>
          <input className="course-page__search" placeholder="Search..." />
        </div>
        <div className="course-classmates">
          {classmates.map(({ name, imageUrl, faculty, description }) => {
            return (
              <CourseMate
                name={name}
                imageUrl={imageUrl}
                faculty={faculty}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
