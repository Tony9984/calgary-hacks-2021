import React from 'react';
import Friend from '../components/Friend';
import '../styles/friends.scss';

const Friends = () => {
  const friends = [
    {
      name: 'Xin Rui Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613253166/IMG_9134_glgvfh.jpg',
      faculty: 'Faculty of Science - McGill University',
      connection: 'In a study session for Calculus III',
      isOnline: true,
    },
    {
      name: 'William Zhang',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256551/william.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      connection: 'In a study session for Calculus III',
      isAway: true,
    },
    {
      name: 'Michael Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256650/michael.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      connection: 'In a study session for Discrete Structures',
      isDisturb: true,
    },
    {
      name: 'Kelly Steele',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613276400/student3_wkevjr.png',
      faculty: 'Faculty of Arts - McGill University',
      connection: 'In a study session for Roman History',
      isOnline: true,
    },
    {
      name: 'Karla Cassidy',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613276402/student2_tcxdc2.png',
      faculty: 'Faculty of Business - McGill University',
      connection: 'Offline',
      isOffline: true,
    },
    {
      name: 'Katelin Curtis',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613276398/student4_bbuo7b.png',
      faculty: 'Faculty of Engineering - McGill University',
      connection: 'Offline',
      isOffline: true,
    },
    {
      name: 'Karla Hamel',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613276404/student1_hr02ga.png',
      faculty: 'Faculty of Science - McGill University',
      connection: 'Offline',
      isOffline: true,
    },
  ];
  // prettier-ignore
  const friendList = friends.map(person => {
    return (
      <Friend
        name={person.name}
        imageUrl={person.imageUrl}
        faculty={person.faculty}
        connection={person.connection}
        isAway={person.isAway}
        isDisturb={person.isDisturb}
        isOnline={person.isOnline}
        isOffline={person.isOffline}
      />
    );
  });
  return <div className="friends-list">{friendList}</div>;
};

export default Friends;
