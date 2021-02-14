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
      connection: 'Currently connected in a study session for Calculus II',
    },
    {
      name: 'Tony Ou',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256494/tony.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      connection: 'Currently connected in a study session for Calculus II',
    },
    {
      name: 'William Zhang',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256551/william.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      connection: 'Currently connected in a study session for Calculus II',
    },
    {
      name: 'Michael Li',
      imageUrl:
        'https://res.cloudinary.com/die52atcc/image/upload/v1613256650/michael.jpg',
      faculty: 'Faculty of Engineering - McGill University',
      connection: 'Currently connected in a study session for Calculus II',
    },
  ];

  const friendList = friends.map(person => {
    return (
      <Friend
        name={person.name}
        imageUrl={person.imageUrl}
        faculty={person.faculty}
        connection={person.connection}
      />
    );
  });
  return <div className="friends-list">{friendList}</div>;
};

export default Friends;
