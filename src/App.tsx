import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition'
library.add(fas)
const App: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="primary" size="5x" ></Icon>
        horizontal Menu
        {/* submenu */}
        {/* 子菜单默认展开功能 */}
        <Menu mode="vertical" defaultOpenSubMenus={['2']} defaultIndex='0' onSelect={(index) => { alert(index) }}>
          <MenuItem  >submenu</MenuItem>
          <MenuItem disabled>submenu</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem  >submenu</MenuItem>
            <MenuItem  >submenu</MenuItem>
            <MenuItem  >submenu</MenuItem>
          </SubMenu>
        </Menu>
        <Menu mode="horizontal" defaultIndex='0' onSelect={(index) => { alert(index) }}>
          <MenuItem  >submenu</MenuItem>
          <MenuItem disabled>submenu</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem  >submenu</MenuItem>
            <MenuItem  >submenu</MenuItem>
            <MenuItem  >submenu</MenuItem>
          </SubMenu>
        </Menu>

        <Button size="lg" onClick={() => { setShow(!show) }}>Toggle Jack</Button>
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <div>
            <p>Edit <code>src/app.tsx</code></p>
            <p>Edit <code>src/app.tsx</code></p>
            <p>Edit <code>src/app.tsx</code></p>
            <p>Edit <code>src/app.tsx</code></p>
            <p>Edit <code>src/app.tsx</code></p>
            <p>Edit <code>src/app.tsx</code></p>
            <p>Edit <code>src/app.tsx</code></p>
          </div>
        </Transition>
        <Transition wrapper in={show} timeout={300} animation="zoom-in-left">
        <Button size="lg" onClick={() => { setShow(!show) }}>Toggle Jack</Button>
        </Transition>
        <Menu defaultIndex='0' onSelect={(index) => { alert(index) }}>
          <MenuItem  >cool link</MenuItem>
          <MenuItem disabled>cool link</MenuItem>
          <MenuItem  >cool link</MenuItem>
        </Menu>
        <br />
        <Menu mode="vertical" defaultIndex='0' onSelect={(index) => { alert(index) }}>
          <MenuItem  >cool link</MenuItem>
          <MenuItem disabled>cool link</MenuItem>
          <MenuItem  >cool link</MenuItem>
        </Menu>
        <Button autoFocus >autofocus</Button>
        <Button onClick={(e) => { e.preventDefault(); alert(3); }} >autofocus</Button>
        <Button>jack</Button>
        <Button disabled>jack</Button>
        <Button btnType='primary' size='lg'>hello</Button>
        <Button btnType='link' href='http:www.bidu.com' target="_blank">baidu</Button>
        <Button btnType='link' disabled href='http:www.bidu.com'>hello</Button>
        <Button btnType='danger' size='sm'>hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
