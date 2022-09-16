import React from 'react';

import '../../assets/styles/HomeStyles/HeaderUserOptions.css';

import HeaderModalOptions from './HeaderModalOptions';

import { useState } from 'react';
import { Popover } from '@mantine/core';

const HeaderUserOptions = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="header__options__container">
      <div className="header__options__host">
        {/* <Link to="/hosting">Become a host</Link> */}
        <a href="/#">Become a host</a>
      </div>

      <div className="header__options__user">
        <Popover width={200} position="bottom-end" radius={10}>
          <Popover.Target>
            <div
              className="header__options__user__img"
              onClick={() => setOpened(true)}>
              <img
                src="https://i.postimg.cc/6Q8gFq0S/user.png"
                alt="User options"
              />
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <HeaderModalOptions />
          </Popover.Dropdown>
        </Popover>
      </div>
    </div>
  );
};

export default HeaderUserOptions;
