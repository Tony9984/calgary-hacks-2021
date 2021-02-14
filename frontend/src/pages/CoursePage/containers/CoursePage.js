import React from 'react';
import Button from '@material-ui/core/Button';
import CourseMate from '../components/CourseMate';

const Course = () => {
  const meetingUrl =
    'https://teams.microsoft.com/l/channel/19%3a57c98d2546f6498f9787cfb9c2abf601%40thread.tacv2/General?groupId=fef849ef-062e-4803-8198-7a6d975f707e&tenantId=cd319671-52e7-4a68-afa9-fcf8f89f09ea';
  const classmates = [
    {
      name: 'Xin Rui Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613253166/IMG_9134_glgvfh.jpg',
      faculty: 'Faculty of Science - McGill University',
      description:
        'Xin is freshman at McGill University. His day-to-day activities are focused on schoolwork, extracurricular activities filling his role as President of McGill Curling Society. He majors in Computer Science with a minor in African studies. He enjoys solving Quantum Mechanics problems on the black board and chatting about femnist.',
      isOnline: true,
    },
    {
      name: 'William Zhang',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256551/william.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      description:
        'Will is a transfer student who has arrived from Universite de Quebec en Outaouais. He is looking to finish his degree in Agricultural Engineering. He is a big fan of Matuidi Charo and enjoys hacking on some hardware in his spare time.',
      isAway: true,
    },
    {
      name: 'Michael Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256650/michael.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      description:
        'Mike is rising senior studying in Mining Engineering. He dreams about finding previous rocks in the middle east and enjoys the sunny weather of Dubai.',
      isDisturb: true,
    },
    {
      name: 'Kayla Michaels',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613253166/IMG_9134_glgvfh.jpg',
      faculty: 'Faculty of Science - McGill University',
      description:
        'Kayle is a junior studying Microbiology at McGill University. She is germophobe and is currently home in Alaska due COVID-19.',
      isOnline: true,
    },
    {
      name: 'Sami Khedira',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256551/william.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      description:
        'Sami is a student in Software Engineering. He is strong in math and likes to solve ordinary differential equations. In his spare time, he reads about theory of relativity. He is currently working on his Capstone Project which is to buidl an autonomous car.',
      isAway: true,
    },
    {
      name: 'Mohammad Mohammad',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256650/michael.jpg',
      faculty: 'Faculty of Music - McGill University',
      description:
        'Mo is Piano Performance major dreaming of playing in the Teatro Colon in Sydney. In his free time, he enjoys learning about the atmosphere and practices his scales 3 hours per day.',
      isDisturb: true,
    },
  ];

  return (
    <div className="course-page">
      <div className="course-page-flex">
        <h1 className="course-page__header">Calculus II - Winter 2021</h1>
        <Button
          variant="contained"
          className="course-page__button"
          href={meetingUrl}
          target="_blank"
        >
          Join TEAMS
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
