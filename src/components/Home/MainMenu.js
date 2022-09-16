import React from 'react';
import '../../assets/styles/HomeStyles/MainMenu.css';
import MainIconsMenu from './MainIconsMenu';

const icons = [
  {
    id: 1,
    icon: 'https://i.postimg.cc/Vkq03JXN/island.png',
    text: 'Island',
  },
  {
    id: 2,
    icon: 'https://i.postimg.cc/VvnynVjB/national-park.png',
    text: 'National Park',
  },
  {
    id: 3,
    icon: 'https://i.postimg.cc/3NnXSKCK/tiny-house.png',
    text: 'Tiny Home',
  },
  {
    id: 4,
    icon: 'https://i.postimg.cc/P5rXndWg/ovni.png',
    text: 'OMG',
  },
  {
    id: 5,
    icon: 'https://i.postimg.cc/PxMVHnz7/snowflake.png',
    text: 'Artic',
  },
  {
    id: 6,
    icon: 'https://i.postimg.cc/FFDCnmKd/cabin.png',
    text: 'Cabins',
  },
  {
    id: 7,
    icon: 'https://i.postimg.cc/LsKxZ8x7/dome.png',
    text: 'Domes',
  },
  {
    id: 8,
    icon: 'https://i.postimg.cc/GmYQr1bj/tent.png',
    text: 'Camping',
  },
  {
    id: 9,
    icon: 'https://i.postimg.cc/L5ntbcyL/house.png',
    text: 'A-frames',
  },
  {
    id: 10,
    icon: 'https://i.postimg.cc/XYwwmcgH/mansion.png',
    text: 'Design',
  },
  {
    id: 11,
    icon: 'https://i.postimg.cc/j59wLLXn/surfing.png',
    text: 'Surfing',
  },
  {
    id: 12,
    icon: 'https://i.postimg.cc/8kj0FcDp/swimming-pool.png',
    text: 'Amazing pools',
  },
  {
    id: 13,
    icon: 'https://i.postimg.cc/x1yxrbGR/treehouse.png',
    text: 'Treehouses',
  },
];

const MainMenu = () => {
  return (
    <div className="main__menu">
      <nav className="main__icons__menu">
        {icons.map((icon) => (
          <MainIconsMenu key={icon.id} icon={icon.icon} text={icon.text} />
        ))}
      </nav>
    </div>
  );
};

export default MainMenu;
