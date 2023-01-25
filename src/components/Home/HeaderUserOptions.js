import React from 'react';
import HeaderModalOptions from './HeaderModalOptions';

import { useState } from 'react';
import { Popover, Button } from '@mantine/core';

const HeaderUserOptions = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      className="popover"
      opened={opened}
      onChange={setOpened}
      style={{
        backgroundColor: '#fff',
      }}>
      <Popover.Target>
        <Button onClick={() => setOpened((o) => !o)}>
          <div className="modal__container">
            <img
              src="https://i.postimg.cc/J09qWnKt/menu-2.png"
              alt="menu"
              style={{ width: '24px', height: '24px' }}
            />
          </div>
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <HeaderModalOptions />
      </Popover.Dropdown>
    </Popover>
  );
};

export default HeaderUserOptions;
